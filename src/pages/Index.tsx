import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  }, []);

  const handleOverlayClick = () => {
    setShowOverlay(false);
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  };
  const skills = [
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Python", level: 70, category: "Backend" },
    { name: "Creating a crew", level: 75, category: "Skills" },
    { name: "Creating a web", level: 60, category: "Skills" },
  ];

  const contacts = [
    { icon: "Mail", label: "Email", value: "yuyy8550@gmail.com", link: "mailto:yuyy8550@gmail.com" },
    { icon: "Github", label: "GitHub", value: "github.com/D9ziloy", link: "https://github.com/D9ziloy" },
    { icon: "AtSign", label: "Username", value: "@D9ziloy", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {showOverlay && (
        <div 
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center cursor-pointer animate-fade-in backdrop-blur-sm"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white">Нажмите везде чтобы продолжить</h2>
            <p className="text-xl text-white/80 animate-pulse">👆 Кликните в любом месте</p>
          </div>
        </div>
      )}
      <audio ref={audioRef} loop className="hidden" crossOrigin="anonymous">
        <source src="https://rus.hitmotop.com/get/music/20250919/overtonight_throwaways_overtonight_-_mirrors_demo_79795292.mp3" type="audio/mpeg" />
      </audio>
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/1000036691.jpg)' }}
      />
      <div className="container mx-auto px-4 py-16 max-w-5xl relative z-10">
        <section className="mb-24 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Welcome Beck Rekvion
            </h1>
            <p className="text-xl text-muted-foreground">
              Я делаю жизнь лучше своими идеями
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:yuyy8550@gmail.com">
                <Icon name="Mail" size={20} />
                Связаться
              </a>
            </Button>
          </div>
        </section>

        <section className="mb-24 animate-slide-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Icon name="User" size={32} className="text-primary" />
            Обо мне
          </h2>
          
          <Card className="p-8 bg-card border-border hover:border-primary transition-colors duration-300">
            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                Я Rekvion познаю скрипт-текста создание сайтов и многие другие коды
              </p>
            </div>
          </Card>
        </section>

        <section className="mb-24 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Icon name="Code2" size={32} className="text-primary" />
            Навыки
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Уровень</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="animate-slide-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Icon name="MessageCircle" size={32} className="text-primary" />
            Контакты
          </h2>
          
          <Card className="p-8 bg-card border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors duration-200">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon name={contact.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Card>
        </section>

        <footer className="mt-24 pt-8 border-t border-border text-center text-muted-foreground animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p>все на своих местах.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;