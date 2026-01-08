import * as LucideIcons from 'lucide-react';

/**
 * Icon component using Lucide React icons
 * @param {string} name - Name of the Lucide icon (e.g., 'Rocket', 'Home', 'Settings')
 * @param {number} size - Icon size in pixels (default: 20)
 * @param {string} className - Additional CSS classes
 * @param {string} color - Icon color (default: currentColor)
 * @param {number} strokeWidth - Icon stroke width (default: 2)
 */
export default function Icon({ 
  name, 
  size = 20, 
  className = '', 
  color = 'currentColor',
  strokeWidth = 2,
  ...props 
}) {
  const IconComponent = LucideIcons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }
  
  return (
    <IconComponent 
      size={size} 
      className={`lucide-icon ${className}`}
      color={color}
      strokeWidth={strokeWidth}
      style={{ 
        display: 'inline-block', 
        verticalAlign: 'middle',
        marginRight: '0.3em',
        ...props.style 
      }}
      {...props} 
    />
  );
}
