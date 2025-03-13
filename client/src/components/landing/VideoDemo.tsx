import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "@/lib/animations";
import { Play, CheckCircle } from "lucide-react";

export function VideoDemo() {
  const features = [
    "Adaptive learning algorithms that adjust to your pace",
    "Immersive conversation scenarios with AI partners",
    "Real-time pronunciation feedback and correction",
    "Gamified challenges to keep your motivation high"
  ];

  return (
    <section className="py-20">
      <motion.div 
        className="container mx-auto px-6 md:px-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeIn("right", "tween", 0.1, 1)}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              See LingoLeap in Action
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Watch how our platform makes language learning intuitive and effective through personalized lessons and real-time feedback.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={fadeIn("up", "tween", 0.1 + index * 0.1, 0.8)}
                >
                  <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary mr-3">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <p>{feature}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={slideIn("left", "tween", 0.2, 1)}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80" 
                alt="Video demo thumbnail" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button 
                  className="w-20 h-20 bg-primary/90 hover:bg-primary text-white rounded-full flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Play className="h-8 w-8" fill="white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
