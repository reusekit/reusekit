import React from 'react';
import clsx from 'clsx';

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  cta?: {
    primary?: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
  className?: string;
  variant?: 'left' | 'right' | 'center';
  overlay?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  image,
  cta,
  className,
  variant = 'center',
  overlay = false,
  backgroundColor = 'bg-gray-900',
  textColor = 'text-white',
}) => {
  const containerClasses = clsx(
    'relative w-full min-h-[60vh] flex items-center justify-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8',
    backgroundColor,
    className
  );

  const contentClasses = clsx(
    'relative z-10 max-w-7xl mx-auto text-center',
    {
      'text-left': variant === 'left',
      'text-right': variant === 'right',
      'text-center': variant === 'center',
    }
  );

  return (
    <section className={containerClasses}>
      {image && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          {overlay && (
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          )}
        </div>
      )}

      <div className={contentClasses}>
        {subtitle && (
          <p className={clsx('text-base font-semibold uppercase tracking-wide mb-3', textColor)}>
            {subtitle}
          </p>
        )}
        <h1 className={clsx('text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6', textColor)}>
          {title}
        </h1>
        {description && (
          <p className={clsx('max-w-2xl mx-auto text-xl', textColor, {
            'mx-0': variant === 'left',
            'ml-auto': variant === 'right',
          })}>
            {description}
          </p>
        )}
        {cta && (
          <div className={clsx('mt-10 flex gap-4', {
            'justify-start': variant === 'left',
            'justify-end': variant === 'right',
            'justify-center': variant === 'center',
          })}>
            {cta.primary && (
              <a
                href={cta.primary.href}
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {cta.primary.text}
              </a>
            )}
            {cta.secondary && (
              <a
                href={cta.secondary.href}
                className="rounded-md border border-white px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-white hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {cta.secondary.text}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
