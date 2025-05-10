import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface Skill {
  name: string;
  level: number;
  description: string;
  icon?: string;
}

interface SkillGroupData {
  title: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  isLoaded: boolean;
  skillGroups: SkillGroupData[];
}

const SkillsSection = ({ isLoaded, skillGroups }: SkillsSectionProps) => {
  return (
    <section
      className="py-20 bg-secondary/30 min-h-screen flex items-center md:pl-24"
      id="skills"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Мои навыки</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Технологии и инструменты, с которыми я работаю
          </p>

          <div className="space-y-10">
            {skillGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="text-xl font-semibold mb-6">{group.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {group.skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} isLoaded={isLoaded} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: Skill;
  isLoaded: boolean;
}

const SkillCard = ({ skill, isLoaded }: SkillCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {skill.icon && (
            <div className="shrink-0 p-2 rounded-md bg-primary/10 text-primary">
              <Icon name={skill.icon} className="w-6 h-6" />
            </div>
          )}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-medium">{skill.name}</h4>
              <span className="text-sm text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <Progress value={isLoaded ? skill.level : 0} className="h-2 mb-3" />
            <p className="text-sm text-muted-foreground">{skill.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
