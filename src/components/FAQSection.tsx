import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais cuidados devo ter antes do procedimento?",
    answer:
      "Recomendamos evitar bebidas alcoólicas 48h antes, não utilizar ácidos na região a ser tratada por 7 dias e manter a pele bem hidratada. Orientações específicas serão passadas na consulta de avaliação.",
  },
  {
    question: "Os resultados são naturais?",
    answer:
      "Absolutamente. Nossa filosofia é realçar sua beleza natural de forma sutil. Trabalhamos com técnicas que respeitam a anatomia facial de cada paciente, garantindo resultados harmoniosos e discretos.",
  },
  {
    question: "Quanto tempo dura a recuperação?",
    answer:
      "A recuperação varia de acordo com o procedimento. Tratamentos minimamente invasivos como Botox têm recuperação imediata, enquanto procedimentos mais intensivos podem requerer alguns dias de cuidados especiais.",
  },
  {
    question: "Os procedimentos são dolorosos?",
    answer:
      "Utilizamos anestesia tópica e técnicas avançadas que minimizam qualquer desconforto. A maioria dos pacientes descreve a experiência como tranquila e muito diferente do que imaginavam.",
  },
  {
    question: "Posso ver fotos de resultados anteriores?",
    answer:
      "Durante sua consulta de avaliação, apresentamos casos similares ao seu para que você tenha uma expectativa realista dos resultados. Sempre respeitamos a privacidade de nossas pacientes.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos cartões de crédito (parcelamento em até 12x), débito, PIX e transferência bancária. Consulte nossa equipe sobre condições especiais de pagamento.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            Perguntas comuns
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border-none shadow-soft px-6"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
