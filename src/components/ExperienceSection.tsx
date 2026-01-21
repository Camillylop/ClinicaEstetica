import { motion } from "framer-motion";
import clinicInterior from "@/assets/clinic-interior.jpg";

const ExperienceSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={clinicInterior}
          alt="Interior da clínica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-gold-light uppercase">
            Nossa Essência
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-cream mt-4 mb-6">
            Um refúgio de autocuidado
          </h2>
          <p className="text-lg text-cream/80 leading-relaxed mb-8">
            Nosso espaço foi cuidadosamente projetado para proporcionar uma experiência sensorial completa.
            Cada detalhe, desde a iluminação suave até os aromas delicados, foi pensado para que você
            se sinta acolhida e segura em sua jornada de transformação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#agendamento"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-gold text-cream font-medium shadow-gold hover:shadow-elevated transition-shadow duration-300"
            >
              Agende sua visita
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
