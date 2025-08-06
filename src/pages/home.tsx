import { Button } from "@/components/ui/button"
import { useStation } from "../http/use-station"

export function Home() {

    const stations = useStation()

    return (
        <>
            <main className="flex flex-col">
                <div className="relative bg-[url(/hero.jpg)] bg-no-repeat bg-center bg-cover h-[15rem] flex flex-col justify-center items-center">
                    {/* Overlay com transparência real */}
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.50)]"></div>

                    {/* Conteúdo sobreposto */}
                    <div className="relative z-10 text-center">
                        <h1 className="text-6xl font-bold text-white">SICOR</h1>
                        <h2 className="text-3xl font-bold text-white">Sistema Informativo de Controle de Rios</h2>
                    </div>
                </div>
                <div className="w-full h-6 bg-emerald-500 text-center">
                    <span className="text-gray-950 font-bold">Nenhum alerta</span>
                </div>

                <section className="w-5/6 m-auto mt-12">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center justify-between">
                        <div className="md:w-full">
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Sobre o projeto</h2>
                            <p className="text-lg leading-relaxed text-gray-700">
                                Projeto acadêmico desenvolvido no curso de Análise e Desenvolvimento de Sistemas, com foco no monitoramento em tempo real dos níveis dos rios. A solução integra dados de sensores e APIs públicas para fornecer visualizações atualizadas, alertas preventivos e informações relevantes à população.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700 mt-4">
                                Além do caráter educativo, o projeto destaca o papel da tecnologia na prevenção de desastres naturais e na promoção da segurança ambiental.
                            </p>
                        </div>

                        <div className="md:w-full">
                            <img
                                src="/section-about.jpg"
                                alt="Imagem do rio ao pôr do sol"
                                className="rounded-2xl shadow-lg object-cover w-full h-80 md:h-66"
                            />
                        </div>
                    </div>
                </section>

                <Button>Teste</Button>
            </main>
        </>
    )
}
