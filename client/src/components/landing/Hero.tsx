import { Button } from "@/components/ui/button";
import { ButtonHover } from "@/components/ui/button-hover";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "@/lib/animations";
import { Play } from "lucide-react";
import { BouncingAkshar } from "./BouncingAkshar";

interface HeroProps {
  openAuthDialog: (view: "login" | "register") => void;
}

export function Hero({ openAuthDialog }: HeroProps) {
  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      {/* Bouncing Akshar Animation */}
      <BouncingAkshar />
      
      <motion.div 
        className="container mx-auto px-6 md:px-12 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 md:order-1"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6">
              Master <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5722] via-[#2196F3] to-[#FFC107]">Indian Languages</span> with <span className="text-primary">AI-Powered</span> Learning
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              LingoLeap helps you create projects in <strong>any Indian language</strong> including Hindi, Marathi, Punjabi, Bengali, and more. Experience our cutting-edge AI and speech recognition technology that makes language learning fun, effective, and personalized.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <ButtonHover 
                className="bg-primary text-white text-center px-8 py-4 rounded-full font-medium"
                onClick={() => openAuthDialog("register")}
              >
                Start Learning Free
              </ButtonHover>
              <Button 
                variant="outline" 
                className="border border-gray-200 text-center px-8 py-4 rounded-full font-medium hover:border-primary hover:text-primary transition-all"
                onClick={() => {
                  const demoSection = document.getElementById("demo");
                  if (demoSection) {
                    demoSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Watch Demo <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <motion.div 
              className="mt-8 flex items-center"
              variants={fadeIn("up", "tween", 0.5, 1)}
            >
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600"><span className="font-semibold text-primary">4.9/5</span> from over 10,000+ happy learners</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="order-1 md:order-2 relative"
            variants={slideIn("left", "tween", 0.2, 1)}
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="AI Language Learning Illustration" 
              className="w-full h-auto rounded-xl shadow-lg" 
            />
            
            {/* Floating elements */}
            <motion.div 
              className="absolute top-5 -left-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                  <span role="img" aria-label="Fire">🔥</span>
                </div>
                <div>
                  <p className="text-sm font-medium">7-day streak!</p>
                  <p className="text-xs text-gray-500">Keep it going!</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981] mr-3">
                  <span role="img" aria-label="Check">✓✓</span>
                </div>
                <div>
                  <p className="text-sm font-medium">98% accuracy</p>
                  <p className="text-xs text-gray-500">Great pronunciation!</p>
                </div>
              </div>
            </motion.div>
            
            {/* New floating element */}
            <motion.div 
              className="absolute top-1/2 -right-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block"
              initial={{ opacity: 0, x: 20, y: -50 }}
              animate={{ opacity: 1, x: 0, y: -50 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF5722] via-[#2196F3] to-[#FFC107] flex items-center justify-center text-white mr-3">
                  <span role="img" aria-label="Globe">🌐</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Multi-language Projects</p>
                  <p className="text-xs text-gray-500">Build in any Indian language!</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
