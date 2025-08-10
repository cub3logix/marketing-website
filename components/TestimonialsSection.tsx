import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow",
      content: "MetraSocial transformed our social media strategy. Our engagement increased by 340% in just two months. The AI suggestions are incredibly accurate.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Marcus Johnson",
      role: "Brand Manager", 
      company: "Creative Studios",
      content: "Finally, a tool that understands our brand voice. The scheduling intelligence saves us 15+ hours per week while boosting our reach significantly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Elena Rodriguez",
      role: "Social Media Manager",
      company: "Growth Co.",
      content: "The collaboration features are game-changing. Our team workflow is seamless now, and the analytics provide insights we never had before.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "David Park",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "As a small team, MetraSocial gives us enterprise-level capabilities. Our social presence now rivals companies 10x our size.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-gray-900 mb-6">
            Loved by{" "}
            <span className="bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] bg-clip-text text-transparent">
              teams worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of marketers who've transformed their social media strategy with MetraSocial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/60 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2))',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gradient-to-r from-[#5AB8FF]/30 to-[#B084F9]/30">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}