import { Book, Brain } from "lucide-react";

export function About() {
    return (
        <section
            aria-labelledby="about-title"
            className="flex flex-col px-4 md:px-12 py-8"
        >
            <div className="flex-grow">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center mt-8">
                    {/* Texto e descrição */}
                    <div className="md:w-full flex flex-col h-full justify-between">
                        <div>
                            <h2
                                id="about-title"
                                className="text-2xl font-extrabold text-gray-900 mb-6 flex gap-2 items-center"
                            >
                                <Book size={25} />
                                Sobre o projeto
                            </h2>
                            <p className="text-[1rem] leading-relaxed text-gray-700 text-justify">
                                Este projeto foi desenvolvido no âmbito do curso de Análise e Desenvolvimento de Sistemas, com o objetivo de aplicar conhecimentos técnicos em uma solução prática e socialmente relevante. A iniciativa propõe um sistema inteligente para o monitoramento em tempo real dos níveis dos rios, integrando sensores físicos e dados provenientes de APIs públicas de órgãos ambientais.
                            </p>
                            <p className="text-[1rem] leading-relaxed text-gray-700 text-justify mt-4">
                                Além de seu caráter educativo e técnico, o projeto destaca a importância da tecnologia da informação na prevenção de desastres naturais, na promoção da segurança ambiental e na construção de comunidades mais resilientes frente às mudanças climáticas.
                            </p>
                        </div>
                    </div>

                    {/* Imagem ilustrativa */}
                    <div className="md:w-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <img
                            src="/about.jpg"
                            alt="Imagem ilustrativa de um rio monitorado"
                            className="rounded-2xl shadow-lg object-cover w-full h-80"
                        />
                    </div>
                </div>
            </div>

            <div>
                <h2 className="mt-8 text-2xl font-extrabold text-gray-900 mb-6 flex gap-2 items-center">
                    <Brain size={25} />
                    Funcionalidades
                </h2>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 p-2 gap-10 list-disc list-inside text-gray-800 text-justify text-base">
                    <div className="hover:shadow-md p-3 rounded-3xl flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <span className="font-semibold text-lg text-center">📡 Integração de Dados</span>
                        <span className="text-center mt-3">Integrar dados em tempo real da Defesa Civil via API GraphQL pública.</span>
                    </div>
                    <div className="hover:shadow-md p-3 rounded-3xl flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <span className="font-semibold text-lg text-center">⚡ Atualização Contínua</span>
                        <span className="text-center mt-3">Monitorar dinamicamente os níveis dos rios com atualização contínua.</span>
                    </div>
                    <div className="hover:shadow-md p-3 rounded-3xl flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <span className="font-semibold text-lg text-center">🗺️ Mapas Interativos</span>
                        <span className="text-center mt-3">Exibir mapas interativos com indicadores visuais atualizados.</span>
                    </div>
                </div>
            </div>
        </section >
    );
}
