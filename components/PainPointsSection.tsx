import { Clock, Lightbulb, Shuffle } from "lucide-react";

export function PainPointsSection() {
  const painPoints = [
    {
      icon: Clock,
      title: "Posting blind",
      description: "No idea when to post for maximum engagement",
    },
    {
      icon: Lightbulb,
      title: "Content burnout",
      description: "Can't think of fresh ideas that resonate",
    },
    {
      icon: Shuffle,
      title: "Scattered tools",
      description: "Juggling multiple platforms and dashboards",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-gray-900 mb-6">
            Social media shouldn't be{" "}
            <span className="text-gray-400">this hard…</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/60 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#5AB8FF]/20 to-[#B084F9]/20 rounded-2xl flex items-center justify-center group-hover:from-[#5AB8FF]/30 group-hover:to-[#B084F9]/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-[#5AB8FF] group-hover:text-[#B084F9] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl text-gray-900">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}