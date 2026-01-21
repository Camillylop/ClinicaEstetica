import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os tratamentos da clínica.";
    const whatsappUrl = `https://wa.me/5519996555802?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow group"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle size={24} fill="currentColor" />
      <span className="text-sm font-medium">Fale Conosco</span>
    </motion.button>
  );
};

export default WhatsAppButton;
