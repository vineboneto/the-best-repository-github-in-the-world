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
        <div className="text-center px-2">
          <span className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Vinicius Gazolla Boneto. Todos os direitos reservados.</span>
        </div>
      </div>
    </main>
  )
}
