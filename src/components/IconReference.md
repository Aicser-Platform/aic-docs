# Icon Components Reference

## Available Components

### 1. Icon Component
Simple icon component for inline usage.

```jsx
import Icon from '@site/src/components/Icon';

<Icon name="Rocket" size={24} color="blue" />
```

**Props:**
- `name` (string, required): Lucide icon name
- `size` (number, default: 20): Icon size in pixels
- `color` (string, default: 'currentColor'): Icon color
- `strokeWidth` (number, default: 2): Stroke width
- `className` (string): Additional CSS classes

### 2. IconHeading Component
Heading with icon prefix.

```jsx
import { IconHeading, H1Icon, H2Icon, H3Icon } from '@site/src/components/IconHeading';

<IconHeading icon="Rocket" level={1}>Getting Started</IconHeading>
<H1Icon icon="Rocket">Getting Started</H1Icon>
<H2Icon icon="Settings">Configuration</H2Icon>
<H3Icon icon="Code">Code Examples</H3Icon>
```

### 3. FeatureCard Component
Card with icon, title, and description.

```jsx
import FeatureCard from '@site/src/components/FeatureCard';

<FeatureCard 
  icon="Rocket"
  title="Quick Start"
  description="Get started in 5 minutes"
  link="/getting-started"
/>
```

## Common Lucide Icons for Documentation

| Category | Icon Name | Usage |
|----------|-----------|-------|
| **Getting Started** | `Rocket` | Launch, quick start |
| **Documentation** | `Book`, `BookOpen` | Docs, guides |
| **Features** | `Sparkles`, `Star` | Highlights |
| **AI/Bot** | `Bot`, `Brain` | AI features |
| **Security** | `Shield`, `Lock` | Security |
| **Performance** | `Zap`, `Gauge` | Speed, metrics |
| **Settings** | `Settings`, `Sliders` | Configuration |
| **Code** | `Code`, `Terminal` | Developer |
| **Community** | `Users`, `MessageCircle` | Community |
| **Database** | `Database`, `Server` | Data sources |
| **Charts** | `BarChart`, `LineChart`, `PieChart` | Analytics |
| **Deploy** | `Upload`, `Cloud` | Deployment |
| **Docker** | `Container` | Containerization |
| **Download** | `Download`, `ArrowDown` | Downloads |
| **Link** | `Link`, `ExternalLink` | External links |
| **Warning** | `AlertTriangle`, `AlertCircle` | Alerts |
| **Success** | `CheckCircle`, `Check` | Success states |
| **Error** | `XCircle`, `X` | Error states |
| **Info** | `Info`, `HelpCircle` | Information |
| **Search** | `Search` | Search functionality |
| **Home** | `Home`, `Building` | Home, self-host |
| **Globe** | `Globe`, `Earth` | Web, global |
| **Plug** | `Plug`, `Cable` | Integrations |
| **Tools** | `Wrench`, `Hammer` | Tools, fixes |

## Full Lucide Icon Gallery

Visit: https://lucide.dev/icons/

## Example Usage in MDX

```mdx
---
id: example
title: Example Page
---

import Icon from '@site/src/components/Icon';
import { H2Icon } from '@site/src/components/IconHeading';
import FeatureCard from '@site/src/components/FeatureCard';

# <Icon name="Rocket" size={32} /> Getting Started

## Features

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
  <FeatureCard 
    icon="Bot"
    title="AI-Powered"
    description="Natural language queries and intelligent insights"
  />
  <FeatureCard 
    icon="BarChart"
    title="30+ Charts"
    description="Comprehensive visualization library"
  />
  <FeatureCard 
    icon="Shield"
    title="Enterprise Security"
    description="SOC2, GDPR, and HIPAA compliant"
  />
</div>

<H2Icon icon="Zap">Performance</H2Icon>

Optimize your deployment with our performance guide.
```
