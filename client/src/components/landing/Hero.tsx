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
              Master{" "}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5722] via-[#2196F3] to-[#FFC107] relative z-10">
                  Indian Languages
                </span>
                <motion.span 
                  className="absolute -top-4 -right-2 text-3xl text-[#FF5722] font-bold opacity-70"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  क
                </motion.span>
                <motion.span 
                  className="absolute -bottom-1 -left-2 text-2xl text-[#2196F3] font-bold opacity-70"
                  animate={{ 
                    y: [0, 8, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  ग
                </motion.span>
              </span>{" "}
              with <span className="text-primary relative">
                AI-Powered
                <motion.span 
                  className="absolute -top-3 -right-3 text-2xl text-[#FFC107] font-bold opacity-70"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 15, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  च
                </motion.span>
              </span> Learning
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 relative">
              LingoLeap helps you create projects in{" "}
              <motion.span 
                className="font-bold relative inline-flex"
                whileHover={{ color: "#4F46E5" }}
              >
                any Indian language
                <motion.span 
                  className="absolute -top-3 -right-2 text-sm text-orange-500 opacity-0"
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  भ
                </motion.span>
              </motion.span> including {" "}
              <motion.span 
                className="font-medium text-[#FF5722] relative inline-block cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                Hindi <span className="opacity-70 text-sm">हिंदी</span>
              </motion.span>, {" "}
              <motion.span 
                className="font-medium text-[#2196F3] relative inline-block cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                Marathi <span className="opacity-70 text-sm">मराठी</span>
              </motion.span>, {" "}
              <motion.span 
                className="font-medium text-[#FFC107] relative inline-block cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                Punjabi <span className="opacity-70 text-sm">ਪੰਜਾਬੀ</span>
              </motion.span>, {" "}
              <motion.span 
                className="font-medium text-pink-600 relative inline-block cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                Bengali <span className="opacity-70 text-sm">বাংলা</span>
              </motion.span>, and more. Experience our cutting-edge AI and
              speech recognition technology that makes language learning fun,
              effective, and personalized.
              
              {/* Floating tiny characters around the paragraph */}
              <motion.span 
                className="absolute -right-5 top-1/4 text-xs text-emerald-500 opacity-40 pointer-events-none"
                animate={{ 
                  rotate: [0, 360],
                  x: [0, 10, 0],
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                ಕ
              </motion.span>
              <motion.span 
                className="absolute left-1/4 -bottom-3 text-xs text-[#2196F3] opacity-40 pointer-events-none"
                animate={{ 
                  rotate: [360, 0],
                  y: [0, 5, 0]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                ढ
              </motion.span>
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <ButtonHover
                  className="bg-primary text-white text-center px-8 py-4 rounded-full font-medium relative overflow-hidden group z-10"
                  onClick={() => openAuthDialog("register")}
                >
                  <span className="relative z-10">Start Learning Free</span>
                  <motion.span 
                    className="absolute -right-4 -top-4 text-2xl text-white/20 font-bold pointer-events-none"
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    अ
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80 z-0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </ButtonHover>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-md opacity-30 bg-primary z-0"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border border-gray-200 text-center px-8 py-4 rounded-full font-medium hover:border-primary hover:text-primary transition-all relative overflow-hidden group"
                  onClick={() => {
                    const demoSection = document.getElementById("demo");
                    if (demoSection) {
                      demoSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Watch Demo
                  </span> 
                  <motion.span
                    className="ml-2 relative z-10 group-hover:text-white transition-colors duration-300"
                    animate={{ 
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Play className="h-4 w-4 inline-block" />
                  </motion.span>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FF5722] to-[#FFC107] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: '100%' }}
                    whileHover={{ y: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              
              {/* Floating character */}
              <motion.span
                className="absolute -top-10 -right-5 text-3xl text-primary/30 pointer-events-none hidden sm:block"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ਪ
              </motion.span>
            </div>
            <motion.div
              className="mt-8 flex items-center"
              variants={fadeIn("up", "tween", 0.5, 1)}
            >
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-primary">4.9/5</span> from
                  over 10,000+ happy learners
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="order-1 md:order-2 relative"
            variants={slideIn("left", "tween", 0.2, 1)}
          >
            {/* Avatar Guide */}
            <div className="relative bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-primary/20 h-full flex flex-col justify-center">
              {/* Avatar character */}
              <div className="relative mx-auto mb-4">
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-br from-[#FF5722] via-[#4F46E5] to-[#10B981] rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    className="absolute inset-1 rounded-full bg-white flex items-center justify-center overflow-hidden"
                    animate={{ 
                      borderRadius: ["50%", "50%"] 
                    }}
                  >
                    <motion.div
                      className="font-bold text-5xl bg-gradient-to-br from-[#FF5722] via-[#4F46E5] to-[#10B981] bg-clip-text text-transparent"
                      animate={{ 
                        rotate: [0, 10, 0, -10, 0]
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      गु
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                {/* Animated circles around avatar */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-primary"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Floating elements near avatar */}
                <motion.div
                  className="absolute top-0 -right-4 text-2xl"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 20, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ಕ
                </motion.div>
                <motion.div
                  className="absolute bottom-0 -left-4 text-2xl text-[#FF5722]"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -20, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  अ
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold text-center mb-3">Single Window for learning Indian Languages</h3>
              
              <motion.div
                className="text-center text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p>I'll help you explore Indian languages and guide you through interactive lessons!</p>
              </motion.div>
              
              {/* Speech bubbles with tips */}
              <div className="space-y-4 mt-2">
                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md border border-gray-200 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent"></div>
                  <div className="flex items-start">
                    <div className="bg-[#FF5722]/20 p-1 rounded-full mr-2">
                      <span className="inline-block">🔍</span>
                    </div>
                    <p className="text-sm">Click on any language to start an interactive quiz!</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-md border border-gray-200 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent"></div>
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded-full mr-2">
                      <span className="inline-block">🎯</span>
                    </div>
                    <p className="text-sm">Hover over characters to see them animate!</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Interaction button */}
              <motion.button
                className="mt-6 bg-gradient-to-r from-primary to-[#6366F1] text-white px-6 py-3 rounded-full shadow-lg mx-auto block font-medium"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Learn with LingoChat
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
