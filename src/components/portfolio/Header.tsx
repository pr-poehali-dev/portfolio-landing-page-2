import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  scrollY: number;
}

const Header = ({ scrollY }: HeaderProps) => {
  const [typeText, setTypeText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Верстальщик и frontend разработчик";

  // Эффект печатающегося текста
  useEffect(() => {
    if (typeText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypeText(fullText.slice(0, typeText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typeText, fullText]);

  // Мигающий курсор
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <header
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0 bg-black"
      id="main"
    >
      <aside className="fixed top-0 left-0 h-24 md:h-full w-full md:w-24 z-30 bg-black md:border-r border-b md:border-b-0 border-zinc-800">
        <div className="h-full flex flex-row md:flex-col items-center justify-between md:justify-start p-4">
          <div className="text-xl font-bold text-white">ВФ</div>

          <nav className="hidden md:flex flex-col gap-8 mt-20">
            <a
              href="#main"
              className="text-sm text-gray-400 hover:text-primary transition-colors"
            >
              <Icon name="Home" className="w-5 h-5 mx-auto mb-1" />
              <span>Главная</span>
            </a>
            <a
              href="#projects"
              className="text-sm text-gray-400 hover:text-primary transition-colors"
            >
              <Icon name="Briefcase" className="w-5 h-5 mx-auto mb-1" />
              <span>Работы</span>
            </a>
            <a
              href="#skills"
              className="text-sm text-gray-400 hover:text-primary transition-colors"
            >
              <Icon name="Code2" className="w-5 h-5 mx-auto mb-1" />
              <span>Навыки</span>
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-400 hover:text-primary transition-colors"
            >
              <Icon name="AtSign" className="w-5 h-5 mx-auto mb-1" />
              <span>Контакты</span>
            </a>
          </nav>

          {/* Мобильное меню */}
          <div className="flex md:hidden">
            <nav className="flex gap-6">
              <a
                href="#main"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="Home" className="w-5 h-5" />
              </a>
              <a
                href="#projects"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="Briefcase" className="w-5 h-5" />
              </a>
              <a
                href="#skills"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="Code2" className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="AtSign" className="w-5 h-5" />
              </a>
            </nav>
          </div>
        </div>
      </aside>

      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: Math.max(0, 1 - scrollY * 0.002),
        }}
      />

      <div className="container max-w-5xl mx-auto px-4 md:pl-32 z-10">
        <div
          className="animate-fade-in opacity-0"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair text-white">
            Василий Фролов
          </h1>
          <div className="text-xl md:text-2xl mb-8 font-medium h-8 text-white">
            <span>{typeText}</span>
            <span
              className={`inline-block w-2 h-5 bg-primary ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}
            ></span>
          </div>
          <p className="text-lg mb-8 max-w-2xl text-gray-400">
            Создаю современные сайты и веб-приложения.
            <br />
            Превращаю макеты в чистый и доступный код.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Мои работы
              <Icon name="ChevronDown" className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              Связаться
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-gray-400" />
      </div>
    </header>
  );
};

export default Header;
