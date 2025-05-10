
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  scrollY: number;
}

const Header = ({ scrollY }: HeaderProps) => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#9b87f5]/20 to-transparent"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: Math.max(0, 1 - scrollY * 0.002)
        }}
      />
      
      <div className="container max-w-5xl mx-auto px-4 z-10">
        <div className="animate-fade-in opacity-0" style={{animationDelay: "0.2s", animationFillMode: "forwards"}}>
          <Badge variant="outline" className="mb-4 bg-white/80 backdrop-blur-sm">Верстальщик • UI Разработчик</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">Александр Петров</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-muted-foreground">
            Я превращаю дизайн в идеальный код. 
            Специализируюсь на создании адаптивных и доступных веб-интерфейсов.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8a76e3]">
              Мои работы
              <Icon name="ArrowDown" className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Связаться со мной
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
      </div>
    </header>
  );
};

export default Header;
