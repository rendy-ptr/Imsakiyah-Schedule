import { useState } from 'react'
import { Link } from 'react-router-dom'

// Constant
import { CONTENT } from '../constant/constant'
const {
  label_provinsi,
  label_kabupaten,
  base_url,
  label_button,
} = CONTENT

// Custom Hooks
import useFetchProvince from '../hooks/useFetchProvince'
import useFetchKabKota from '../hooks/useFetchKabKota'

// Types

const ContentLayouts = () => {
  const [selectedProvinsi, setSelectedProvinsi] = useState<string | null>(null)
  const [selectedKabupaten, setSelectedKabupaten] = useState<string | null>(null)
  const {
    data: provinsiData,
    loading: provinsiLoading,
    error: provinsiError,
  } = useFetchProvince<{ data: string[] }>(
    `${base_url}/imsakiyah/provinsi`,
  )
  const { kabupatenData, kabupatenLoading, kabupatenError } = useFetchKabKota(
    `${base_url}/imsakiyah/kabkota`,
    selectedProvinsi,
  )

  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-zinc-700 dark:bg-neutral-100 p-4 rounded-lg shadow-xl w-72 transition-colors duration-1000 ease-in-out">
        <label
          htmlFor="provinsi"
          className="font-semibold text-lg mb-2 text-neutral-100 dark:text-zinc-700"
        >
          {label_provinsi}
        </label>
        <select
          id="provinsi"
          value={selectedProvinsi || ''}
          onChange={(e) => {
            setSelectedProvinsi(e.target.value)
            setSelectedKabupaten(null)
          }}
          className="p-2 rounded-lg bg-neutral-100 text-zinc-700 dark:bg-zinc-700 dark:text-neutral-100"
        >
          <option value="" disabled>
            {!provinsiData
              ? 'Tidak Ada Data Provinsi'
              : provinsiLoading
              ? 'Loading...'
              : provinsiError
              ? `Error: ${provinsiError}`
              : provinsiData && provinsiData.data.length === 0
              ? 'Tidak Ada Data Provinsi'
              : 'Pilih Provinsi'}
          </option>
          {provinsiData?.data.map((provinsi, index) => (
            <option key={index} value={provinsi}>
              {provinsi}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col bg-zinc-700 dark:bg-neutral-100 p-4 mt-4 rounded-lg shadow-xl w-72 transition-colors duration-1000 ease-in-out">
        <label
          htmlFor="kabupaten"
          className="font-semibold text-lg mb-2 text-neutral-100 dark:text-zinc-700"
        >
          {label_kabupaten}
        </label>
        <select
          id="kabupaten"
          className="p-2 rounded-lg bg-neutral-100 text-zinc-700 dark:bg-zinc-700 dark:text-neutral-100"
          value={selectedKabupaten || ''}
          onChange={(event) => {
            setSelectedKabupaten(event.target.value)
          }}
        >
          <option value="" disabled selected>
            {!selectedProvinsi
              ? 'Pilih provinsi dulu'
              : kabupatenLoading
              ? 'Loading...'
              : kabupatenError
              ? `Error: ${kabupatenError}`
              : kabupatenData.length === 0
              ? 'Tidak Ada Kabupaten/Kota'
              : 'Pilih Kabupaten/Kota'}
          </option>
          {kabupatenData.map((kabupaten, index) => (
            <option key={index} value={kabupaten}>
              {kabupaten}
            </option>
          ))}
        </select>
      </div>
      <div className="fixed top-4 left-4 z-50">
        <Link to="/">
          <button className="w-44 h-10 text-xs lg:w-60 lg:h-12 lg:text-base text-neutral-100 bg-zinc-700 dark:text-zinc-700 dark:bg-neutral-100 font-semibold rounded-lg shadow-md cursor-pointer transition-colors duration-1000 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-zinc-700 dark:hover:bg-neutral-200">
            {label_button}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ContentLayouts
