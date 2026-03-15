import type { ReactNode } from 'react'

interface CompatMatrixProps {
  features: string[]
  layers: {
    name: string
    support: ('full' | 'partial' | 'none')[]
  }[]
}

const supportIcons: Record<string, { icon: string; label: string }> = {
  full: { icon: '\u2713', label: 'Full support' },
  partial: { icon: '~', label: 'Partial support' },
  none: { icon: '\u2014', label: 'Not supported' },
}

const supportColors: Record<string, string> = {
  full: 'text-emerald-600 dark:text-emerald-400',
  partial: 'text-amber-600 dark:text-amber-400',
  none: 'text-fd-muted-foreground/40',
}

export function CompatMatrix({
  features,
  layers,
}: CompatMatrixProps): ReactNode {
  return (
    <div className="not-prose my-4 overflow-x-auto rounded-xl border border-fd-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-fd-border bg-fd-secondary/30">
            <th className="px-4 py-3 text-left font-medium">Feature</th>
            {layers.map((layer) => (
              <th
                key={layer.name}
                className="px-4 py-3 text-center font-medium"
              >
                {layer.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <tr
              key={feature}
              className={
                i < features.length - 1
                  ? 'border-b border-fd-border'
                  : undefined
              }
            >
              <td className="px-4 py-2.5">{feature}</td>
              {layers.map((layer) => {
                const level = layer.support[i] ?? 'none'
                const info = supportIcons[level]
                return (
                  <td
                    key={layer.name}
                    className={`px-4 py-2.5 text-center font-medium ${supportColors[level]}`}
                    title={info.label}
                  >
                    {info.icon}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
