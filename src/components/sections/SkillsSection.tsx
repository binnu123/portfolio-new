import { Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    gradient: "from-primary to-purple-400",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    gradient: "from-accent to-cyan-400",
    skills: ["Node.js", "PHP (Laravel)", "Python", "Flask"],
  },
  {
    title: "Databases",
    gradient: "from-orange-500 to-rose-500",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    gradient: "from-blue-500 to-indigo-500",
    skills: ["Git", "Docker", "Nginx", "AWS"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`card-modern p-8 ${
                categoryIndex === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-3 h-12 rounded-full bg-gradient-to-b ${category.gradient}`}
                />
                <h3 className="text-2xl font-display font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 glass rounded-xl text-sm font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
