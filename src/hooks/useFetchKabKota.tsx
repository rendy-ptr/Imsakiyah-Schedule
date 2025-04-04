import { useEffect, useState } from 'react'

const useFetchKabKota = (url: string, provinsiValue: string) => {
  const [data, setData] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!provinsiValue) {
      setData([])
      setError(null)
      return
    }

    setData([])
    setLoading(true)
    setError(null)

    const controller = new AbortController()
    const fetchKabupaten = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
          body: JSON.stringify({ provinsi: provinsiValue }),
          signal: controller.signal,
        })

        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`)

        const result = await response.json()
        setData(result.data || [])
      } catch (error: unknown) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setError(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchKabupaten()

    return () => controller.abort()
  }, [url, provinsiValue])

  return { data, loading, error }
}

export default useFetchKabKota
