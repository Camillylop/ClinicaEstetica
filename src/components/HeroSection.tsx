import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, List, Sparkles, UserRound, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-new.png";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Text */}
                    <div className="max-w-2xl relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground mb-6">
                                Sua Melhor Versão Começa Aqui: <span className="text-primary italic">Ciência e Beleza em Harmonia</span>
                            </h1>

                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Protocolos personalizados e tecnologia de ponta para resultados naturais e elegantes.
                            </p>

                            {/* Feature Icons */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                                <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
                                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-primary">
                                        <Sparkles size={24} />
                                    </div>
                                    <span className="font-medium text-foreground text-sm">Tecnologia Avançada</span>
                                </div>

                                <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
                                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-primary">
                                        <UserRound size={24} />
                                    </div>
                                    <span className="font-medium text-foreground text-sm">Atendimento Personalizado</span>
                                </div>

                                <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
                                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-primary">
                                        <Leaf size={24} />
                                    </div>
                                    <span className="font-medium text-foreground text-sm">Resultados Naturais</span>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                                <Button variant="gold" size="lg" className="gap-2 h-12 rounded-full" asChild>
                                    <a href="#agendamento">
                                        <Calendar size={20} />
                                        Agende Sua Avaliação
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="gap-2 h-12 rounded-full" asChild>
                                    <a href="#tratamentos">
                                        <List size={20} />
                                        Conheça Nossos Tratamentos
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={heroImage}
                            alt="Mulher com pele radiante"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
