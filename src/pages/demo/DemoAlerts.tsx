import { useState } from 'react';
import { Plus, Trash2, Pause, Play, Send, MessageCircle, Mail, Webhook } from 'lucide-react';
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
        <div className="p-2 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Alert Manager</h1>
                    <p className="text-slate-400">Configure real-time sentinels for on-chain events</p>
                </div>
                <button
                    onClick={() => setShowBuilder(!showBuilder)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-neon-cyan hover:bg-white text-void-deep font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
                >
                    <Plus className="w-4 h-4" />
                    Create Sentinel
                </button>
            </div>

            {/* Alert Builder */}
            {showBuilder && (
                <div className="bg-void/40 border-l-4 border-neon-cyan/50 border-y border-r border-white/5 rounded-r-xl p-8 mb-8 backdrop-blur-md animate-[slideIn_0.3s_ease-out]">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold text-white">Configure New Sentinel</h2>
                        <div className="text-xs font-mono text-neon-cyan border border-neon-cyan/30 px-2 py-1 rounded">SYSTEM: READY</div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Detection Logic</label>
                                <select
                                    value={alertType}
                                    onChange={(e) => setAlertType(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all"
                                >
                                    {alertTypes.map((type) => (
                                        <option key={type.value} value={type.value} className="bg-slate-900">
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Target Entity</label>
                                <input
                                    type="text"
                                    placeholder="Enter address, ENS, or Token Symbol..."
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Trigger Threshold</label>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="number"
                                        placeholder="80"
                                        defaultValue={80}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all"
                                    />
                                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="w-4/5 h-full bg-gradient-to-r from-neon-cyan to-neon-blue" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Notification Channels</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {channels.map((channel) => (
                                        <button
                                            key={channel.id}
                                            onClick={() => toggleChannel(channel.id)}
                                            className={`relative flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${selectedChannels.includes(channel.id)
                                                ? 'bg-neon-cyan/10 border-neon-cyan/40 text-neon-cyan shadow-[0_0_10px_rgba(0,229,255,0.1)]'
                                                : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:border-white/10 hover:text-white'
                                                }`}
                                        >
                                            <channel.icon className="w-4 h-4" />
                                            <span className="text-sm font-medium">{channel.label}</span>
                                            {selectedChannels.includes(channel.id) && (
                                                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_5px_rgba(0,229,255,1)]" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Sentinel Label</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Whale Accumulation on Base"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all font-mono text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-white/5">
                        <button
                            onClick={() => setShowBuilder(false)}
                            className="px-6 py-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => setShowBuilder(false)}
                            className="px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-white hover:to-white hover:text-void-deep text-white font-bold rounded-lg transition-all shadow-lg"
                        >
                            Deploy Sentinel
                        </button>
                    </div>
                </div>
            )}

            {/* Existing Alerts */}
            <div className="bg-void/40 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="p-5 border-b border-white/5 flex items-center justify-between">
                    <h2 className="font-semibold text-white tracking-wide">Active Sentinels</h2>
                    <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                        running in background
                    </div>
                </div>
                <div className="divide-y divide-white/5">
                    {alertsData.map((alert) => (
                        <div key={alert.id} className="p-5 hover:bg-white/5 transition-colors group">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="font-bold text-white text-lg">{alert.name}</span>
                                        <span className={`px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded border ${alert.status === 'active'
                                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                            }`}>
                                            {alert.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-400 flex items-center gap-2">
                                        <span className="text-slate-500">Logic:</span>
                                        <span className="text-slate-300 font-mono">{alert.type.replace('_', ' ')}</span>
                                        <span className="text-slate-600">•</span>
                                        <span className="text-slate-500">Events:</span>
                                        <span className="text-white font-bold">{alert.triggeredCount}</span>
                                    </p>
                                    <div className="flex items-center gap-2 mt-3">
                                        {alert.channels.map((ch) => {
                                            const channel = channels.find((c) => c.id === ch);
                                            if (!channel) return null;
                                            return (
                                                <span
                                                    key={ch}
                                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/5 text-slate-300 text-xs rounded-full"
                                                >
                                                    <channel.icon className="w-3 h-3 text-slate-500" />
                                                    {channel.label}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white border border-white/5 hover:border-white/10">
                                        {alert.status === 'active' ? (
                                            <Pause className="w-4 h-4" />
                                        ) : (
                                            <Play className="w-4 h-4" />
                                        )}
                                    </button>
                                    <button className="p-2.5 bg-rose-500/10 hover:bg-rose-500/20 rounded-lg transition-colors text-rose-400 border border-rose-500/10 hover:border-rose-500/30">
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
