# ReuseKit

![Version](https://img.shields.io/npm/v/reusekit)
![License](https://img.shields.io/npm/l/reusekit)
![Downloads](https://img.shields.io/npm/dm/reusekit)

A modern, flexible, and accessible component library for Next.js applications. ReuseKit provides pre-built sections and components to help you build beautiful websites faster.

## Features

- 🎨 **Pre-built Sections**: Hero, Features, Testimonials, and more
- 📝 **Form Components**: Input fields, validation, and form handling
- 🔐 **Authentication Components**: Login, Registration, and Password Reset
- 🎯 **TypeScript Support**: Full TypeScript support with comprehensive types
- 📱 **Responsive Design**: Mobile-first and fully responsive components
- ♿ **Accessibility**: WCAG compliant with ARIA attributes
- 🎭 **Customizable**: Easy to customize with TailwindCSS or your own styles

## Installation

```bash
npm install reusekit
# or
yarn add reusekit
# or
pnpm add reusekit
```

## Quick Start

```tsx
import { Hero, Testimonials } from 'reusekit';

export default function HomePage() {
  return (
    <>
      <Hero
        title="Welcome to My Site"
        subtitle="MODERN DESIGN"
        description="A beautiful hero section for your landing page."
        image={{
          src: "/hero-bg.jpg",
          alt: "Hero background"
        }}
        cta={{
          primary: {
            text: "Get Started",
            href: "#"
          },
          secondary: {
            text: "Learn More",
            href: "#"
          }
        }}
        overlay={true}
      />

      <Testimonials
        title="What Our Users Say"
        subtitle="Hear from our satisfied customers"
        variant="grid"
        testimonials={[
          {
            content: "Amazing components that saved us weeks of development time!",
            author: {
              name: "Jane Smith",
              title: "CTO",
              company: "Tech Corp"
            },
            rating: 5
          }
        ]}
      />
    </>
  );
}
```

## Available Components

### Section Components

#### Hero Section
The Hero component creates engaging landing sections with various layouts.

```tsx
import { Hero } from 'reusekit';

<Hero
  title="Your Title"
  subtitle="Optional Subtitle"
  description="Your description here"
  image={{
    src: "/image.jpg",
    alt: "Description"
  }}
  variant="center" // 'left' | 'right' | 'center'
  overlay={true}
  backgroundColor="bg-gray-900"
  textColor="text-white"
/>
```

Props:
- \`title\`: string (required) - Main heading text
- \`subtitle\`: string - Optional subtitle above the title
- \`description\`: string - Additional text content
- \`image\`: { src: string; alt: string } - Background image configuration
- \`variant\`: 'left' | 'right' | 'center' - Content alignment
- \`overlay\`: boolean - Enable dark overlay on background image
- \`backgroundColor\`: string - Background color class when no image
- \`textColor\`: string - Text color class

#### Testimonials Section
Display customer testimonials in various layouts.

```tsx
import { Testimonials } from 'reusekit';

<Testimonials
  title="Testimonials"
  subtitle="What our customers say"
  variant="grid"
  testimonials={[
    {
      content: "Great product!",
      author: {
        name: "John Doe",
        title: "CEO",
        company: "Company Inc",
        image: {
          src: "/john.jpg",
          alt: "John Doe"
        }
      },
      rating: 5
    }
  ]}
/>
```

Props:
- \`testimonials\`: TestimonialItem[] (required) - Array of testimonial items
- \`variant\`: 'grid' | 'slider' | 'single' - Layout variant
- \`title\`: string - Section title
- \`subtitle\`: string - Section subtitle
- \`backgroundColor\`: string - Background color class
- \`textColor\`: string - Text color class

### Authentication Components

#### Login Component
A customizable login form component with email/password authentication.

```tsx
import { LoginWithEmailPassword } from 'reusekit';

<LoginWithEmailPassword
  onSubmit={(email, password) => {
    // Handle login
  }}
  loginTitle="Welcome Back"
  emailLabel="Email Address"
  passwordLabel="Password"
  loginLabel="Sign In"
  colorScheme="blue"
/>
```

Props:
- \`onSubmit\`: (email: string, password: string) => void - Handler for form submission
- \`loginTitle\`: string - Form title
- \`emailLabel\`: string - Email input label
- \`passwordLabel\`: string - Password input label
- \`loginLabel\`: string - Submit button text
- \`colorScheme\`: string - Color theme for the form

## Customization

### Styling
ReuseKit components use TailwindCSS by default but can be customized using:

1. TailwindCSS classes via className prop
2. CSS variables for theming
3. Direct CSS overrides

Example:
```tsx
<Hero
  className="my-custom-hero"
  title="Custom Hero"
  backgroundColor="bg-brand-primary"
/>
```

### Theme Customization
You can customize the default theme by adjusting your TailwindCSS configuration:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0066cc',
        'brand-secondary': '#2ec4b6',
      },
    },
  },
}
```

## Browser Support

ReuseKit supports all modern browsers:

- Chrome (and Chromium based browsers) 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## TypeScript

ReuseKit is written in TypeScript and includes comprehensive type definitions. No additional installation is needed.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [ReuseKit](LICENSE)
