import React from 'react';
import type { Post } from '../../types/post';
import CommentIcon from '../../assets/community/comment_icon.svg?react';
import HeartIcon from '../../assets/community/heart_icon.svg?react';

export type ActivityItemType = 'solved' | 'unsolved' | 'helped';

interface ActivityPostItemProps {
    post: Post;
    type: ActivityItemType;
    onClick?: () => void;
}

const ActivityPostItem: React.FC<ActivityPostItemProps> = ({ post, type, onClick }) => {
    // Styles based on type
    const getStyles = () => {
        switch (type) {
            case 'solved':
                return {
                    borderColor: 'border-secondary-700', // green
                    textColor: 'text-secondary-700',
                    badgeBorder: 'border-secondary-700',
                    badgeText: 'text-gray-600',
                    icon: (
                        <svg className="w-5 h-5 text-secondary-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    ),
                    badgeLabel: "해결"
                };
            case 'unsolved':
                return {
                    borderColor: 'border-status-alert', // red
                    textColor: 'text-status-alert',
                    badgeBorder: 'border-status-alert',
                    badgeText: 'text-gray-600',
                    icon: (
                        <svg className="w-5 h-5 text-status-alert" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    ),
                    badgeLabel: "미해결"
                };
            case 'helped':
                return {
                    borderColor: 'border-primary-400', // purple
                    textColor: 'text-primary-400',
                    badgeBorder: 'border-primary-400',
                    badgeText: 'text-gray-600',
                    icon: (
                        <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.699-3.181a1 1 0 011.768.951L17 7.376V15a1 1 0 01-1 1h-2a1 1 0 00-1 1v1a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1a1 1 0 00-1-1H4a1 1 0 01-1-1V7.376l-1.421-3.696a1 1 0 011.768-.95l1.699 3.181L10 4.323V3a1 1 0 010-2z" clipRule="evenodd" />
                            {/* Simple Star/Medal shape replacement for better visual */}
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ),
                    badgeLabel: "내가 도운 글"
                };
        }
    };

    const styles = getStyles();

    return (
        <div
            onClick={onClick}
            className={`
                bg-white rounded-xl shadow-sm border border-gray-100 
                border-l-[6px] ${styles.borderColor}
                p-5 cursor-pointer hover:bg-gray-50 transition-colors
            `}
        >
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                    <span className="shrink-0">{styles.icon}</span>
                    <h3 className="text-body-1 font-bold text-gray-900 line-clamp-1">{post.title}</h3>
                </div>
                <span className={`
                    shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold
                    border ${styles.badgeBorder} ${styles.badgeText} bg-white
                `}>
                    {styles.badgeLabel}
                </span>
            </div>

            <p className="text-body-3 text-gray-600 line-clamp-1 mb-4">
                {post.content}
            </p>

            <div className="flex items-center justify-between text-detail text-gray-400">
                <span>{post.createdAt}</span>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <CommentIcon className="w-4 h-4" />
                        <span>{post.commentCount}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <HeartIcon className="w-4 h-4" />
                        <span>{post.likeCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityPostItem;
