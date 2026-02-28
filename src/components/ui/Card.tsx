import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'interactive';
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg overflow-hidden';
  
  const variants = {
    default: 'shadow',
    hover: 'shadow hover:shadow-lg transition-shadow duration-300',
    interactive: 'shadow hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1'
  };

  const combinedClassName = `
    ${baseStyles}
    ${variants[variant]}
    ${className}
  `.trim();

  return (
    <div className={combinedClassName} onClick={onClick}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`p-6 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

export const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${className}`}>
    {children}
  </h3>
);

export const CardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`p-6 border-t border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

export default Card;