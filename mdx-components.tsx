import defaultComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'
import { APICard } from '@/components/api-card'
import { CompatMatrix } from '@/components/compat-matrix'
import { PackageBadge } from '@/components/package-badge'
import { PropTable } from '@/components/prop-table'
import { Since } from '@/components/since'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    APICard,
    CompatMatrix,
    PackageBadge,
    PropTable,
    Since,
    ...components,
  }
}
