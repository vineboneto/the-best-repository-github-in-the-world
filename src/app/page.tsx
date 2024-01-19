import { Metadata } from 'next'
import { HelloWorld } from '@/components/hello-world'

export const metadata: Metadata = {
  title: 'The Best Website in The World',
  description: 'Pagína Hello World',
}

export default function Home() {
  return (
    <main className="flex relative justify-center items-center w-screen h-screen">
      <HelloWorld />
      <div className="absolute bottom-10">
        <p className="text-sm text-gray-500">&copy; 2024 Vinicius Gazolla Boneto. Todos os direitos reservados.</p>
      </div>
    </main>
  )
}
