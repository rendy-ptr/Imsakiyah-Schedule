import { useState, useEffect } from 'react'

// Types
import type { ApiResponse, ImsakiyahData } from '../types/customTypes'

const useFetchImsakiyah = (
  url: string,
  provinsiValue: string,
  kabupatenValue: string,
) => {
  const [data, setData] = useState<ImsakiyahData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!provinsiValue || !kabupatenValue) {
      setData(null)
      return
    }

    setLoading(true)
    setError(null)

    const controller = new AbortController()
    const fetchImsakiyah = async () => {
      try {
        const payload = {
          provinsi: provinsiValue,
          kabkota: kabupatenValue,
        }
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        })

        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`)

        const result: ApiResponse = await response.json()
        console.log('Full API Response:', result)

        if (result && result.data && result.data.length > 0) {
          setData(result.data[0])
        } else {
          throw new Error('Invalid API response')
        }
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          console.log('Request dibatalkan.')
          return
        }
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchImsakiyah()
    return () => controller.abort()
  }, [url, provinsiValue, kabupatenValue])

  return { data, loading, error }
}

export default useFetchImsakiyah
