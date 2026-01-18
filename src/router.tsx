import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import DemoLayout from './components/demo/DemoLayout';
import DemoEntry from './pages/demo/DemoEntry';
import DemoDashboard from './pages/demo/DemoDashboard';
import DemoWallets from './pages/demo/DemoWallets';
import DemoWalletProfile from './pages/demo/DemoWalletProfile';
import DemoTokens from './pages/demo/DemoTokens';
import DemoTokenProfile from './pages/demo/DemoTokenProfile';
import DemoLeaderboard from './pages/demo/DemoLeaderboard';
import DemoAlerts from './pages/demo/DemoAlerts';
import DemoDeveloper from './pages/demo/DemoDeveloper';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/demo',
        element: <DemoEntry />,
    },
    {
        path: '/demo',
        element: <DemoLayout />,
        children: [
            {
                path: 'dashboard',
                element: <DemoDashboard />,
            },
            {
                path: 'wallets',
                element: <DemoWallets />,
            },
            {
                path: 'wallets/:address',
                element: <DemoWalletProfile />,
            },
            {
                path: 'tokens',
                element: <DemoTokens />,
            },
            {
                path: 'tokens/:address',
                element: <DemoTokenProfile />,
            },
            {
                path: 'leaderboard',
                element: <DemoLeaderboard />,
            },
            {
                path: 'alerts',
                element: <DemoAlerts />,
            },
            {
                path: 'developer',
                element: <DemoDeveloper />,
            },
        ],
    },
]);
