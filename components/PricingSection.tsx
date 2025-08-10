import { Button } from "./ui/button";
import { Check, Sparkles } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$12",
      period: "/month",
      description: "Perfect for solo creators and small businesses",
      features: [
        "3 social accounts",
        "50 scheduled posts/month",
        "Basic analytics",
        "AI content suggestions",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Ideal for growing teams and agencies",
      features: [
        "10 social accounts",
        "Unlimited posts",
        "Advanced analytics",
        "AI optimization",
        "Team collaboration",
        "Priority support",
        "Custom branding",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited accounts",
        "Unlimited posts",
        "White-label solution",
        "Custom integrations",
        "Dedicated support",
        "Advanced security",
        "Training & onboarding",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-[#B8E4FF]/5 via-white to-[#E4D7FF]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-gray-900 mb-6">
            Simple,{" "}
            <span className="bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] bg-clip-text text-transparent">
              transparent pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your social media needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative backdrop-blur-xl border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-white/80 border-gradient-to-r from-[#5AB8FF] to-[#B084F9] border-2'
                  : 'bg-white/60 border-white/30 hover:bg-white/80'
              }`}
              style={{
                background: plan.popular 
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2))',
                backdropFilter: 'blur(20px)',
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] text-white px-4 py-1 rounded-full text-sm flex items-center space-x-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full py-6 text-lg ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#5AB8FF] to-[#B084F9] hover:from-[#4AA7EE] hover:to-[#9F73E8] text-white border-0 shadow-lg hover:shadow-xl'
                    : 'border-2 border-[#5AB8FF]/30 text-[#5AB8FF] hover:bg-[#5AB8FF]/10 bg-transparent'
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}