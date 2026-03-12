import Link from 'next/link'
import { Card, Cards } from 'fumadocs-ui/components/card'

const corePackages = [
  {
    title: 'Reactivity',
    description:
      'Signals, computed values, effects, stores, and resources — fine-grained reactive primitives.',
    href: '/docs/reactivity',
  },
  {
    title: 'Core',
    description:
      'Component model, JSX runtime, lifecycle hooks, control flow, context, and error boundaries.',
    href: '/docs/core',
  },
  {
    title: 'Compiler',
    description:
      'JSX compiler with smart reactivity wrapping and static hoisting.',
    href: '/docs/compiler',
  },
  {
    title: 'Runtime DOM',
    description:
      'Direct DOM renderer — mount, hydrate, transitions, keep-alive, and directives.',
    href: '/docs/runtime-dom',
  },
  {
    title: 'Runtime Server',
    description:
      'SSR/SSG renderer with streaming Suspense support and store isolation.',
    href: '/docs/runtime-server',
  },
  {
    title: 'Router',
    description:
      'Type-safe client-side routing with nested routes, guards, loaders, and prefetching.',
    href: '/docs/router',
  },
  {
    title: 'Head',
    description:
      'Reactive document head management (title, meta, link) with SSR support.',
    href: '/docs/head',
  },
  {
    title: 'Vite Plugin',
    description:
      'Vite integration with JSX transform, .pyreon SFC support, and HMR.',
    href: '/docs/vite-plugin',
  },
]

const compatPackages = [
  {
    title: 'React Compat',
    description:
      'React-style hooks API (useState, useEffect, etc.) running on Pyreon reactivity.',
    href: '/docs/react-compat',
  },
  {
    title: 'Preact Compat',
    description:
      'Preact API compatibility — h(), Component class, signals integration.',
    href: '/docs/preact-compat',
  },
  {
    title: 'Solid Compat',
    description:
      'SolidJS-style API — createSignal, createEffect, control flow components.',
    href: '/docs/solid-compat',
  },
  {
    title: 'Vue Compat',
    description:
      'Vue 3 Composition API — ref, computed, reactive, watch, and lifecycle hooks.',
    href: '/docs/vue-compat',
  },
]

const fundamentalsPackages = [
  {
    title: 'Store',
    description:
      'Pinia-inspired composition stores with SSR isolation support.',
    href: '/docs/store',
  },
  {
    title: 'State Tree',
    description:
      'Structured reactive state tree with snapshots, patches, and middleware.',
    href: '/docs/state-tree',
  },
  {
    title: 'Form',
    description:
      'Signal-based form management with field arrays and validation.',
    href: '/docs/form',
  },
  {
    title: 'Validation',
    description:
      'Schema validation adapters for Zod, Valibot, and ArkType.',
    href: '/docs/validation',
  },
  {
    title: 'I18n',
    description:
      'Reactive internationalization with async namespace loading and plurals.',
    href: '/docs/i18n',
  },
  {
    title: 'Query',
    description:
      'TanStack Query adapter with Suspense support and SSR dehydration.',
    href: '/docs/query',
  },
  {
    title: 'Table',
    description:
      'TanStack Table adapter for reactive table state management.',
    href: '/docs/table',
  },
  {
    title: 'Virtual',
    description:
      'TanStack Virtual adapter for efficient virtual scrolling.',
    href: '/docs/virtual',
  },
]

const uiPackages = [
  {
    title: 'Styler',
    description:
      'Lightweight CSS-in-JS engine with theme support and dynamic styles.',
    href: '/docs/styler',
  },
  {
    title: 'Unistyle',
    description:
      'Responsive theming, breakpoints, and media query utilities.',
    href: '/docs/unistyle',
  },
  {
    title: 'Hooks',
    description:
      '16 signal-based hooks — breakpoints, click outside, focus trap, intersection, and more.',
    href: '/docs/hooks',
  },
  {
    title: 'Elements',
    description:
      'Foundational UI components — Element, List, Overlay, Portal, Text.',
    href: '/docs/elements',
  },
  {
    title: 'Coolgrid',
    description:
      'Responsive CSS grid system with Container, Row, and Col.',
    href: '/docs/coolgrid',
  },
  {
    title: 'Kinetic Presets',
    description:
      '120+ animation presets and composition utilities for transitions.',
    href: '/docs/kinetic-presets',
  },
]

const features = [
  {
    icon: '~>',
    title: 'Signal-Based Reactivity',
    description:
      'Fine-grained signals with automatic dependency tracking. No virtual DOM — updates go directly to the DOM nodes that changed.',
  },
  {
    icon: '<>',
    title: 'Use Any API You Know',
    description:
      'Compatibility layers for React, Preact, Vue 3, and SolidJS. Migrate gradually or pick the API style you prefer.',
  },
  {
    icon: '{}',
    title: 'Type-Safe Throughout',
    description:
      'Generic inference, strict prop validation, typed routes, and typed stores. TypeScript is a first-class citizen.',
  },
  {
    icon: '>>',
    title: 'Streaming SSR',
    description:
      'Server-side rendering with streaming Suspense, async components, and automatic store isolation per request.',
  },
  {
    icon: '//',
    title: 'Compiled for Speed',
    description:
      'JSX compiler with static hoisting, reactivity wrapping, and optimal code generation. Zero runtime overhead for static content.',
  },
  {
    icon: '[]',
    title: 'Batteries Included',
    description:
      'Router, forms, i18n, data fetching, state management, virtual scrolling, styling, and animations — all built for signals.',
  },
]

const codeExample = `import { signal, computed } from '@pyreon/reactivity'
import { defineComponent, Show, For } from '@pyreon/core'
import { mount } from '@pyreon/runtime-dom'

const count = signal(0)
const doubled = computed(() => count() * 2)

const App = defineComponent(() => {
  return () => (
    <div>
      <button onClick={() => count(count() + 1)}>
        Count: {count()} (doubled: {doubled()})
      </button>
      <Show when={() => count() > 5}>
        <p>Count is greater than 5!</p>
      </Show>
    </div>
  )
})

mount(App, document.getElementById('app')!)`

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center gap-8 px-6 pb-20 pt-28 text-center md:pb-28 md:pt-36">
        <div className="hero-glow" aria-hidden="true" />

        <div className="flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-4 py-1.5 text-sm backdrop-blur-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-fd-muted-foreground">
            actively developed
          </span>
        </div>

        <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Build UIs with{' '}
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400">
            signals
          </span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-fd-muted-foreground md:text-xl">
          A signal-based UI framework with fine-grained reactivity, no virtual
          DOM, streaming SSR, and compatibility layers for React, Vue, Solid,
          and Preact — plus a full ecosystem of 27 packages.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/docs/getting-started"
            className="rounded-xl bg-fd-primary px-7 py-3 text-base font-semibold text-fd-primary-foreground shadow-lg shadow-fd-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fd-primary/25"
          >
            Get Started
          </Link>
          <Link
            href="/docs"
            className="rounded-xl border border-fd-border bg-fd-background px-7 py-3 text-base font-semibold transition-all hover:-translate-y-0.5 hover:bg-fd-accent"
          >
            Browse Docs
          </Link>
          <Link
            href="https://github.com/user/pyreon"
            className="rounded-xl border border-fd-border bg-fd-background px-7 py-3 text-base font-semibold transition-all hover:-translate-y-0.5 hover:bg-fd-accent"
          >
            GitHub
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap justify-center gap-10">
          <div className="stat-pill">
            <span className="stat-value">27</span>
            <span className="stat-label">Packages</span>
          </div>
          <div className="stat-pill">
            <span className="stat-value">0</span>
            <span className="stat-label">Virtual DOM</span>
          </div>
          <div className="stat-pill">
            <span className="stat-value">4</span>
            <span className="stat-label">Compat Layers</span>
          </div>
          <div className="stat-pill">
            <span className="stat-value">120+</span>
            <span className="stat-label">Animation Presets</span>
          </div>
          <div className="stat-pill">
            <span className="stat-value">16</span>
            <span className="stat-label">Hooks</span>
          </div>
        </div>
      </section>

      {/* Code showcase */}
      <section className="w-full max-w-4xl px-6 py-12">
        <div className="code-showcase overflow-hidden rounded-2xl border border-fd-border bg-fd-card">
          <div className="flex items-center gap-2 border-b border-fd-border px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/60" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/60" />
            <span className="h-3 w-3 rounded-full bg-green-400/60" />
            <span className="ml-3 text-xs text-fd-muted-foreground">
              app.tsx
            </span>
          </div>
          <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
            <code>{codeExample}</code>
          </pre>
        </div>
      </section>

      {/* Features */}
      <section className="w-full max-w-6xl px-6 py-20">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Why Pyreon?
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-fd-muted-foreground">
          Fine-grained reactivity meets a complete framework. Every package is
          designed to work together — or standalone.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card rounded-2xl border border-fd-border bg-fd-card p-6"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-fd-accent font-mono text-sm font-bold text-fd-muted-foreground">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-fd-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Framework */}
      <section className="w-full max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col items-center gap-3">
          <span className="rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            @pyreon/*
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Core Framework
          </h2>
          <p className="max-w-lg text-center text-fd-muted-foreground">
            Reactivity engine, component model, DOM renderer, SSR, router, and
            build tooling.
          </p>
        </div>
        <Cards>
          {corePackages.map((pkg) => (
            <Card
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              href={pkg.href}
            />
          ))}
        </Cards>
      </section>

      {/* Compatibility Layers */}
      <section className="w-full max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col items-center gap-3">
          <span className="rounded-full bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-600 dark:text-violet-400">
            @pyreon/*-compat
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Compatibility Layers
          </h2>
          <p className="max-w-lg text-center text-fd-muted-foreground">
            Use the API you already know — React, Preact, Vue, or Solid — powered
            by Pyreon&apos;s signal engine.
          </p>
        </div>
        <Cards>
          {compatPackages.map((pkg) => (
            <Card
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              href={pkg.href}
            />
          ))}
        </Cards>
      </section>

      {/* Fundamentals */}
      <section className="w-full max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col items-center gap-3">
          <span className="rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-600 dark:text-blue-400">
            @pyreon/*
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ecosystem
          </h2>
          <p className="max-w-lg text-center text-fd-muted-foreground">
            State management, forms, i18n, data fetching, tables, and virtual
            scrolling — all signal-native.
          </p>
        </div>
        <Cards>
          {fundamentalsPackages.map((pkg) => (
            <Card
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              href={pkg.href}
            />
          ))}
        </Cards>
      </section>

      {/* UI System */}
      <section className="w-full max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col items-center gap-3">
          <span className="rounded-full bg-orange-500/10 px-4 py-1 text-sm font-medium text-orange-600 dark:text-orange-400">
            @pyreon/*
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            UI System
          </h2>
          <p className="max-w-lg text-center text-fd-muted-foreground">
            Styling, theming, layout, components, hooks, and animations.
          </p>
        </div>
        <Cards>
          {uiPackages.map((pkg) => (
            <Card
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              href={pkg.href}
            />
          ))}
        </Cards>
      </section>

      {/* CTA */}
      <section className="w-full max-w-3xl px-6 py-20">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-fd-border bg-fd-card p-10 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to start?</h2>
          <p className="max-w-md text-fd-muted-foreground">
            Get up and running in minutes. Install the core packages, set up
            Vite, and build your first signal-powered component.
          </p>
          <div className="w-full max-w-lg">
            <div className="code-showcase overflow-hidden rounded-xl border border-fd-border bg-fd-secondary/30">
              <pre className="overflow-x-auto px-5 py-4 text-sm">
                <code>
                  npm i @pyreon/core @pyreon/reactivity @pyreon/runtime-dom
                  @pyreon/vite-plugin
                </code>
              </pre>
            </div>
          </div>
          <Link
            href="/docs/getting-started"
            className="rounded-xl bg-fd-primary px-7 py-3 font-semibold text-fd-primary-foreground shadow-lg shadow-fd-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fd-primary/25"
          >
            Read the Guide
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-fd-border px-6 py-8 text-center text-sm text-fd-muted-foreground">
        <p>MIT License · Pyreon</p>
      </footer>
    </main>
  )
}
