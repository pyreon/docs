import Link from 'next/link'
import type { ReactNode } from 'react'

interface PackageBadgeProps {
  name: string
  href?: string
  version?: string
  status?: 'stable' | 'beta' | 'alpha' | 'deprecated'
}

const statusColors: Record<string, string> = {
  stable:
    'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  beta: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  alpha:
    'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
  deprecated: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
}

export function PackageBadge({
  name,
  href,
  version,
  status = 'stable',
}: PackageBadgeProps): ReactNode {
  const badge = (
    <span className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-3 py-1.5 font-mono text-sm transition-colors hover:bg-fd-accent">
      <span>{name}</span>
      {version && <span className="text-fd-muted-foreground">v{version}</span>}
      {status !== 'stable' && (
        <span
          className={`rounded-full border px-2 py-0.5 text-xs font-medium ${statusColors[status]}`}
        >
          {status}
        </span>
      )}
    </span>
  )

  if (href) {
    return (
      <Link href={href} className="no-underline">
        {badge}
      </Link>
    )
  }

  return badge
}
