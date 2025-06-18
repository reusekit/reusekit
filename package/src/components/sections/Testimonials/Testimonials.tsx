import React from 'react';
import clsx from 'clsx';

export interface TestimonialItem {
  content: string;
  author: {
    name: string;
    title?: string;
    company?: string;
    image?: {
      src: string;
      alt: string;
    };
  };
  rating?: number;
}

export interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
  className?: string;
  variant?: 'grid' | 'slider' | 'single';
  backgroundColor?: string;
  textColor?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  subtitle,
  testimonials,
  className,
  variant = 'grid',
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
}) => {
  const containerClasses = clsx(
    'py-16 sm:py-24 lg:py-32',
    backgroundColor,
    className
  );

  const renderTestimonial = (testimonial: TestimonialItem) => (
    <div className="flex flex-col h-full bg-white p-8 rounded-2xl shadow-lg">
      {testimonial.rating && (
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={clsx(
                'h-5 w-5',
                i < testimonial.rating! ? 'text-yellow-400' : 'text-gray-300'
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}
      <blockquote className="flex-1">
        <p className="text-lg font-medium text-gray-900">{testimonial.content}</p>
      </blockquote>
      <footer className="mt-8 flex items-center gap-4">
        {testimonial.author.image && (
          <img
            className="h-12 w-12 rounded-full"
            src={testimonial.author.image.src}
            alt={testimonial.author.image.alt}
          />
        )}
        <div>
          <div className="font-medium text-gray-900">{testimonial.author.name}</div>
          {(testimonial.author.title || testimonial.author.company) && (
            <div className="text-gray-600">
              {testimonial.author.title}
              {testimonial.author.title && testimonial.author.company && ' · '}
              {testimonial.author.company}
            </div>
          )}
        </div>
      </footer>
    </div>
  );

  return (
    <section className={containerClasses}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          {title && (
            <h2 className={clsx('text-3xl font-bold tracking-tight sm:text-4xl', textColor)}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
        
        {variant === 'grid' && (
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                {renderTestimonial(testimonial)}
              </div>
            ))}
          </div>
        )}

        {variant === 'single' && testimonials.length > 0 && (
          <div className="mx-auto max-w-3xl">
            {renderTestimonial(testimonials[0])}
          </div>
        )}

        {variant === 'slider' && (
          <div className="relative overflow-hidden">
            <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-[350px] flex-shrink-0 snap-center">
                  {renderTestimonial(testimonial)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
