import { Book } from "lucide-react";

export function About() {
    return (
        <div className="flex flex-col px-4 md:px-12 py-8">
            {/* Conteúdo principal que cresce conforme necessário */}
            <div className="flex-grow">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center mt-8">
                    <div className="md:w-full">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 flex gap-2 items-center"><Book size={30} />Sobre o projeto</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Este projeto foi desenvolvido no âmbito do curso de Análise e Desenvolvimento de Sistemas, com o objetivo de aplicar conhecimentos técnicos em uma solução prática e socialmente relevante. A iniciativa propõe um sistema inteligente para o monitoramento em tempo real dos níveis dos rios, integrando sensores físicos e dados provenientes de APIs públicas de órgãos ambientais.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700 mt-4">
                            Além de seu caráter educativo e técnico, o projeto destaca a importância da tecnologia da informação na prevenção de desastres naturais, na promoção da segurança ambiental e na construção de comunidades mais resilientes frente às mudanças climáticas. O sistema pode ser expandido com funcionalidades como previsão meteorológica integrada, análise histórica de dados e emissão automatizada de notificações via SMS, e-mail ou redes sociais.
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
            </div>
        </div>
    );
}
