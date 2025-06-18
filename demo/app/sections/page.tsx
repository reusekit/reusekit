'use client';

import { Hero, Testimonials } from 'reusekit';
import { CodeExample, PropsTable } from '../components/docs';

export default function SectionsDemo() {
  return (
    <main className="min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-16">
          <h1 className="text-3xl font-bold text-gray-900">Section Components</h1>
          <p className="mt-2 text-lg text-gray-600">
            Pre-built, responsive section components for building modern websites.
          </p>
        </div>

        {/* Hero Section Documentation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Hero Section</h2>
          <p className="text-gray-600 mb-8">
            A versatile hero section component that supports various layouts, background images,
            and call-to-action buttons.
          </p>

          {/* Example 1: Basic Hero */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Example</h3>
            <Hero
              title="Welcome to ReuseKit"
              subtitle="MODERN SECTION COMPONENTS"
              description="A collection of beautiful, responsive, and customizable sections for your Next.js projects."
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
            <div className="mt-4">
              <CodeExample
                title="Basic Hero Usage"
                code={`<Hero
  title="Welcome to ReuseKit"
  subtitle="MODERN SECTION COMPONENTS"
  description="A collection of beautiful, responsive, and customizable sections."
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
/>`}
              />
            </div>
          </div>

          {/* Example 2: Left-aligned Hero */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Left-aligned Variant</h3>
            <Hero
              title="Build Faster"
              subtitle="POWERFUL COMPONENTS"
              description="Stop reinventing the wheel. Use our pre-built sections to create beautiful websites in minutes."
              variant="left"
              backgroundColor="bg-blue-600"
              cta={{
                primary: {
                  text: "View Components",
                  href: "#"
                }
              }}
            />
            <div className="mt-4">
              <CodeExample
                title="Left-aligned Hero Usage"
                code={`<Hero
  title="Build Faster"
  subtitle="POWERFUL COMPONENTS"
  description="Stop reinventing the wheel."
  variant="left"
  backgroundColor="bg-blue-600"
  cta={{
    primary: {
      text: "View Components",
      href: "#"
    }
  }}
/>`}
              />
            </div>
          </div>

          {/* Hero Props Documentation */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Props</h3>
            <PropsTable
              props={[
                {
                  name: 'title',
                  type: 'string',
                  required: true,
                  description: 'The main heading text for the hero section.',
                },
                {
                  name: 'subtitle',
                  type: 'string',
                  description: 'Optional subtitle displayed above the main title.',
                },
                {
                  name: 'description',
                  type: 'string',
                  description: 'Additional text content below the title.',
                },
                {
                  name: 'image',
                  type: '{ src: string; alt: string }',
                  description: 'Background image configuration.',
                },
                {
                  name: 'variant',
                  type: "'left' | 'right' | 'center'",
                  defaultValue: 'center',
                  description: 'The alignment variant of the hero content.',
                },
                {
                  name: 'backgroundColor',
                  type: 'string',
                  defaultValue: 'bg-gray-900',
                  description: 'Background color class when no image is provided.',
                },
              ]}
            />
          </div>
        </section>

        {/* Testimonials Section Documentation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Testimonials Section</h2>
          <p className="text-gray-600 mb-8">
            A flexible testimonials section with multiple display variants and rating support.
          </p>

          {/* Example 1: Grid Testimonials */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Grid Layout</h3>
            <Testimonials
              title="What Our Users Say"
              subtitle="Don't just take our word for it - hear from our satisfied users"
              variant="grid"
              testimonials={[
                {
                  content: "ReuseKit has significantly accelerated our development process.",
                  author: {
                    name: "Sarah Johnson",
                    title: "CTO",
                    company: "TechStart Inc",
                    image: {
                      src: "https://randomuser.me/api/portraits/women/1.jpg",
                      alt: "Sarah Johnson"
                    }
                  },
                  rating: 5
                },
                {
                  content: "The section components are exactly what we needed.",
                  author: {
                    name: "Michael Chen",
                    title: "Lead Developer",
                    company: "WebFlow Solutions",
                    image: {
                      src: "https://randomuser.me/api/portraits/men/1.jpg",
                      alt: "Michael Chen"
                    }
                  },
                  rating: 5
                },
                {
                  content: "Using ReuseKit has been a game-changer for our team.",
                  author: {
                    name: "Emily Rodriguez",
                    title: "Product Manager",
                    company: "Digital Innovations",
                    image: {
                      src: "https://randomuser.me/api/portraits/women/2.jpg",
                      alt: "Emily Rodriguez"
                    }
                  },
                  rating: 5
                },
              ]}
            />
            <div className="mt-4">
              <CodeExample
                title="Grid Testimonials Usage"
                code={`<Testimonials
  title="What Our Users Say"
  subtitle="Don't just take our word for it"
  variant="grid"
  testimonials={[
    {
      content: "ReuseKit has significantly accelerated our development process.",
      author: {
        name: "Sarah Johnson",
        title: "CTO",
        company: "TechStart Inc",
        image: {
          src: "/path/to/image.jpg",
          alt: "Sarah Johnson"
        }
      },
      rating: 5
    },
    // ... more testimonials
  ]}
/>`}
              />
            </div>
          </div>

          {/* Example 2: Slider Testimonials */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Slider Layout</h3>
            <Testimonials
              title="Success Stories"
              subtitle="See how others are using ReuseKit"
              variant="slider"
              backgroundColor="bg-gray-50"
              testimonials={[
                {
                  content: "The slider component is smooth and responsive.",
                  author: {
                    name: "David Wilson",
                    title: "Frontend Developer",
                    company: "Creative Labs",
                    image: {
                      src: "https://randomuser.me/api/portraits/men/2.jpg",
                      alt: "David Wilson"
                    }
                  },
                  rating: 5
                },
                {
                  content: "ReuseKit's attention to detail is impressive.",
                  author: {
                    name: "Lisa Zhang",
                    title: "UX Designer",
                    company: "Design Co",
                    image: {
                      src: "https://randomuser.me/api/portraits/women/3.jpg",
                      alt: "Lisa Zhang"
                    }
                  },
                  rating: 5
                },
                {
                  content: "These components have saved us weeks of development time.",
                  author: {
                    name: "James Brown",
                    title: "Tech Lead",
                    company: "StartupX",
                    image: {
                      src: "https://randomuser.me/api/portraits/men/3.jpg",
                      alt: "James Brown"
                    }
                  },
                  rating: 5
                },
              ]}
            />
            <div className="mt-4">
              <CodeExample
                title="Slider Testimonials Usage"
                code={`<Testimonials
  title="Success Stories"
  subtitle="See how others are using ReuseKit"
  variant="slider"
  backgroundColor="bg-gray-50"
  testimonials={[
    {
      content: "The slider component is smooth and responsive.",
      author: {
        name: "David Wilson",
        title: "Frontend Developer",
        company: "Creative Labs",
        image: {
          src: "/path/to/image.jpg",
          alt: "David Wilson"
        }
      },
      rating: 5
    },
    // ... more testimonials
  ]}
/>`}
              />
            </div>
          </div>

          {/* Testimonials Props Documentation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Props</h3>
            <PropsTable
              props={[
                {
                  name: 'testimonials',
                  type: 'TestimonialItem[]',
                  required: true,
                  description: 'Array of testimonial items to display.',
                },
                {
                  name: 'variant',
                  type: "'grid' | 'slider' | 'single'",
                  defaultValue: 'grid',
                  description: 'The layout variant for displaying testimonials.',
                },
                {
                  name: 'title',
                  type: 'string',
                  description: 'Optional section title.',
                },
                {
                  name: 'subtitle',
                  type: 'string',
                  description: 'Optional section subtitle.',
                },
                {
                  name: 'backgroundColor',
                  type: 'string',
                  defaultValue: 'bg-white',
                  description: 'Background color class for the section.',
                },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
