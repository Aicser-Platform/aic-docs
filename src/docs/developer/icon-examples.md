---
id: icon-examples
title: Icon Examples
sidebar_label: Icon Examples
description: Examples of using Lucide icons in documentation
---

import Icon from '@site/src/components/Icon';
import { IconHeading, H1Icon, H2Icon, H3Icon } from '@site/src/components/IconHeading';
import FeatureCard from '@site/src/components/FeatureCard';

# <Icon name="Palette" size={32} /> Icon Examples

This page demonstrates how to use Lucide icons in your documentation.

## Inline Icons

You can use icons inline with text: <Icon name="Rocket" /> Launch your project <Icon name="Zap" /> with speed!

### Icon Sizes

<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
  <Icon name="Star" size={16} />
  <Icon name="Star" size={24} />
  <Icon name="Star" size={32} />
  <Icon name="Star" size={48} />
</div>

### Icon Colors

<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
  <Icon name="Heart" size={32} color="red" />
  <Icon name="Heart" size={32} color="blue" />
  <Icon name="Heart" size={32} color="green" />
  <Icon name="Heart" size={32} color="orange" />
</div>

## Icon Headings

<H2Icon icon="Rocket">Getting Started</H2Icon>

<H3Icon icon="Settings">Configuration Options</H3Icon>

## Feature Cards

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
  <FeatureCard 
    icon="Bot"
    title="AI-Powered Analytics"
    description="Natural language queries and intelligent insights powered by multi-agent AI system"
    link="/features/ai-overview"
  />
  <FeatureCard 
    icon="BarChart"
    title="30+ Chart Types"
    description="Comprehensive visualization library with ECharts integration"
    link="/features/charts-overview"
  />
  <FeatureCard 
    icon="Shield"
    title="Enterprise Security"
    description="SOC2, GDPR, and HIPAA compliant with advanced security features"
    link="/security"
  />
  <FeatureCard 
    icon="Zap"
    title="High Performance"
    description="Optimized for speed with caching and efficient data processing"
    link="/performance"
  />
  <FeatureCard 
    icon="Database"
    title="Multiple Data Sources"
    description="Connect to databases, warehouses, files, and cloud storage"
    link="/features/data-sources-overview"
  />
  <FeatureCard 
    icon="Users"
    title="Active Community"
    description="Join our growing community of contributors and users"
    link="/community"
  />
</div>

## Common Icons Reference

### Getting Started & Navigation
<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
  <div style={{ textAlign: 'center' }}><Icon name="Rocket" size={32} /><br/>Rocket</div>
  <div style={{ textAlign: 'center' }}><Icon name="Home" size={32} /><br/>Home</div>
  <div style={{ textAlign: 'center' }}><Icon name="Book" size={32} /><br/>Book</div>
  <div style={{ textAlign: 'center' }}><Icon name="BookOpen" size={32} /><br/>BookOpen</div>
  <div style={{ textAlign: 'center' }}><Icon name="Star" size={32} /><br/>Star</div>
</div>

### AI & Features
<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
  <div style={{ textAlign: 'center' }}><Icon name="Bot" size={32} /><br/>Bot</div>
  <div style={{ textAlign: 'center' }}><Icon name="Brain" size={32} /><br/>Brain</div>
  <div style={{ textAlign: 'center' }}><Icon name="Sparkles" size={32} /><br/>Sparkles</div>
  <div style={{ textAlign: 'center' }}><Icon name="Zap" size={32} /><br/>Zap</div>
</div>

### Charts & Analytics
<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
  <div style={{ textAlign: 'center' }}><Icon name="BarChart" size={32} /><br/>BarChart</div>
  <div style={{ textAlign: 'center' }}><Icon name="LineChart" size={32} /><br/>LineChart</div>
  <div style={{ textAlign: 'center' }}><Icon name="PieChart" size={32} /><br/>PieChart</div>
  <div style={{ textAlign: 'center' }}><Icon name="TrendingUp" size={32} /><br/>TrendingUp</div>
</div>

### Security & Tools
<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
  <div style={{ textAlign: 'center' }}><Icon name="Shield" size={32} /><br/>Shield</div>
  <div style={{ textAlign: 'center' }}><Icon name="Lock" size={32} /><br/>Lock</div>
  <div style={{ textAlign: 'center' }}><Icon name="Settings" size={32} /><br/>Settings</div>
  <div style={{ textAlign: 'center' }}><Icon name="Wrench" size={32} /><br/>Wrench</div>
</div>

### Developer
<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
  <div style={{ textAlign: 'center' }}><Icon name="Code" size={32} /><br/>Code</div>
  <div style={{ textAlign: 'center' }}><Icon name="Terminal" size={32} /><br/>Terminal</div>
  <div style={{ textAlign: 'center' }}><Icon name="Github" size={32} /><br/>Github</div>
  <div style={{ textAlign: 'center' }}><Icon name="GitBranch" size={32} /><br/>GitBranch</div>
</div>

### Status & Alerts
<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
  <div style={{ textAlign: 'center' }}><Icon name="CheckCircle" size={32} color="green" /><br/>CheckCircle</div>
  <div style={{ textAlign: 'center' }}><Icon name="AlertTriangle" size={32} color="orange" /><br/>AlertTriangle</div>
  <div style={{ textAlign: 'center' }}><Icon name="XCircle" size={32} color="red" /><br/>XCircle</div>
  <div style={{ textAlign: 'center' }}><Icon name="Info" size={32} color="blue" /><br/>Info</div>
</div>

## Usage in Your Docs

### Import Components

```jsx
import Icon from '@site/src/components/Icon';
import { H2Icon } from '@site/src/components/IconHeading';
import FeatureCard from '@site/src/components/FeatureCard';
```

### Use in Content

```jsx
// Inline icon
<Icon name="Rocket" size={20} />

// Heading with icon
<H2Icon icon="Settings">Configuration</H2Icon>

// Feature card
<FeatureCard 
  icon="Bot"
  title="AI Features"
  description="Intelligent analytics"
/>
```

For complete icon reference, visit: [Lucide Icons](https://lucide.dev/icons/)
