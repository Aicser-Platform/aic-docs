import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import * as LucideIcons from 'lucide-react';

export default function CategoryWrapper(props) {
  const { item } = props;
  const iconName = item?.customProps?.icon;
  
  // Get the icon component from lucide-react
  const IconComponent = iconName && LucideIcons[iconName];
  
  // Add icon to the label if it exists
  const enhancedItem = IconComponent ? {
    ...item,
    label: (
      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <IconComponent size={18} />
        {item.label}
      </span>
    ),
  } : item;

  return <Category {...props} item={enhancedItem} />;
}
