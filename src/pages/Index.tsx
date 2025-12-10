import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const skills = [
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Python", level: 70, category: "Backend" },
    { name: "Creating a crew", level: 75, category: "Skills" },
    { name: "Creating a web", level: 60, category: "Skills" },
  ];

  const contacts = [
    { icon: "Mail", label: "Email", value: "hello@example.com", link: "mailto:hello@example.com" },
    { icon: "Github", label: "GitHub", value: "github.com/username", link: "https://github.com" },
    { icon: "Linkedin", label: "LinkedIn", value: "linkedin.com/in/username", link: "https://linkedin.com" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
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
            <Button size="lg" className="gap-2">
              <Icon name="Mail" size={20} />
              Связаться
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