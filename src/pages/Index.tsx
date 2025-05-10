
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Шапка */}
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

      {/* Секция навыков */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-playfair text-center">Мои навыки</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={isLoaded ? skill.level : 0} className="h-2 mb-2" />
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Секция портфолио */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-playfair text-center">Мои проекты</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover-scale">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white">
                      Подробнее
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-[#9b87f5]/10 text-[#9b87f5]">{tag}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="mx-auto">
              Показать больше работ
              <Icon name="Plus" className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Секция контактов */}
      <section className="py-20 bg-[#1A1F2C] text-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-playfair text-center">Связаться со мной</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
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
                  <Button size="icon" variant="ghost" className="text-[#9b87f5] hover:bg-[#9b87f5]/20">
                    <Icon name="Github" size={20} />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-[#9b87f5] hover:bg-[#9b87f5]/20">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-[#9b87f5] hover:bg-[#9b87f5]/20">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-[#9b87f5] hover:bg-[#9b87f5]/20">
                    <Icon name="Telegram" size={20} />
                  </Button>
                </div>
              </div>
            </div>
            
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
          </div>
        </div>
      </section>
      
      {/* Футер */}
      <footer className="py-8 bg-[#0F131B] text-white/70 text-sm">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Александр Петров. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

// Данные для секции навыков
const skills = [
  {
    name: "HTML5/CSS3",
    level: 95,
    description: "Семантическая верстка, доступность, БЭМ методология"
  },
  {
    name: "JavaScript",
    level: 85,
    description: "ES6+, DOM манипуляции, асинхронность"
  },
  {
    name: "React",
    level: 80,
    description: "Хуки, контекст, функциональные компоненты"
  },
  {
    name: "Адаптивный дизайн",
    level: 90,
    description: "Mobile-first подход, кроссбраузерность"
  },
  {
    name: "Tailwind CSS",
    level: 88,
    description: "Компонентный подход, кастомизация"
  },
  {
    name: "Figma в код",
    level: 92,
    description: "Точная реализация дизайна в коде"
  }
];

// Данные для секции проектов
const projects = [
  {
    title: "Интернет-магазин обуви",
    description: "Адаптивный дизайн с анимациями и фильтрацией товаров",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    tags: ["HTML", "SCSS", "JavaScript"]
  },
  {
    title: "Лендинг для IT-конференции",
    description: "Страница с параллакс-эффектами и интерактивной программой",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    tags: ["React", "Tailwind", "GSAP"]
  },
  {
    title: "Дашборд аналитики",
    description: "Интерфейс с графиками и таблицами для анализа данных",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["React", "MUI", "Chart.js"]
  },
  {
    title: "Приложение для фитнеса",
    description: "Прогрессивное веб-приложение с трекингом тренировок",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    tags: ["PWA", "React", "Firebase"]
  },
  {
    title: "Корпоративный сайт",
    description: "Многостраничный сайт с интерактивной галереей и блогом",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    tags: ["HTML", "CSS", "JavaScript", "PHP"]
  },
  {
    title: "Приложение для заметок",
    description: "Минималистичный интерфейс с функцией поиска и сортировки",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db",
    tags: ["React", "Redux", "Firebase"]
  }
];

export default Index;
