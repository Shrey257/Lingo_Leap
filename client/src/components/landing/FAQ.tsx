import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How does the AI speech recognition work?",
      answer: "Our advanced speech recognition technology uses machine learning algorithms to analyze your pronunciation, tone, and fluency. It compares your speech patterns with native speakers and provides detailed feedback on areas for improvement. The system adapts to your voice over time for even more accurate results."
    },
    {
      question: "Is LingoLeap suitable for complete beginners?",
      answer: "Absolutely! LingoLeap is designed for learners at all levels, including complete beginners. Our AI creates a personalized learning path that starts with the basics and gradually increases in complexity as you progress. The gamified experience makes it easy and fun to build your foundation in a new language."
    },
    {
      question: "How much time do I need to spend learning each day?",
      answer: "LingoLeap is flexible and adapts to your schedule. We recommend at least 15-20 minutes daily for optimal results, but even 5 minutes a day can help build your skills consistently. Our bite-sized lessons make it easy to learn on the go, whether you're commuting, waiting in line, or taking a coffee break."
    },
    {
      question: "Can I learn multiple languages simultaneously?",
      answer: "Yes, you can learn multiple languages with LingoLeap. However, we recommend focusing on one language at a time for beginners to avoid confusion. For intermediate or advanced learners, our platform fully supports studying multiple languages in parallel with separate progress tracking for each."
    },
    {
      question: "What subscription plans do you offer?",
      answer: "LingoLeap offers a free basic plan with limited features and three premium subscription options: Monthly ($9.99/month), Annual ($89.99/year, equivalent to $7.50/month), and Lifetime ($299 one-time payment). All premium plans include full access to all languages, AI speech recognition, personalized learning paths, and offline mode."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! LingoLeap is available on iOS and Android devices. Our mobile apps sync seamlessly with the web version, so you can switch between devices without losing progress. The mobile apps also feature offline mode, allowing you to download lessons and continue learning even without an internet connection."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="border-b border-gray-200 py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button 
                className="flex justify-between items-center w-full text-left" 
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-heading font-medium">{item.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gray-400" />
                </motion.div>
              </button>
              <motion.div 
                className="mt-3 text-gray-600"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <p>{item.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
