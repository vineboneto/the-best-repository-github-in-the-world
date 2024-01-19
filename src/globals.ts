type Fetcher<T = any> = (...args: Parameters<typeof fetch>) => Promise<{ data: T }>
