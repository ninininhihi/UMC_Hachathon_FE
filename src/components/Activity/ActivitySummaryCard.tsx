import React from 'react';

interface ActivitySummaryCardProps {
    title: string;
    count: number;
    isActive: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    variant: 'all' | 'solved' | 'unsolved' | 'helped';
}

const ActivitySummaryCard: React.FC<ActivitySummaryCardProps> = ({
    title,
    count,
    isActive,
    onClick,
    icon,
    variant
}) => {
    // Determine active colors based on variant
    const getActiveStyles = () => {
        if (!isActive) return 'bg-white border-gray-200 text-gray-900 shadow-sm';

        // Active states (Using border color to indicate selection, but background remains white or slight tint)
        // Adjusting to match the image style: Active cards seem to have a colored border or icon color.
        // Let's make the border colored when active.
        switch (variant) {
            case 'solved':
                return 'bg-white border-secondary-700 text-secondary-700 ring-1 ring-secondary-700';
            case 'unsolved':
                return 'bg-white border-status-alert text-status-alert ring-1 ring-status-alert';
            case 'helped':
                return 'bg-white border-primary-400 text-primary-400 ring-1 ring-primary-400';
            case 'all':
            default:
                return 'bg-white border-gray-400 text-gray-900 ring-1 ring-gray-400';
        }
    };

    const getIconColor = () => {
        if (isActive) return 'currentColor'; // Uses text color from parent

        switch (variant) {
            case 'solved': return 'text-secondary-700';
            case 'unsolved': return 'text-status-alert';
            case 'helped': return 'text-primary-400';
            default: return 'text-gray-400';
        }
    };

    return (
        <button
            onClick={onClick}
            className={`
                relative flex flex-col p-4 rounded-xl border transition-all duration-200 text-left
                ${getActiveStyles()}
                hover:shadow-md h-[100px] justify-between cursor-pointer
            `}
        >
            <div className="flex justify-between items-start w-full">
                <div className={`text-2xl ${getIconColor()}`}>
                    {icon}
                </div>
                {/* Optional: Add a small indicator or just layout spacing */}
            </div>

            <div className="flex flex-col">
                <span className={`text-xs font-medium ${isActive ? '' : 'text-gray-500'}`}>{title}</span>
                <span className={`text-xl font-bold ${isActive ? '' : 'text-gray-900'}`}>{count}</span>
            </div>
        </button>
    );
};

export default ActivitySummaryCard;
