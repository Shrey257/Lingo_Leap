import { motion } from "framer-motion";
import { ButtonHover } from "@/components/ui/button-hover";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";

interface CTAProps {
  openAuthDialog: (view: "login" | "register") => void;
}

export function CTA({ openAuthDialog }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ 
            hidden: {}, 
            show: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
            variants={fadeIn("up", "tween", 0.1, 1)}
          >
            Ready to Start Your Language Journey?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 mb-8"
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            Join thousands of learners who are already achieving their language goals with LingoLeap.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            variants={fadeIn("up", "tween", 0.3, 1)}
          >
            <ButtonHover 
              className="bg-white text-primary font-medium px-8 py-4 rounded-full hover:bg-gray-100"
              onClick={() => openAuthDialog("register")}
            >
              Start Free Trial
            </ButtonHover>
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-full hover:bg-white/10"
              onClick={() => window.open("#", "_blank")}
            >
              Explore Plans
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
