import { Code, Server, Database, Cloud, Cpu, Wrench } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "End-to-end web application development using React, Next.js, and Node.js.",
    gradient: "from-primary to-purple-400",
  },
  {
    icon: Server,
    title: "API Development",
    description: "RESTful and GraphQL API design with robust authentication.",
    gradient: "from-accent to-cyan-400",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient architecture with MySQL, PostgreSQL, and MongoDB.",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description: "AWS deployment, Docker, and Nginx configuration.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Integration of AI services and third-party APIs.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">
            My <span className="gradient-text">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-modern p-8 group ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:gradient-text transition-all">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
