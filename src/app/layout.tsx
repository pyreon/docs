import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './global.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Pyreon',
    default: 'Pyreon — Signal-Based UI Framework',
  },
  description:
    'A signal-based UI framework with fine-grained reactivity, SSR streaming, compatibility layers, and a rich ecosystem of tools.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider
          search={{
            options: {
              type: 'static' as const,
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
