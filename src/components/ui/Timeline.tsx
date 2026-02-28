import React from 'react';
import { FaCircle } from 'react-icons/fa';

interface TimelineItemProps {
  children: React.ReactNode;
  side?: 'left' | 'right';
  active?: boolean;
  last?: boolean;
  date?: string;
  title?: string;
  subtitle?: string;
}

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  side = 'left',
  active = false,
  last = false,
  date,
  title,
  subtitle
}) => {
  return (
    <div className={`relative flex items-start mb-8 ${
      side === 'right' ? 'justify-start md:justify-end' : ''
    }`}>
      {/* Vertical Line */}
      {!last && (
        <div className="absolute left-4 md:left-1/2 top-10 h-full w-px bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />
      )}

      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 z-10">
        <div className={`rounded-full border-4 p-1 ${
          active 
            ? 'border-blue-500 dark:border-blue-400' 
            : 'border-gray-200 dark:border-gray-700'
        }`}>
          <FaCircle 
            className={`w-2 h-2 ${
              active 
                ? 'text-blue-500 dark:text-blue-400' 
                : 'text-gray-400 dark:text-gray-600'
            }`}
          />
        </div>
      </div>

      {/* Content */}
      <div 
        className={`relative flex-1 ${
          side === 'right' ? 'md:mr-16' : 'ml-16 md:ml-16'
        }`}
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          {date && (
            <div className="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2">
              {date}
            </div>
          )}
          {title && (
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
          )}
          {subtitle && (
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {subtitle}
            </div>
          )}
          <div className="text-gray-600 dark:text-gray-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<TimelineItemProps>(child)) {
            return React.cloneElement(child, {
              ...child.props,
              side: index % 2 === 0 ? 'left' : 'right',
              last: index === React.Children.count(children) - 1
            } as TimelineItemProps);
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default Timeline;