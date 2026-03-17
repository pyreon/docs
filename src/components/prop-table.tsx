import type { ReactNode } from 'react'

interface Prop {
  name: string
  type: string
  default?: string
  required?: boolean
  description: string
}

interface PropTableProps {
  title?: string
  props: Prop[]
}

export function PropTable({ title, props }: PropTableProps): ReactNode {
  return (
    <div className="not-prose my-4 overflow-x-auto rounded-xl border border-fd-border">
      {title && (
        <div className="border-b border-fd-border bg-fd-secondary/30 px-4 py-2.5 text-sm font-semibold">
          {title}
        </div>
      )}
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-fd-border bg-fd-secondary/20">
            <th className="px-4 py-2.5 text-left font-medium">Prop</th>
            <th className="px-4 py-2.5 text-left font-medium">Type</th>
            <th className="px-4 py-2.5 text-left font-medium">Default</th>
            <th className="px-4 py-2.5 text-left font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, i) => (
            <tr
              key={prop.name}
              className={
                i < props.length - 1 ? 'border-b border-fd-border' : undefined
              }
            >
              <td className="px-4 py-2.5">
                <code className="text-xs">{prop.name}</code>
                {prop.required && (
                  <span className="ml-1 text-red-500" title="Required">
                    *
                  </span>
                )}
              </td>
              <td className="px-4 py-2.5">
                <code className="text-xs text-fd-muted-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-2.5 text-fd-muted-foreground">
                {prop.default ? (
                  <code className="text-xs">{prop.default}</code>
                ) : (
                  '\u2014'
                )}
              </td>
              <td className="px-4 py-2.5 text-fd-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
