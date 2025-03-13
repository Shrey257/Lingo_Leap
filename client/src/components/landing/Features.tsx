import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Mic, Brain, Gamepad, MessageSquare, BarChart, Smartphone } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export function Features() {
  const features: Feature[] = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Advanced Speech Recognition",
      description: "Get real-time feedback on your pronunciation with our AI-powered speech analysis system.",
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Personalized Learning Path",
      description: "Our AI adapts to your learning style, pace, and goals to create a custom curriculum just for you.",
      color: "text-[#10B981]",
      bgColor: "bg-[#10B981]/20"
    },
    {
      icon: <Gamepad className="w-6 h-6" />,
      title: "Gamified Experience",
      description: "Earn points, unlock achievements, and compete with friends to stay motivated on your learning journey.",
      color: "text-[#F59E0B]",
      bgColor: "bg-[#F59E0B]/20"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI Conversation Partner",
      description: "Practice real conversations with our AI chat partner that simulates natural dialogues for any scenario.",
      color: "text-purple-600",
      bgColor: "bg-purple-200"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Progress Analytics",
      description: "Track your learning journey with detailed analytics that show your improvement over time.",
      color: "text-blue-600",
      bgColor: "bg-blue-200"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Offline Learning",
      description: "Download lessons to continue learning even without an internet connection, perfect for travel.",
      color: "text-pink-600",
      bgColor: "bg-pink-200"
    }
  ];

  return (
    <section id="features" className="py-20">
      <motion.div 
        className="container mx-auto px-6 md:px-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Choose LingoLeap?
          </h2>
          <p className="text-lg text-gray-600">
            Our AI-powered platform offers unique features that make language learning more effective and enjoyable than ever before.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
      whileHover={{ y: -10 }}
      variants={fadeIn("up", "tween", 0.2 + index * 0.1, 0.6)}
    >
      <div className={`w-14 h-14 rounded-full ${feature.bgColor} flex items-center justify-center ${feature.color} mb-6`}>
        {feature.icon}
      </div>
      <h3 className="text-xl font-heading font-bold mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-600 mb-4">
        {feature.description}
      </p>
      <a href="#" className="text-primary font-medium flex items-center">
        Learn more <span className="ml-2">→</span>
      </a>
    </motion.div>
  );
}
