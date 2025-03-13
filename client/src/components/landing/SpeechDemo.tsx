import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Volume2, Mic, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

export function SpeechDemo() {
  const [isListening, setIsListening] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showAksharDialog, setShowAksharDialog] = useState(false);

  const hindiAkshar = [
    'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः',
    'क', 'ख', 'ग', 'घ', 'ङ', 
    'च', 'छ', 'ज', 'झ', 'ञ',
    'ट', 'ठ', 'ड', 'ढ', 'ण',
    'त', 'थ', 'द', 'ध', 'न',
    'प', 'फ', 'ब', 'भ', 'म',
    'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'क्ष', 'त्र'
  ];

  const handleMicClick = () => {
    setIsListening(true);
    
    // Simulate speech recognition completing after 3 seconds
    setTimeout(() => {
      setIsListening(false);
      setShowResults(true);
    }, 3000);
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-primary/5 to-[#10B981]/5">
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
            Experience AI Speech Recognition
          </h2>
          <p className="text-lg text-gray-600">
            Try our speech recognition technology right in your browser. Say the phrase below and see how our AI scores your pronunciation.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto overflow-hidden"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4">
                <Volume2 className="w-5 h-5" />
              </div>
              <span className="text-lg font-heading font-medium">Listen to the phrase</span>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl mb-8 flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <p 
                  className="text-xl font-accent mb-2 cursor-pointer hover:text-primary transition-colors"
                  onClick={() => setShowAksharDialog(true)}
                >
                  नमस्ते, आप कैसे हैं?
                </p>
                <p className="text-gray-500 text-sm">Namaste, how are you? <span className="text-xs text-primary">(Click to see Hindi characters)</span></p>
              </div>
              <Button 
                className="mt-4 md:mt-0 bg-primary text-white rounded-full" 
                onClick={() => {
                  // Play audio logic would go here
                }}
              >
                <Volume2 className="mr-2 h-4 w-4" /> Play Audio
              </Button>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981] mr-4">
                <Mic className="w-5 h-5" />
              </div>
              <span className="text-lg font-heading font-medium">Your turn to speak</span>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl mb-6 flex flex-col items-center">
              <div className="speech-wave mb-6 flex items-center justify-center h-[60px]">
                {Array(7).fill(0).map((_, i) => (
                  <motion.span
                    key={i}
                    className="inline-block w-[4px] mx-[2px] rounded-[3px] bg-primary"
                    animate={{ 
                      height: isListening 
                        ? ["15px", "40px", "15px"] 
                        : "15px" 
                    }}
                    transition={{
                      duration: 1,
                      repeat: isListening ? Infinity : 0,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
              
              <Button 
                className={`${isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-[#10B981] hover:bg-[#10B981]/90'} text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center w-full md:w-auto`}
                onClick={handleMicClick}
              >
                <Mic className="mr-2 h-4 w-4" /> 
                {isListening ? "Listening..." : "Tap to Speak"}
              </Button>
            </div>
            
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="text-lg font-heading font-bold mb-4">Your Results</h4>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex-1 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">92%</div>
                      <div className="text-sm text-gray-500">Pronunciation</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex-1 text-center">
                      <div className="text-3xl font-bold text-[#10B981] mb-1">95%</div>
                      <div className="text-sm text-gray-500">Accuracy</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex-1 text-center">
                      <div className="text-3xl font-bold text-[#F59E0B] mb-1">89%</div>
                      <div className="text-sm text-gray-500">Fluency</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Hindi Akshar Dialog */}
      <Dialog open={showAksharDialog} onOpenChange={setShowAksharDialog}>
        <DialogContent className="sm:max-w-[800px] overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading font-bold text-center">
              हिंदी अक्षर (Hindi Characters)
            </DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          <div className="my-6">
            <h3 className="text-lg font-medium mb-3">स्वर (Vowels)</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-4 mb-6">
              {hindiAkshar.slice(0, 12).map((akshar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-primary/10 hover:bg-primary/20 rounded-lg p-4 flex items-center justify-center cursor-pointer"
                >
                  <span className="text-2xl font-bold">{akshar}</span>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-lg font-medium mb-3">व्यंजन (Consonants)</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
              {hindiAkshar.slice(12).map((akshar, index) => (
                <motion.div
                  key={index + 12}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (index + 12) * 0.03 }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(79, 70, 229, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  className="bg-primary/5 rounded-lg p-4 flex items-center justify-center cursor-pointer"
                >
                  <span className="text-2xl font-bold">{akshar}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
