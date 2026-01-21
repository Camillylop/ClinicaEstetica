import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import heroImage from "@/assets/hero-spa.jpg";
import treatmentBody from "@/assets/treatment-body.jpg";
import treatmentFacial from "@/assets/treatment-facial.jpg";
import treatmentWellness from "@/assets/treatment-wellness.jpg";

// Data dictionary for the pages
const treatmentData = {
    facial: {
        title: "Estética Facial",
        subtitle: "Harmonização e Rejuvenescimento",
        description: "Nossos protocolos faciais unem ciência e arte para realçar sua beleza natural. Focamos na qualidade da pele e na simetria, garantindo resultados elegantes e duradouros.",
        image: treatmentFacial,
        benefits: [
            "Suavização de linhas de expressão e rugas",
            "Melhora na textura e firmeza da pele",
            "Definição de contornos faciais",
            "Hidratação profunda e luminosidade"
        ],
        procedures: [
            { name: "Toxina Botulínica (Botox)", desc: "Previne e suaviza rugas dinâmicas com naturalidade." },
            { name: "Preenchimento com Ácido Hialurônico", desc: "Restaura volumes perdidos e define contornos." },
            { name: "Bioestimuladores de Colágeno", desc: "Estimula a produção natural de colágeno para firmeza." },
            { name: "Peelings Avançados", desc: "Renovação celular para uma pele radiante e uniforme." }
        ],
        faq: [
            { q: "Quanto tempo dura o efeito do Botox?", a: "Geralmente de 4 a 6 meses, variando conforme o organismo de cada paciente." },
            { q: "A aplicação de preenchimento dói?", a: "Utilizamos anestésicos tópicos potentes e técnicas delicadas para minimizar qualquer desconforto." }
        ]
    },
    corporal: {
        title: "Estética Corporal",
        subtitle: "Tecnologia e Contorno",
        description: "Protocolos de alta performance para redesenhar suas curvas e tratar as principais queixas corporais com tecnologia de ponta e biossegurança.",
        image: treatmentBody,
        benefits: [
            "Redução de gordura localizada",
            "Combate à celulite e aspecto 'casca de laranja'",
            "Tratamento da flacidez tissular e muscular",
            "Melhora do contorno corporal"
        ],
        procedures: [
            { name: "Criolipólise", desc: "Congelamento de células de gordura para redução de medidas." },
            { name: "Radiofrequência", desc: "Estímulo de colágeno para tratar flacidez." },
            { name: "Drenagem Linfática", desc: "Redução de inchaço e retenção de líquidos." },
            { name: "Enzimas", desc: "Aplicação localizada para queima de gordura." }
        ],
        faq: [
            { q: "Em quanto tempo vejo resultados?", a: "Alguns procedimentos têm efeito imediato, enquanto outros mostram resultados progressivos ao longo das semanas." },
            { q: "Preciso de repouso após os tratamentos?", a: "A maioria dos nossos protocolos permite retorno imediato às atividades diárias." }
        ]
    },
    "bem-estar": {
        title: "Bem-estar e SPA",
        subtitle: "Skincare e Detox",
        description: "Momentos de pausa e reconexão. Nossos rituais de bem-estar são desenhados para relaxar corpo e mente enquanto cuidam da saúde da sua pele.",
        image: treatmentWellness,
        benefits: [
            "Relaxamento profundo e redução do stress",
            "Desintoxicação corporal e facial",
            "Renovação energética",
            "Pele nutrida e revitalizada"
        ],
        procedures: [
            { name: "Limpeza de Pele Profunda", desc: "Remoção de impurezas e renovação celular." },
            { name: "Massagem Relaxante", desc: "Técnicas manuais para alívio de tensões." },
            { name: "Spa Day", desc: "Circuitos personalizados de tratamentos." },
            { name: "Máscaras Faciais de Ouro", desc: "Nutrição luxuosa e glow instantâneo." }
        ],
        faq: [
            { q: "Qual a frequência ideal para limpeza de pele?", a: "Recomendamos mensalmente para manutenção da saúde da pele." },
            { q: "Gestantes podem fazer massagens?", a: "Sim, temos protocolos específicos e seguros para gestantes a partir do segundo trimestre." }
        ]
    }
};

const TreatmentDetail = () => {
    const { type } = useParams();
    const navigate = useNavigate();

    // Use 'facial' as default if type is not found or invalid
    const data = treatmentData[type as keyof typeof treatmentData] || treatmentData.facial;
    const isValidType = Object.keys(treatmentData).includes(type || "");

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
        // Redirect if invalid type (optional, but good UX)
        if (!isValidType && type) {
            navigate("/tratamentos/facial", { replace: true });
        }
    }, [type, isValidType, navigate]);

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    <div className="container relative z-10 px-6 text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gold-light mb-4 block">
                                {data.subtitle}
                            </span>
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                                {data.title}
                            </h1>
                            <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed">
                                {data.description}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 bg-cream/30">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="font-serif text-3xl text-foreground mb-8">Por que escolher este tratamento?</h2>
                                <ul className="space-y-4">
                                    {data.benefits.map((benefit, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-3 text-foreground/80"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                                                <Check size={14} className="text-gold" />
                                            </div>
                                            {benefit}
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="mt-8">
                                    <Button variant="gold" size="lg" asChild>
                                        <a href="/#agendamento">Agendar Avaliação</a>
                                    </Button>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-soft">
                                <h3 className="font-serif text-2xl mb-6 flex items-center gap-2">
                                    <Sparkles className="text-gold" />
                                    Procedimentos Populares
                                </h3>
                                <div className="space-y-6">
                                    {data.procedures.map((proc, idx) => (
                                        <div key={idx} className="border-b border-border last:border-0 pb-4 last:pb-0">
                                            <h4 className="font-medium text-lg text-foreground mb-1">{proc.name}</h4>
                                            <p className="text-sm text-muted-foreground">{proc.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section specific */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <h2 className="font-serif text-3xl text-center mb-12">Perguntas Frequentes</h2>
                        <div className="space-y-6">
                            {data.faq.map((item, idx) => (
                                <div key={idx} className="bg-cream/20 p-6 rounded-xl">
                                    <h3 className="font-medium text-lg mb-2 text-foreground">{item.q}</h3>
                                    <p className="text-muted-foreground">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Footer */}
                <section className="py-20 bg-foreground text-cream text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="font-serif text-3xl mb-6">Pronta para transformar sua autoestima?</h2>
                        <p className="text-white/70 max-w-xl mx-auto mb-8">
                            Agende sua avaliação personalizada e descubra o protocolo ideal para você.
                        </p>
                        <Button variant="gold" size="lg" asChild>
                            <a href="/#agendamento">Reservar meu Horário</a>
                        </Button>
                    </div>
                </section>

            </main>

            <Footer />
            <WhatsAppButton />

        </div>
    );
};

export default TreatmentDetail;
