import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const navLinks = [
    "Features",
    "Pricing", 
    "Resources",
    "About",
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-white border-t border-gradient-to-r from-[#5AB8FF]/20 to-[#B084F9]/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left: Logo & Description */}
          <div className="flex-1">
            <div className="text-2xl bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] bg-clip-text text-transparent mb-3">
              MetraSocial
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Your AI-powered social media co-pilot. Plan, post, and analyze with intelligent automation.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap gap-6 md:gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-gray-600 hover:text-[#5AB8FF] transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: Social Links */}
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 backdrop-blur-sm bg-gradient-to-r from-[#5AB8FF]/10 to-[#B084F9]/10 rounded-full flex items-center justify-center hover:from-[#5AB8FF]/20 hover:to-[#B084F9]/20 transition-all duration-300 hover:scale-110"
                >
                  <IconComponent className="w-4 h-4 text-[#5AB8FF]" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600">
            © 2025 MetraSocial. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-[#5AB8FF] transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-[#5AB8FF] transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}