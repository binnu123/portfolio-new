import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                S
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent blur-xl opacity-40" />
            </div>
            <div>
              <p className="font-display font-semibold text-foreground">Sampath Kumar D.</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Made with <Heart size={12} className="text-primary" /> © 2024
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/username' },
              { icon: Linkedin, href: 'https://linkedin.com/in/username' },
              { icon: Mail, href: 'mailto:hello@example.com' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
