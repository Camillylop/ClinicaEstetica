import { Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Clínica Estética</h3>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Sua beleza, tratada como arte.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <a href="#tratamentos" className="hover:text-gold-light transition-colors">
                  Tratamentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-gold-light transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-gold-light transition-colors">
                  Agendamento
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-light transition-colors">
                  Dúvidas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-4 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-gold-light" />
                <span>
                  Av. Paulista, 1000 - Sala 1010<br />
                  Bela Vista, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-gold-light" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="flex-shrink-0 mt-0.5 text-gold-light" />
                <span>
                  Seg a Sex: 09h às 19h<br />
                  Sáb: 09h às 13h
                </span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
              Localização
            </h4>
            <div className="aspect-video rounded-xl overflow-hidden grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098087085043!2d-46.65512492378374!3d-23.564611361724064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1704067200000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da clínica"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
          <p>© 2024 Clínica Estética. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
