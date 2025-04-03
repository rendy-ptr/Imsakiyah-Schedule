import { useEffect, useState } from 'react'

const useFetchKabKota = (url: string, selectedProvinsi: string | null) => {
  const [kabupatenData, setKabupatenData] = useState<string[]>([])
  const [kabupatenLoading, setKabupatenLoading] = useState(false)
  const [kabupatenError, setKabupatenError] = useState<string | null>(null)

  useEffect(() => {
    if (!selectedProvinsi) {
      setKabupatenData([])
      setKabupatenError(null)
      return
    }

    setKabupatenData([])
    setKabupatenLoading(true)
    setKabupatenError(null)

    const controller = new AbortController()
    const fetchKabupaten = async () => {

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
          body: JSON.stringify({ provinsi: selectedProvinsi }),
          signal: controller.signal,
        })

        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`)

        const result = await response.json()
        setKabupatenData(result.data || [])
      } catch (error: unknown) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setKabupatenError(error.message)
        }
      } finally {
        setKabupatenLoading(false)
      }
    }

    fetchKabupaten()

    return () => controller.abort()
  }, [url, selectedProvinsi])

  return { kabupatenData, kabupatenLoading, kabupatenError }
}

export default useFetchKabKota
