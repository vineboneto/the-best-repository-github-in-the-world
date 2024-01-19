'use client'
import useSWR, { Fetcher } from 'swr'

type Response = {
  message: string
}

const fetcher: Fetcher<Response> = async () => {
  return fetch('/api/hello').then((res) => res.json())
}

export function HelloWorld() {
  const { data, error } = useSWR<Response, Error>('/api/hello', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return <p>{data.message}</p>
}
