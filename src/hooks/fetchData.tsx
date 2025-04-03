import { useEffect, useState } from 'react'

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null)
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
        const result: T = await response.json()
        setData(result)
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

export default useFetch
