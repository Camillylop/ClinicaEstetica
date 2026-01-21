import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import baFacial from "@/assets/ba-facial.png";
import baJawline from "@/assets/ba-jawline.png";
import baLips from "@/assets/ba-lips.png";

const testimonials = [
  {
    id: 1,
    text: "O atendimento é impecável. O resultado ficou tão natural que as pessoas dizem que eu pareço mais descansada, sem saber que fiz um procedimento.",
    author: "Mariana S.",
    role: "Paciente há 2 anos",
    image: baFacial,
    procedure: "Rejuvenescimento Facial",
  },
  {
    id: 2,
    text: "Fiquei impressionada com a definição do meu rosto. A Dra. Ana entendeu exatamente o que eu queria: algo sutil, mas que fizesse diferença.",
    author: "Carla F.",
    role: "Paciente há 1 ano",
    image: baJawline,
    procedure: "Definição de Mandíbula",
  },
  {
    id: 3,
    text: "Meus lábios ficaram perfeitos! Hidratados e com um volume super elegante. O cuidado pós-procedimento da equipe também é nota 10.",
    author: "Patricia M.",
    role: "Paciente há 3 anos",
    image: baLips,
    procedure: "Preenchimento Labial",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            Resultados Reais
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto md:px-12">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                {/* Image Side */}
                <div className="relative">
                  <div className="aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={testimonials[current].image}
                      alt={`Antes e depois - ${testimonials[current].procedure}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm text-white py-2 px-4 rounded-lg text-center text-sm font-medium">
                      Resultado: {testimonials[current].procedure}
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="text-center md:text-left relative">
                  <Quote className="w-12 h-12 text-primary/20 absolute -top-8 -left-4 hidden md:block" />

                  <div className="relative z-10">
                    <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic mb-8">
                      "{testimonials[current].text}"
                    </p>

                    <div className="space-y-1">
                      <p className="font-medium text-lg text-foreground">
                        {testimonials[current].author}
                      </p>
                      <p className="text-sm text-gold-light font-medium uppercase tracking-wide">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-12 md:mt-0 md:absolute md:bottom-0 md:right-0 md:translate-y-24">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors bg-background shadow-soft"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2 mx-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current ? "bg-primary w-6" : "bg-muted"
                      }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors bg-background shadow-soft"
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
