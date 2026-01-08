import React from 'react';
import * as Icons from 'lucide-react';

/**
 * IconHeading component - Heading with icon
 * @param {string} icon - Name of the Lucide icon
 * @param {number} level - Heading level (1-6, default: 2)
 * @param {React.ReactNode} children - Heading content
 * @param {string} className - Additional CSS classes
 */
export function IconHeading({ icon, children, level = 2, className = '' }) {
  const Icon = Icons[icon];
  const Tag = `h${level}`;
  
  const iconSize = level === 1 ? 32 : level === 2 ? 28 : 24;
  
  return (
    <Tag 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem' 
      }}
      className={className}
    >
      {Icon && <Icon size={iconSize} />}
      {children}
    </Tag>
  );
}

/**
 * Pre-configured heading components for common use cases
 */
export const H1Icon = ({ icon, children, ...props }) => (
  <IconHeading icon={icon} level={1} {...props}>{children}</IconHeading>
);

export const H2Icon = ({ icon, children, ...props }) => (
  <IconHeading icon={icon} level={2} {...props}>{children}</IconHeading>
);

export const H3Icon = ({ icon, children, ...props }) => (
  <IconHeading icon={icon} level={3} {...props}>{children}</IconHeading>
);
