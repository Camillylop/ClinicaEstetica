import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import treatmentFacial from "@/assets/treatment-facial.jpg";
import treatmentBody from "@/assets/treatment-body.jpg";
import treatmentWellness from "@/assets/treatment-wellness.jpg";

const treatments = [
  {
    title: "Harmonização e Rejuvenescimento",
    category: "Facial",
    slug: "facial",
    description:
      "Tratamentos como Botox e Bioestimuladores de colágeno para uma aparência descansada e jovem.",
    image: treatmentFacial,
  },
  {
    title: "Tecnologia e Contorno",
    category: "Corporal",
    slug: "corporal",
    description:
      "Protocolos avançados para gordura localizada, flacidez e celulite com resultados comprovados.",
    image: treatmentBody,
  },
  {
    title: "Skincare e Detox",
    category: "Bem-estar",
    slug: "bem-estar",
    description:
      "Limpezas profundas e terapias que devolvem o viço e a saúde da sua pele.",
    image: treatmentWellness,
  },
];

const TreatmentsSection = () => {
  return (
    <section id="tratamentos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
            Nossos Tratamentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            Cuidados feitos para você
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <Link to={`/tratamentos/${treatment.slug}`} className="block h-full">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <span className="text-xs font-medium tracking-[0.15em] text-gold-light uppercase mb-2">
                    {treatment.category}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-cream mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-sm text-cream/80 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {treatment.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold-light text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span>Saiba mais</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
