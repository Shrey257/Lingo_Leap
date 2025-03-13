import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

interface Language {
  name: string;
  nativeName: string;
  color: string;
  character: string;
  backgroundColor: string;
}

export function LanguagePills() {
  const languages: Language[] = [
    { 
      name: "Hindi", 
      nativeName: "हिन्दी", 
      color: "#FF5722", 
      character: "ह", 
      backgroundColor: "from-[#FF5722]/10 to-[#FF5722]/30" 
    },
    { 
      name: "Marathi", 
      nativeName: "मराठी", 
      color: "#2196F3", 
      character: "म", 
      backgroundColor: "from-[#2196F3]/10 to-[#2196F3]/30" 
    },
    { 
      name: "Punjabi", 
      nativeName: "ਪੰਜਾਬੀ", 
      color: "#FFC107", 
      character: "ਪ", 
      backgroundColor: "from-[#FFC107]/10 to-[#FFC107]/30" 
    },
    { 
      name: "Bengali", 
      nativeName: "বাংলা", 
      color: "#9C27B0", 
      character: "ব", 
      backgroundColor: "from-[#9C27B0]/10 to-[#9C27B0]/30" 
    },
    { 
      name: "Gujarati", 
      nativeName: "ગુજરાતી", 
      color: "#4CAF50", 
      character: "ગ", 
      backgroundColor: "from-[#4CAF50]/10 to-[#4CAF50]/30" 
    },
    { 
      name: "Tamil", 
      nativeName: "தமிழ்", 
      color: "#F44336", 
      character: "த", 
      backgroundColor: "from-[#F44336]/10 to-[#F44336]/30" 
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <motion.div 
        className="container mx-auto px-6 md:px-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn("up", "tween", 0.1, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Create Projects in <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5722] via-[#2196F3] to-[#FFC107]">Indian Languages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Build your language learning projects in any of these Indian languages and many more. Perfect for students, educators, and language enthusiasts.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              className={`bg-gradient-to-br ${language.backgroundColor} px-6 py-4 rounded-xl shadow-lg flex items-center font-accent hover:shadow-xl transition-all cursor-pointer relative overflow-hidden group`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 10px 25px -5px ${language.color}40`
              }}
              transition={{ duration: 0.3 }}
              variants={fadeIn("up", "tween", 0.05 * index, 0.5)}
            >
              {/* Character Bubble */}
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white font-bold text-2xl shadow-inner transform transition-all group-hover:scale-110"
                style={{ backgroundColor: language.color }}
              >
                {language.character}
              </div>
              
              <div className="flex flex-col items-start">
                <span className="text-lg font-bold">{language.name}</span>
                <span className="text-sm">{language.nativeName}</span>
              </div>
              
              {/* Background decoration */}
              <motion.span 
                className="absolute -right-4 -top-4 text-7xl opacity-10 font-bold"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                style={{ color: language.color }}
              >
                {language.character}
              </motion.span>
            </motion.div>
          ))}
          
          <motion.div
            className="bg-gradient-to-br from-gray-800/5 to-gray-900/20 p-4 rounded-xl shadow-lg flex items-center font-accent hover:shadow-xl transition-all cursor-pointer relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)"
            }}
            transition={{ duration: 0.3 }}
            variants={fadeIn("up", "tween", 0.05 * languages.length, 0.5)}
          >
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4 text-white font-bold text-2xl">
              +
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold">15+ More</span>
              <span className="text-sm">Indian Languages</span>
            </div>
            <motion.span 
              className="absolute -right-8 -bottom-8 text-9xl opacity-5 font-bold text-gray-800"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: -15 }}
            >
              +
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
