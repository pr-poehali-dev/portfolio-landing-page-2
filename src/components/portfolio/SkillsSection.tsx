
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillsSectionProps {
  isLoaded: boolean;
  skills: Skill[];
}

const SkillsSection = ({ isLoaded, skills }: SkillsSectionProps) => {
  return (
    <section className="py-20 bg-muted/30" id="skills">
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
  );
};

export default SkillsSection;
