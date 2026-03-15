import type { ReactNode } from 'react'

interface APICardProps {
  name: string
  type?: string
  signature?: string
  description?: string
  children?: ReactNode
}

const typeLabels: Record<string, { label: string; color: string }> = {
  function: {
    label: 'fn',
    color:
      'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  },
  component: {
    label: 'C',
    color:
      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  },
  hook: {
    label: 'H',
    color:
      'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
  },
  type: {
    label: 'T',
    color:
      'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  },
  constant: {
    label: 'K',
    color:
      'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  },
  property: {
    label: 'P',
    color:
      'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
  },
  context: {
    label: 'Cx',
    color:
      'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
  },
}

const fallbackType = {
  label: '?',
  color: 'bg-fd-secondary text-fd-muted-foreground border-fd-border',
}

export function APICard({
  name,
  type = 'function',
  signature,
  description,
  children,
}: APICardProps): ReactNode {
  const typeInfo = typeLabels[type] ?? fallbackType

  return (
    <div className="not-prose my-4 rounded-xl border border-fd-border bg-fd-card">
      <div className="flex items-center gap-3 border-b border-fd-border px-4 py-3">
        <span
          className={`inline-flex h-6 w-6 items-center justify-center rounded border text-xs font-bold ${typeInfo.color}`}
        >
          {typeInfo.label}
        </span>
        <code className="text-sm font-semibold">{name}</code>
      </div>
      {signature && (
        <div className="border-b border-fd-border bg-fd-secondary/30 px-4 py-2">
          <pre className="overflow-x-auto text-xs">
            <code>{signature}</code>
          </pre>
        </div>
      )}
      {description && (
        <div className="px-4 py-3 text-sm text-fd-muted-foreground">
          {description}
        </div>
      )}
      {children && <div className="px-4 pb-4">{children}</div>}
    </div>
  )
}
