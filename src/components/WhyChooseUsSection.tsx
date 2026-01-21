import { motion } from "framer-motion";
import { UserCheck, Cpu, Sparkles } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Acompanhamento Individualizado",
    description:
      "Cada rosto é único. Criamos um plano de tratamento exclusivo para suas necessidades.",
  },
  {
    icon: Cpu,
    title: "Tecnologia de Ponta",
    description:
      "Utilizamos os equipamentos mais modernos do mercado, certificados e seguros.",
  },
  {
    icon: Sparkles,
    title: "Ambiente Premium",
    description:
      "Um refúgio de autocuidado desenhado para oferecer conforto e privacidade absoluta.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
            Por que nos escolher
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 max-w-2xl mx-auto">
            Uma experiência única em cuidados estéticos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold shadow-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-cream" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
