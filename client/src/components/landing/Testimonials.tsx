import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Star } from "lucide-react";

interface Testimonial {
  content: string;
  name: string;
  language: string;
  image: string;
  rating: number;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      content: "LingoLeap's speech recognition is incredible. The immediate feedback has improved my pronunciation more in 2 months than years of traditional classes.",
      name: "Sarah M.",
      language: "Learning French",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    },
    {
      content: "The gamification aspect keeps me coming back. I've maintained a 60-day streak and can now hold basic conversations in Japanese!",
      name: "David L.",
      language: "Learning Japanese",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    },
    {
      content: "As a busy professional, the personalized learning path was perfect. LingoLeap adapted to my schedule and I learned Spanish for my business trip in just 3 months.",
      name: "Elena K.",
      language: "Learning Spanish",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 to-[#F59E0B]/5">
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
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of satisfied learners who have transformed their language skills with LingoLeap.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.name}
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
      whileHover={{ y: -10 }}
      variants={fadeIn("up", "tween", 0.2 + index * 0.1, 0.6)}
    >
      <div className="flex text-[#F59E0B] mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            className="h-5 w-5" 
            fill={i < Math.floor(testimonial.rating) ? "#F59E0B" : "none"} 
          />
        ))}
        {testimonial.rating % 1 > 0 && (
          <div className="relative w-5 h-5">
            <Star className="absolute h-5 w-5" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
              <Star className="h-5 w-5" fill="#F59E0B" />
            </div>
          </div>
        )}
      </div>
      <p className="text-gray-600 mb-6">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <img 
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4" 
        />
        <div>
          <p className="font-heading font-medium">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.language}</p>
        </div>
      </div>
    </motion.div>
  );
}
