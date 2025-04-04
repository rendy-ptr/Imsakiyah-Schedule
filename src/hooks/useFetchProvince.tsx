import { useEffect, useState } from 'react'

const useFetchData = (url: string) => {
  const [data, setData] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url, { signal })

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const result = await response.json()
        setData(result.data)
      } catch (error: unknown) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setError(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, loading, error }
}

export default useFetchData
