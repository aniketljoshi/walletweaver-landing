import { useState } from 'react';
import { Bell, Plus, Trash2, Pause, Play, Send, MessageCircle, Mail, Webhook } from 'lucide-react';
import alertsData from '../../data/demo/alerts.json';

const alertTypes = [
    { value: 'token_accumulation', label: 'Token Accumulation' },
    { value: 'wallet_activity', label: 'Wallet Activity' },
    { value: 'first_buy', label: 'First Buy' },
    { value: 'copy_trade', label: 'Copy Trade' },
    { value: 'narrative_alert', label: 'Narrative Alert' },
];

const channels = [
    { id: 'telegram', icon: Send, label: 'Telegram' },
    { id: 'discord', icon: MessageCircle, label: 'Discord' },
    { id: 'email', icon: Mail, label: 'Email' },
    { id: 'webhook', icon: Webhook, label: 'Webhook' },
];

export default function DemoAlerts() {
    const [showBuilder, setShowBuilder] = useState(false);
    const [selectedChannels, setSelectedChannels] = useState<string[]>(['telegram']);
    const [alertType, setAlertType] = useState('wallet_activity');

    const toggleChannel = (channelId: string) => {
        setSelectedChannels((prev) =>
            prev.includes(channelId) ? prev.filter((c) => c !== channelId) : [...prev, channelId]
        );
    };

    return (
        <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Bell className="w-6 h-6 text-blue-400" />
                        <h1 className="text-2xl font-bold text-white">Alerts & Copy-Trading</h1>
                    </div>
                    <p className="text-slate-400">Set up alerts and automated strategies</p>
                </div>
                <button
                    onClick={() => setShowBuilder(!showBuilder)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    New Alert
                </button>
            </div>

            {/* Alert Builder */}
            {showBuilder && (
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-6">
                    <h2 className="font-semibold text-white mb-4">Create New Alert</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-slate-400 mb-2">Alert Type</label>
                                <select
                                    value={alertType}
                                    onChange={(e) => setAlertType(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
                                >
                                    {alertTypes.map((type) => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-slate-400 mb-2">Wallet or Token</label>
                                <input
                                    type="text"
                                    placeholder="Enter address or ENS..."
                                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-slate-400 mb-2">Min Smart Money Score</label>
                                <input
                                    type="number"
                                    placeholder="80"
                                    defaultValue={80}
                                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-slate-400 mb-2">Notification Channels</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {channels.map((channel) => (
                                        <button
                                            key={channel.id}
                                            onClick={() => toggleChannel(channel.id)}
                                            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border transition-colors ${selectedChannels.includes(channel.id)
                                                    ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                                                    : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:text-white'
                                                }`}
                                        >
                                            <channel.icon className="w-4 h-4" />
                                            <span className="text-sm">{channel.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-slate-400 mb-2">Alert Name</label>
                                <input
                                    type="text"
                                    placeholder="My Custom Alert"
                                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-slate-700/50">
                        <button
                            onClick={() => setShowBuilder(false)}
                            className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => setShowBuilder(false)}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                        >
                            Create Alert
                        </button>
                    </div>
                </div>
            )}

            {/* Existing Alerts */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-slate-700/50">
                    <h2 className="font-semibold text-white">Active Alerts</h2>
                </div>
                <div className="divide-y divide-slate-800/50">
                    {alertsData.map((alert) => (
                        <div key={alert.id} className="p-4 hover:bg-slate-800/20 transition-colors">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-medium text-white">{alert.name}</span>
                                        <span className={`px-2 py-0.5 text-xs rounded-full ${alert.status === 'active'
                                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                                            }`}>
                                            {alert.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-400">
                                        Type: {alert.type.replace('_', ' ')} · Triggered {alert.triggeredCount} times
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        {alert.channels.map((ch) => {
                                            const channel = channels.find((c) => c.id === ch);
                                            if (!channel) return null;
                                            return (
                                                <span
                                                    key={ch}
                                                    className="inline-flex items-center gap-1 px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                                                >
                                                    <channel.icon className="w-3 h-3" />
                                                    {channel.label}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-400 hover:text-white">
                                        {alert.status === 'active' ? (
                                            <Pause className="w-4 h-4" />
                                        ) : (
                                            <Play className="w-4 h-4" />
                                        )}
                                    </button>
                                    <button className="p-2 hover:bg-red-500/10 rounded-lg transition-colors text-slate-400 hover:text-red-400">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
