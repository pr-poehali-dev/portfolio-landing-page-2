
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-[#1A1F2C] text-white" id="contact">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-playfair text-center">Связаться со мной</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const ContactInformation = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Icon name="Mail" className="text-[#9b87f5]" />
          <span>alexander@example.com</span>
        </div>
        <div className="flex items-center gap-3">
          <Icon name="Phone" className="text-[#9b87f5]" />
          <span>+7 (900) 123-45-67</span>
        </div>
        <div className="flex items-center gap-3">
          <Icon name="MapPin" className="text-[#9b87f5]" />
          <span>Москва, Россия</span>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="text-lg font-bold mb-3">Социальные сети</h4>
        <div className="flex gap-4">
          <SocialButton name="Github" />
          <SocialButton name="Linkedin" />
          <SocialButton name="Instagram" />
          <SocialButton name="Telegram" />
        </div>
      </div>
    </div>
  );
};

interface SocialButtonProps {
  name: string;
}

const SocialButton = ({ name }: SocialButtonProps) => {
  return (
    <Button size="icon" variant="ghost" className="text-[#9b87f5] hover:bg-[#9b87f5]/20">
      <Icon name={name} size={20} />
    </Button>
  );
};

const ContactForm = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Напишите мне</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Имя</label>
          <input type="text" className="w-full p-2 rounded bg-white/5 border border-white/20" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="w-full p-2 rounded bg-white/5 border border-white/20" />
        </div>
        <div>
          <label className="block text-sm mb-1">Сообщение</label>
          <textarea rows={4} className="w-full p-2 rounded bg-white/5 border border-white/20"></textarea>
        </div>
        <Button className="w-full bg-[#9b87f5] hover:bg-[#8a76e3]">
          Отправить сообщение
        </Button>
      </div>
    </div>
  );
};

export default ContactSection;
