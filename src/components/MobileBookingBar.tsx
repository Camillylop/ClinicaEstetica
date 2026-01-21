import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const MobileBookingBar = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-cream/95 backdrop-blur-md border-t border-border px-4 py-3 shadow-elevated"
    >
      <Button variant="gold" size="lg" className="w-full" id="btn-agendamento-mobile" asChild>
        <a href="#agendamento">Agendar Avaliação</a>
      </Button>
    </motion.div>
  );
};

export default MobileBookingBar;
