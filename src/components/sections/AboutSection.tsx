import {
  Code2,
  Lightbulb,
  Rocket,
  GraduationCap,
  Briefcase,
  MapPin,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Tech-First Mindset",
    description:
      "Strong focus on JavaScript-based development with expertise in modern frameworks.",
    gradient: "from-primary to-purple-400",
  },
  {
    icon: Lightbulb,
    title: "Quick Learner",
    description:
      "Self-driven with a passion for exploring and mastering new technologies.",
    gradient: "from-accent to-cyan-400",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description:
      "Passionate about building scalable solutions and tackling complex challenges.",
    gradient: "from-orange-500 to-rose-500",
  },
];

const education = [
  {
    degree: "Bachelor's Degree",
    institution: "Vignana Bharathi Institute of Technology",
    period: "2015 – 2019",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Sri Chaitanya Junior Kalasala",
    period: "2013 – 2015",
    icon: GraduationCap,
  },
  {
    degree: "Secondary School Certificate",
    institution: "Blue Bells Model School",
    period: "2013",
    icon: GraduationCap,
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">
            Know Me <span className="gradient-text">Better</span>
          </h2>
        </div>

        {/* Bio Card */}
        <div className="max-w-auto mx-auto mb-20">
          <div className="card-modern p-8 md:p-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                <MapPin size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Hello! I'm Sampath
                </h3>
                <p className="text-muted-foreground">
                  Full Stack Developer based in India
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a professional and enthusiastic Full Stack Developer with over
              4 years of experience in building modern web applications. I
              thrive on solving complex problems and continuously expanding my
              skill set. My journey has been driven by a strong self-learning
              mindset and a passion for JavaScript-based development.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              I'm always open to job opportunities that align with my skills and
              interests, particularly those involving scalable system
              architecture and cutting-edge technologies.
            </p>
          </div>
        </div>

        {/* Highlights - Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {highlights.map((item, index) => (
            <div key={item.title} className="card-modern p-8 group">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground">
              Education
            </h3>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="card-modern p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
              >
                <div className="md:w-32 shrink-0">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {edu.period}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-display font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
