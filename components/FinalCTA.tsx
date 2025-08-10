import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h2 className="text-5xl lg:text-6xl text-white leading-tight">
            Ready to grow your social media{" "}
            <span className="text-white/80">effortlessly?</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of marketers who've transformed their social media strategy. 
            Start your free trial today and see the difference AI can make.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-[#5AB8FF] hover:bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-12 py-6 text-lg group"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <div className="text-white/80 text-sm">
              ✨ 14-day free trial • No credit card required
            </div>
          </div>

          <div className="pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl mb-2">15K+</div>
                <div className="text-white/80">Happy customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">2.5M+</div>
                <div className="text-white/80">Posts scheduled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">340%</div>
                <div className="text-white/80">Average engagement boost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}