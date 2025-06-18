'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-gray-200 bg-gray-50 p-6">
        <div className="mb-8 flex items-center gap-2">
          <Image src="/next.svg" alt="ReuseKit Logo" width={32} height={32} />
          <span className="text-xl font-bold text-gray-900">ReuseKit Docs</span>
        </div>
        <nav className="flex flex-col gap-2 text-base">
          <Link href="/" className="text-gray-900 font-semibold">Home</Link>
          <Link href="/sections" className="text-gray-700 hover:text-blue-600">Sections</Link>
          <Link href="/forms" className="text-gray-700 hover:text-blue-600">Forms</Link>
          <Link href="/auth" className="text-gray-700 hover:text-blue-600">Authentication</Link>
          <a href="https://github.com/reusekit/reusekit" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 mt-4">GitHub</a>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="main-docs flex-1 px-4 py-10 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to ReuseKit</h1>
          <p className="mb-6 text-lg text-gray-700">
            ReuseKit is a modern, flexible, and accessible component library for Next.js applications. Build beautiful, production-ready websites in minutes with our pre-built sections and UI components.
          </p>
          <div className="mb-8 flex gap-4">
            <Link href="/sections" className="rounded bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700">Explore Components</Link>
            <a href="https://github.com/reusekit/reusekit" target="_blank" rel="noopener noreferrer" className="rounded border border-gray-300 px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100">View on GitHub</a>
          </div>
          <hr className="my-8" />
          <h2 className="text-2xl font-bold mb-2">Get Started</h2>
          <ol className="list-decimal list-inside mb-8 text-gray-700">
            <li>Install the package: <code>npm install reusekit</code></li>
            <li>Import and use components in your Next.js app.</li>
            <li>Customize with TailwindCSS or your own styles.</li>
          </ol>
          <h2 className="text-2xl font-bold mb-2">Features</h2>
          <ul className="list-disc list-inside mb-8 text-gray-700">
            <li>Pre-built, responsive sections (Hero, Testimonials, Features, etc.)</li>
            <li>Accessible form and authentication components</li>
            <li>TypeScript support and full documentation</li>
            <li>Easy customization with TailwindCSS</li>
          </ul>
          <div className="mt-12 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ReuseKit. All rights reserved.
          </div>
        </div>
      </main>
    </div>
  );
}
