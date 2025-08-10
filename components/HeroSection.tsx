import { Button } from "./ui/button";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

export function HeroSection() {
  // Calendar data with scheduled posts
  const currentMonth = "January 2025";
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  // Calendar days with scheduled posts
  const calendarDays = [
    { day: null, posts: [] },
    { day: null, posts: [] },
    { day: null, posts: [] },
    { day: 1, posts: [] },
    { day: 2, posts: [{ platform: "instagram", color: "from-pink-400 to-purple-500" }] },
    { day: 3, posts: [] },
    { day: 4, posts: [] },
    
    { day: 5, posts: [] },
    { day: 6, posts: [{ platform: "twitter", color: "from-blue-400 to-blue-600" }] },
    { day: 7, posts: [] },
    { day: 8, posts: [
      { platform: "linkedin", color: "from-blue-600 to-blue-800" },
      { platform: "facebook", color: "from-blue-500 to-indigo-600" }
    ] },
    { day: 9, posts: [] },
    { day: 10, posts: [] },
    { day: 11, posts: [] },
    
    { day: 12, posts: [{ platform: "instagram", color: "from-pink-400 to-purple-500" }] },
    { day: 13, posts: [] },
    { day: 14, posts: [
      { platform: "twitter", color: "from-blue-400 to-blue-600" },
      { platform: "instagram", color: "from-pink-400 to-purple-500" },
      { platform: "linkedin", color: "from-blue-600 to-blue-800" }
    ] },
    { day: 15, posts: [] },
    { day: 16, posts: [{ platform: "facebook", color: "from-blue-500 to-indigo-600" }] },
    { day: 17, posts: [] },
    { day: 18, posts: [] },
    
    { day: 19, posts: [{ platform: "twitter", color: "from-blue-400 to-blue-600" }] },
    { day: 20, posts: [] },
    { day: 21, posts: [
      { platform: "instagram", color: "from-pink-400 to-purple-500" },
      { platform: "linkedin", color: "from-blue-600 to-blue-800" }
    ] },
    { day: 22, posts: [] },
    { day: 23, posts: [{ platform: "facebook", color: "from-blue-500 to-indigo-600" }] },
    { day: 24, posts: [] },
    { day: 25, posts: [] },
    
    { day: 26, posts: [{ platform: "twitter", color: "from-blue-400 to-blue-600" }] },
    { day: 27, posts: [] },
    { day: 28, posts: [
      { platform: "instagram", color: "from-pink-400 to-purple-500" },
      { platform: "twitter", color: "from-blue-400 to-blue-600" },
      { platform: "linkedin", color: "from-blue-600 to-blue-800" },
      { platform: "facebook", color: "from-blue-500 to-indigo-600" }
    ] },
    { day: 29, posts: [] },
    { day: 30, posts: [{ platform: "instagram", color: "from-pink-400 to-purple-500" }] },
    { day: 31, posts: [] },
    { day: null, posts: [] },
  ];

  return (
    <section className="relative pt-24 pb-16 lg:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#B8E4FF]/20 to-[#E4D7FF]/30"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#5AB8FF]/30 to-[#B084F9]/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-[#E4D7FF]/40 to-[#B8E4FF]/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-[#B084F9]/30 to-[#5AB8FF]/30 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl leading-tight text-gray-900">
                Smarter Scheduling.{" "}
                <span className="bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] bg-clip-text text-transparent">
                  Effortless Growth.
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Plan, post, and analyze with your AI-powered social media co-pilot.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] hover:from-[#4AA7EE] hover:to-[#9F73E8] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg"
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-[#5AB8FF]/30 text-[#5AB8FF] hover:bg-[#5AB8FF]/10 px-8 py-6 text-lg backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Floating Calendar */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Calendar Container */}
              <div className="backdrop-blur-xl bg-white/20 rounded-3xl border border-white/30 shadow-2xl p-6 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                  {/* Calendar Header */}
                  <div className="bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] p-4">
                    <div className="flex items-center justify-between text-white">
                      <button className="p-1 hover:bg-white/20 rounded">
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <h3 className="text-lg font-medium">{currentMonth}</h3>
                      <button className="p-1 hover:bg-white/20 rounded">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Days of Week Header */}
                  <div className="grid grid-cols-7 bg-gray-50">
                    {daysOfWeek.map((day, index) => (
                      <div key={index} className="p-2 text-center text-xs font-medium text-gray-600 border-r border-gray-200 last:border-r-0">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7">
                    {calendarDays.map((dateObj, index) => (
                      <div 
                        key={index} 
                        className="h-16 border-r border-b border-gray-200 last:border-r-0 p-1 bg-white hover:bg-gray-50 transition-colors duration-200"
                      >
                        {dateObj.day && (
                          <div className="h-full flex flex-col">
                            <div className="text-sm text-gray-700 mb-1">{dateObj.day}</div>
                            <div className="flex-1 space-y-0.5">
                              {dateObj.posts.slice(0, 3).map((post, postIndex) => (
                                <div 
                                  key={postIndex}
                                  className={`h-1.5 rounded-full bg-gradient-to-r ${post.color} opacity-80 hover:opacity-100 transition-opacity duration-200`}
                                ></div>
                              ))}
                              {dateObj.posts.length > 3 && (
                                <div className="text-xs text-gray-500 text-center">
                                  +{dateObj.posts.length - 3}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <div className="flex flex-wrap gap-3 text-xs">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500"></div>
                        <span className="text-gray-600">Instagram</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                        <span className="text-gray-600">Twitter</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800"></div>
                        <span className="text-gray-600">LinkedIn</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                        <span className="text-gray-600">Facebook</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Post Preview */}
              <div className="absolute -top-4 -right-6 backdrop-blur-xl bg-white/30 rounded-2xl border border-white/40 shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="w-32 h-20 bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] h-1"></div>
                  <div className="p-2 space-y-1">
                    <div className="h-1.5 bg-gradient-to-r from-[#5AB8FF]/30 to-[#B084F9]/30 rounded w-full"></div>
                    <div className="h-1 bg-gray-200 rounded w-2/3"></div>
                    <div className="flex space-x-1 mt-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Analytics Badge */}
              <div className="absolute -bottom-6 -left-4 backdrop-blur-xl bg-white/40 rounded-2xl border border-white/40 shadow-xl p-3 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-lg font-semibold bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] bg-clip-text text-transparent">
                    28
                  </div>
                  <div className="text-xs text-gray-600">Posts Scheduled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}