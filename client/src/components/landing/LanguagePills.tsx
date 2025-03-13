import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

interface Language {
  name: string;
  flag: string;
}

export function LanguagePills() {
  const languages: Language[] = [
    { name: "Spanish", flag: "🇪🇸" },
    { name: "French", flag: "🇫🇷" },
    { name: "Japanese", flag: "🇯🇵" },
    { name: "German", flag: "🇩🇪" },
    { name: "Mandarin", flag: "🇨🇳" },
    { name: "Italian", flag: "🇮🇹" },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <motion.div 
        className="container mx-auto px-6 md:px-12"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 flex items-center font-accent hover:border-primary transition-all cursor-pointer"
              whileHover={{ scale: 1.05, borderColor: "#4F46E5" }}
              transition={{ duration: 0.2 }}
              variants={fadeIn("up", "tween", 0.05 * index, 0.5)}
            >
              <span className="mr-2 text-xl">{language.flag}</span>
              <span>{language.name}</span>
            </motion.div>
          ))}
          <motion.div
            className="bg-primary/10 px-6 py-3 rounded-full shadow-sm border border-primary flex items-center font-accent text-primary hover:bg-primary/20 transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            variants={fadeIn("up", "tween", 0.05 * languages.length, 0.5)}
          >
            <span className="mr-2">+</span>
            <span>15+ More</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
