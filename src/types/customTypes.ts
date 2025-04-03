type ButtonsProps = {
  label: string
  variant: 'white_dark' | 'purple_pink'
} & (
  | { href: string; to?: never; onclick?: never }
  | { to: string; href?: never; onclick?: never }
  | { onclick: () => void; href?: never; to?: never }
)

type DropdownSelectProps = {
  id: string
  label: string
  data: string[]
  selectedValue: string | null
  setSelectedValue: (value: string) => void
  isLoading?: boolean
  error?: string | null
  disable?: boolean
  selectedProvinsi?: string | null
}

export type { ButtonsProps, DropdownSelectProps }
