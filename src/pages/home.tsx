import { About } from "@/components/about"
import { Monitoring } from "@/components/station/monitoring"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Activity, Book } from "lucide-react"

export function Home() {
    return (
        <>
            <main className="h-screen flex flex-col">
                <div className="relative bg-[url(/hero.jpg)] bg-no-repeat bg-center bg-cover h-[10rem] flex flex-col justify-center items-center">
                    {/* Overlay com transparência real */}
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.50)]"></div>

                    {/* Conteúdo sobreposto */}
                    <div className="relative z-10 text-center">
                        <h1 className="text-3xl font-bold text-white">SICOR</h1>
                        <h2 className="text-2xl font-bold text-white">Sistema Informativo de Controle de Rios</h2>
                    </div>
                </div>

                <section className="w-5/6 m-auto mt-4">
                    <Tabs defaultValue="about" className="w-full">
                        <TabsList className="w-full">
                            <TabsTrigger className="transition-transform duration-300 ease-in-out transform hover:scale-105" value="about"><Book />Sobre</TabsTrigger>
                            <TabsTrigger className="transition-transform duration-300 ease-in-out transform hover:scale-105" value="monitoring"><Activity />Monitoramento</TabsTrigger>
                        </TabsList>
                        <TabsContent value="about">
                            <About />
                        </TabsContent>
                        <TabsContent value="monitoring">
                            <Monitoring />
                        </TabsContent>
                    </Tabs>
                </section>

                <footer className="mt-auto p-8 text-center text-sm text-gray-500 bg-blue-50 rounded-t-4xl">
                    © 2025 - Projeto acadêmico desenvolvido por Geferson Holdorf | Análise e Desenvolvimento de Sistemas - Uninter | GitHub: <a href="https://github.com/seuusuario/sicor" className="underline hover:text-blue-600" target="_blank">github.com/seuusuario/sicor</a>
                </footer>
            </main>
        </>
    )
}
