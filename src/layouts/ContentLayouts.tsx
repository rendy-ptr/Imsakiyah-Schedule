import { useState, useEffect } from 'react'

// Custom Hooks
import useFetch from '../hooks/fetchData'

const ContentLayouts = () => {
  const {
    data: provinsiData,
    loading: provinsiLoading,
    error: provinsiError,
  } = useFetch<{ data: string[] }>(
    'https://equran.id/api/v2/imsakiyah/provinsi',
  )

  const [selectedProvinsi, setSelectedProvinsi] = useState<string | null>(null)
  const [kabupatenData, setKabupatenData] = useState<string[]>([])
  const [kabupatenLoading, setKabupatenLoading] = useState(false)
  const [kabupatenError, setKabupatenError] = useState<string | null>(null)

  useEffect(() => {
    const fetchKabupaten = async () => {
      if (!selectedProvinsi) {
        setKabupatenData([])
        return
      }

      setKabupatenLoading(true)
      setKabupatenError(null)

      try {
        const response = await fetch(
          'https://equran.id/api/v2/imsakiyah/kabkota',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: '*/*',
            },
            body: JSON.stringify({ provinsi: selectedProvinsi }),
          },
        )

        const result = await response.json()
        setKabupatenData(result.data || [])
      } catch (error: unknown) {
        if (error instanceof Error) {
          setKabupatenError(error.message)
        } else {
          setKabupatenError('Terjadi kesalahan tak terduga')
        }
      } finally {
        setKabupatenLoading(false)
      }
    }

    fetchKabupaten()
  }, [selectedProvinsi])

  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-zinc-700 dark:bg-neutral-100 p-4 rounded-lg shadow-xl w-72">
        <label
          htmlFor="provinsi"
          className="font-semibold text-lg mb-2 text-neutral-100 dark:text-zinc-700"
        >
          Pilih Provinsi
        </label>
        <select
          id="provinsi"
          value={selectedProvinsi || ''}
          onChange={(e) => setSelectedProvinsi(e.target.value)}
          className="p-2 rounded-lg bg-neutral-100 text-zinc-700 dark:bg-zinc-700 dark:text-neutral-100"
        >
          <option value="" disabled>
            {!provinsiData
              ? 'Tidak Ada Data Provinsi'
              : provinsiLoading
              ? 'Loading...'
              : provinsiError
              ? 'Error: ' + provinsiError
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

      <div className="flex flex-col bg-zinc-700 dark:bg-neutral-100 p-4 mt-4 rounded-lg shadow-xl w-72">
        <label
          htmlFor="kabupaten"
          className="font-semibold text-lg mb-2 text-neutral-100 dark:text-zinc-700"
        >
          Pilih Kabupaten/Kota
        </label>
        <select
          id="kabupaten"
          className="p-2 rounded-lg bg-neutral-100 text-zinc-700 dark:bg-zinc-700 dark:text-neutral-100"
        >
          <option value="" disabled selected>
            {!selectedProvinsi
              ? 'Pilih provinsi terlebih dahulu'
              : kabupatenLoading
              ? 'Loading...'
              : kabupatenError
              ? 'Error: ' + kabupatenError
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
    </div>
  )
}

export default ContentLayouts
