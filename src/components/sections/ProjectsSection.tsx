import { ExternalLink, Github, FolderKanban, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SparrowBid",
    subtitle: "Auction Based Travel Platform",
    role: "Full Stack Developer",
    description:
      "Auction-based hotel booking platform with global scalability and real-time bidding features.",
    techStack: ["Node.js", "MongoDB", "PostgreSQL", "React"],
    featured: true,
    gradient: "from-primary to-purple-500",
  },
  {
    title: "Innovative-IDM",
    subtitle: "Industrial Identity Management",
    role: "Backend Developer",
    description:
      "Enterprise-grade identity management solution with role-based access control.",
    techStack: ["Laravel", "PostgreSQL", "React"],
    featured: true,
    gradient: "from-accent to-cyan-400",
  },
  {
    title: "CASS",
    subtitle: "AI Mental Health Platform",
    role: "Backend Developer",
    description:
      "AI-driven mental health coaching platform via text interactions using NLP.",
    techStack: ["Python", "Flask", "OpenAI", "NLP"],
    featured: true,
    gradient: "from-orange-500 to-rose-500",
  },
  {
    title: "Data Enrichment",
    subtitle: "Web Scraping System",
    role: "Backend Developer",
    description:
      "Large-scale data extraction and enrichment system with automated pipelines.",
    techStack: ["Python", "Scrapy", "PostgreSQL"],
    featured: false,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Surechain",
    subtitle: "B2B Trade Platform",
    role: "Full Stack Developer",
    description:
      "Secure B2B commerce platform with role-based access control and multi-tenant architecture.",
    techStack: ["Node.js", "Next.js", "MySQL"],
    featured: true,
    gradient: "from-emerald-500 to-teal-500",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`card-modern overflow-hidden group ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground glass px-3 py-1.5 rounded-full">
                    {project.role}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full group/btn glass"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full group/btn glass"
                  >
                    <ArrowUpRight size={14} />
                    <span>Demo</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
