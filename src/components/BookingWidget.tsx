import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

type Area = "facial" | "corporal" | "bem-estar" | null;

interface Procedure {
  id: string;
  name: string;
  area: Area;
}

const procedures: Procedure[] = [
  { id: "botox", name: "Botox", area: "facial" },
  { id: "harmonizacao", name: "Harmonização Facial", area: "facial" },
  { id: "bioestimuladores", name: "Bioestimuladores de Colágeno", area: "facial" },
  { id: "preenchimento", name: "Preenchimento Labial", area: "facial" },
  { id: "gordura", name: "Tratamento Gordura Localizada", area: "corporal" },
  { id: "celulite", name: "Protocolo Anti-Celulite", area: "corporal" },
  { id: "flacidez", name: "Tratamento de Flacidez", area: "corporal" },
  { id: "contorno", name: "Contorno Corporal", area: "corporal" },
  { id: "limpeza", name: "Limpeza de Pele Profunda", area: "bem-estar" },
  { id: "peeling", name: "Peeling Químico", area: "bem-estar" },
  { id: "hidratacao", name: "Hidratação Intensiva", area: "bem-estar" },
  { id: "detox", name: "Detox Facial", area: "bem-estar" },
];

const professionals = [
  { id: "1", name: "Dra. Ana Paula", specialty: "Harmonização Facial" },
  { id: "2", name: "Dra. Carolina", specialty: "Dermatologia" },
  { id: "3", name: "Dr. Ricardo", specialty: "Procedimentos Corporais" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
];

const BookingWidget = () => {
  const [step, setStep] = useState(1);
  const [selectedArea, setSelectedArea] = useState<Area>(null);
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", whatsapp: "", question: "" });

  const areas = [
    { id: "facial" as Area, label: "Facial", description: "Harmonização, rejuvenescimento e cuidados faciais" },
    { id: "corporal" as Area, label: "Corporal", description: "Contorno, tratamentos para gordura e flacidez" },
    { id: "bem-estar" as Area, label: "Bem-estar", description: "Skincare, limpezas e terapias relaxantes" },
  ];

  const filteredProcedures = procedures.filter((p) => p.area === selectedArea);

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    const procedureName = procedures.find((p) => p.id === selectedProcedure)?.name || "";
    const professionalName = professionals.find((p) => p.id === selectedProfessional)?.name || "";
    const dateStr = selectedDate ? format(selectedDate, "dd/MM/yyyy") : "";

    const message = `*Novo Agendamento via Site*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Procedimento:* ${procedureName}\n` +
      `*Profissional:* ${professionalName}\n` +
      `*Data:* ${dateStr} às ${selectedTime}\n` +
      `*Queixa:* ${formData.question}\n\n` +
      `Gostaria de confirmar a disponibilidade.`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selectedArea !== null;
      case 2: return selectedProcedure !== null;
      case 3: return selectedProfessional !== null;
      case 4: return selectedDate !== undefined && selectedTime !== null;
      case 5: return formData.name.trim() !== "" && formData.whatsapp.trim() !== "";
      default: return false;
    }
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      {/* Mobile Step Indicator */}
      <div className="flex flex-col items-center md:hidden animate-in fade-in slide-in-from-bottom-2">
        <span className="text-sm font-medium text-gold-light uppercase tracking-widest mb-2">
          Passo {step} de 5
        </span>
        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: `${((step - 1) / 5) * 100}%` }}
            animate={{ width: `${(step / 5) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Desktop Step Indicator */}
      <div className="hidden md:flex items-center justify-center">
        {[1, 2, 3, 4, 5].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                s === step
                  ? "bg-gradient-gold text-cream shadow-gold"
                  : s < step
                    ? "bg-primary text-cream"
                    : "bg-muted text-muted-foreground"
              )}
            >
              {s < step ? <Check size={18} /> : s}
            </div>
            {s < 5 && (
              <div
                className={cn(
                  "w-12 lg:w-20 h-0.5 transition-colors duration-300",
                  s < step ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-center text-foreground mb-6">
              O que você deseja transformar?
            </h3>
            <div className="grid gap-4">
              {areas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area.id)}
                  className={cn(
                    "p-5 rounded-xl border-2 text-left transition-all duration-300",
                    selectedArea === area.id
                      ? "border-primary bg-primary/5 shadow-soft"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <span className="font-serif text-lg text-foreground">{area.label}</span>
                  <p className="text-sm text-muted-foreground mt-1">{area.description}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-center text-foreground mb-6">
              Selecione o procedimento
            </h3>
            <div className="grid gap-3 max-h-[300px] overflow-y-auto pr-2">
              {filteredProcedures.map((procedure) => (
                <button
                  key={procedure.id}
                  onClick={() => setSelectedProcedure(procedure.id)}
                  className={cn(
                    "p-4 rounded-xl border-2 text-left transition-all duration-300",
                    selectedProcedure === procedure.id
                      ? "border-primary bg-primary/5 shadow-soft"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <span className="font-medium text-foreground">{procedure.name}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-center text-foreground mb-6">
              Escolha o profissional
            </h3>
            <div className="grid gap-4">
              {professionals.map((prof) => (
                <button
                  key={prof.id}
                  onClick={() => setSelectedProfessional(prof.id)}
                  className={cn(
                    "p-5 rounded-xl border-2 text-left transition-all duration-300",
                    selectedProfessional === prof.id
                      ? "border-primary bg-primary/5 shadow-soft"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <span className="font-serif text-lg text-foreground">{prof.name}</span>
                  <p className="text-sm text-muted-foreground mt-1">{prof.specialty}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-center text-foreground mb-6">
              Escolha data e horário
            </h3>
            <div className="flex flex-col items-center gap-6">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full max-w-xs justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP", { locale: ptBR }) : "Selecione uma data"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-popover" align="center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>

              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full"
                >
                  <p className="text-sm text-muted-foreground text-center mb-3">
                    Horários disponíveis
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "py-3 px-2 rounded-lg text-sm font-medium transition-all duration-200 touch-manipulation",
                          selectedTime === time
                            ? "bg-gradient-gold text-cream shadow-gold"
                            : "bg-muted hover:bg-primary/10 text-foreground"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-center text-foreground mb-6">
              Seus dados para contato
            </h3>
            <div className="space-y-4 max-w-md mx-auto">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Nome completo
                </label>
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  WhatsApp
                </label>
                <Input
                  placeholder="(11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Qual sua principal queixa hoje?
                </label>
                <Textarea
                  placeholder="Descreva brevemente o que gostaria de melhorar..."
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  className="bg-background resize-none"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="agendamento" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
            Agendamento
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            Reserve seu momento
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Escolha o procedimento e o melhor horário para você. Nossa equipe entrará em contato para confirmar sua reserva.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-card"
        >
          {renderStepIndicator()}

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col-reverse sm:flex-row justify-between mt-8 pt-6 border-t border-border gap-4">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={step === 1}
              className="gap-2 w-full sm:w-auto justify-center"
            >
              <ArrowLeft size={18} />
              Voltar
            </Button>

            {step < 5 ? (
              <Button
                variant="gold"
                onClick={handleNext}
                disabled={!canProceed()}
                className="gap-2 w-full sm:w-auto justify-center"
                id="btn-agendamento"
              >
                Continuar
                <ArrowRight size={18} />
              </Button>
            ) : (
              <Button
                variant="gold"
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="gap-2 w-full sm:w-auto justify-center"
                id="btn-agendamento-submit"
              >
                Confirmar Agendamento
                <Check size={18} />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingWidget;
