import { Play } from "lucide-react";

export function DemoPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#B8E4FF]/10 via-white to-[#E4D7FF]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl text-gray-900 mb-6">
            See MetraSocial{" "}
            <span className="bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] bg-clip-text text-transparent">
              in Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Watch how our AI transforms your social media workflow in just minutes.
          </p>
        </div>

        {/* Demo Video Container */}
        <div className="relative">
          {/* Floating Glass Panel */}
          <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden aspect-video">
              {/* Video Thumbnail/Mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5AB8FF]/20 to-[#B084F9]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Play Button */}
                  <div className="group cursor-pointer">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 group-hover:shadow-3xl">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-white/20 rounded-full animate-ping group-hover:animate-none"></div>
                  </div>
                </div>

                {/* UI Elements Overlay */}
                <div className="absolute top-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div className="backdrop-blur-sm bg-white/20 rounded-lg px-3 py-2">
                      <div className="h-2 bg-white/60 rounded w-20"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="backdrop-blur-sm bg-white/20 rounded-lg p-4">
                    <div className="space-y-2">
                      <div className="h-2 bg-white/60 rounded w-3/4"></div>
                      <div className="h-2 bg-white/40 rounded w-1/2"></div>
                      <div className="flex space-x-2 mt-3">
                        <div className="h-6 bg-gradient-to-r from-[#5AB8FF]/60 to-[#B084F9]/60 rounded w-16"></div>
                        <div className="h-6 bg-white/30 rounded w-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#5AB8FF]/30 to-[#B084F9]/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#E4D7FF]/40 to-[#B8E4FF]/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500">
            ▶ 2 minute overview • No signup required
          </p>
        </div>
      </div>
    </section>
  );
}