// Types
import type React from 'react'
import type { DropdownSelectProps } from '../types/customTypes'

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  id,
  label,
  selectedProvinsi,
  data,
  selectedValue,
  setSelectedValue,
  isLoading,
  error,
  disable = false,
}) => {
  return (
    <div
      className={`flex flex-col bg-zinc-700 dark:bg-neutral-100 p-4 rounded-lg shadow-xl w-60 lg:w-72 transition-colors duration-1000 ease-in-out ${
        id === 'provinsi' ? 'mt-12 lg:mt-0' : ''
      }`}
    >
      <label
        htmlFor={id}
        className="font-semibold text-lg mb-2 text-neutral-100 dark:text-zinc-700"
      >
        {label}
      </label>
      <select
        id={id}
        value={selectedValue || ''}
        onChange={(event) => setSelectedValue(event.target.value)}
        className="p-2 rounded-lg bg-neutral-100 text-zinc-700 dark:bg-zinc-700 dark:text-neutral-100"
        disabled={disable}
      >
        <option value="">
          {id === 'provinsi'
            ? 'Pilih Provinsi'
            : !selectedProvinsi
            ? 'Pilih Provinsi Dulu'
            : isLoading
            ? 'Loading...'
            : error
            ? `Error: ${error}`
            : data?.length === 0
            ? `Tidak Ada Data pada ${label}`
            : `${label}`}
        </option>

        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropdownSelect
