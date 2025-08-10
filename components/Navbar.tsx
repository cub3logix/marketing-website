import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] bg-clip-text text-transparent">
              MetraSocial
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#5AB8FF] transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#5AB8FF] transition-colors">
              Pricing
            </a>
            <a href="#resources" className="text-gray-700 hover:text-[#5AB8FF] transition-colors">
              Resources
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#5AB8FF] transition-colors">
              About
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#5AB8FF] transition-colors">
              Log In
            </button>
            <Button className="bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] hover:from-[#4AA7EE] hover:to-[#9F73E8] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}