import type { ReactNode } from 'react'

interface SinceProps {
  version: string
}

export function Since({ version }: SinceProps): ReactNode {
  return (
    <span className="ml-2 inline-flex items-center rounded-md border border-fd-border bg-fd-secondary/50 px-2 py-0.5 align-middle text-xs font-medium text-fd-muted-foreground">
      v{version}+
    </span>
  )
}
