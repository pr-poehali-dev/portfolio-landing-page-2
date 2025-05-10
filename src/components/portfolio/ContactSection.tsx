
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 min-h-screen flex items-center md:pl-24" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Связаться со мной</h2>
          <p className="text-muted-foreground mb-12 text-lg">Готов обсудить ваш проект</p>
          
          <div className="grid md:grid-cols-2 gap-10">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  return (
    <div>
      <div className="space-y-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="shrink-0 p-2 rounded-md bg-primary/10 text-primary">
            <Icon name="Mail" className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Email</h3>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              hello@example.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="shrink-0 p-2 rounded-md bg-primary/10 text-primary">
            <Icon name="Phone" className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Телефон</h3>
            <a href="tel:+79001234567" className="text-muted-foreground hover:text-primary transition-colors">
              +7 (900) 123-45-67
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="shrink-0 p-2 rounded-md bg-primary/10 text-primary">
            <Icon name="MapPin" className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Локация</h3>
            <p className="text-muted-foreground">Москва, Россия</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Социальные сети</h3>
        <div className="flex gap-3">
          <SocialLink name="Github" href="https://github.com/" />
          <SocialLink name="Linkedin" href="https://linkedin.com/" />
          <SocialLink name="Telegram" href="https://t.me/" />
          <SocialLink name="Instagram" href="https://instagram.com/" />
        </div>
      </div>
    </div>
  );
};

interface SocialLinkProps {
  name: string;
  href: string;
}

const SocialLink = ({ name, href }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors"
    >
      <Icon name={name} size={18} />
    </a>
  );
};

const ContactForm = () => {
  return (
    <form className="space-y-4 p-6 bg-white rounded-lg shadow-sm">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Имя
        </label>
        <Input id="name" placeholder="Ваше имя" />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <Input id="email" type="email" placeholder="Ваш email" />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Сообщение
        </label>
        <Textarea id="message" placeholder="Ваше сообщение" rows={5} />
      </div>
      
      <Button className="w-full bg-primary hover:bg-primary/90">
        Отправить сообщение
      </Button>
    </form>
  );
};

export default ContactSection;
