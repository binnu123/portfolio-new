import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "binnusampath@gmail.com",
    href: "mailto:binnusampath@gmail.com",
    gradient: "from-primary to-purple-400",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 90000 00000",
    href: "tel:+919000000000",
    gradient: "from-accent to-cyan-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/binnu123",
    href: "https://github.com/binnu123",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sampath-kumar-domakonda",
    href: "https://www.linkedin.com/in/sampath-kumar-domakonda/",
    gradient: "from-blue-500 to-indigo-500",
  },
];

export const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();
  const STORAGE_KEY = "contact_form_draft_v1";

  // Load saved draft on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.name || parsed?.email || parsed?.message) {
          setFormData(parsed);
          toast({
            title: "Draft restored",
            description: "We restored your unsent message.",
          });
        }
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Auto-save whenever formData changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch (e) {
      // ignore
    }
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    // Construct mailto link to open user's default mail client with encoded subject & body
    const recipient =
      contactInfo.find((c) => c.label === "Email")?.value ??
      "binnusampath@gmail.com";
    const subject = `Message from ${formData.name} via Portfolio`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the mail client
    window.location.href = mailto;

    // UX feedback
    setIsSubmitted(true);
    toast({
      title: "Opening mail client...",
      description: "Your email client should open with a prefilled message.",
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Contact Information
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Feel free to reach out for collaborations, job opportunities, or
              just a friendly chat about technology.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="card-modern p-5 flex items-center gap-4 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-foreground font-medium text-sm">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-modern p-8">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <Sparkles size={20} className="text-primary" />
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center mb-4 glow-accent">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <p className="text-xl font-display font-semibold text-foreground">
                  Message Sent!
                </p>
                <p className="text-muted-foreground mt-2">
                  Thank you for reaching out.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="glass border-border focus:border-primary rounded-xl h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="glass border-border focus:border-primary rounded-xl h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="glass border-border focus:border-primary rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  className="w-full rounded-full h-12"
                >
                  Send Message <Send size={16} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
