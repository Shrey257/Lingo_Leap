import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Check, X, ChevronRight, Award, Volume2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  rightAnswer: string;
  hint: string;
  character: string;
  audioUrl?: string;
}

interface HindiQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HindiQuiz({ isOpen, onClose }: HindiQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the Hindi word for 'Hello'?",
      options: ["नमस्ते", "धन्यवाद", "अलविदा", "क्षमा करें"],
      rightAnswer: "नमस्ते",
      hint: "It's a common greeting in India",
      character: "न"
    },
    {
      id: 2,
      question: "Which letter is this: 'क'?",
      options: ["Ka", "Ga", "Cha", "Ta"],
      rightAnswer: "Ka",
      hint: "It's the first consonant in Hindi alphabet",
      character: "क"
    },
    {
      id: 3,
      question: "How do you say 'Thank you' in Hindi?",
      options: ["नमस्ते", "धन्यवाद", "अलविदा", "क्षमा करें"],
      rightAnswer: "धन्यवाद",
      hint: "It's an expression of gratitude",
      character: "ध"
    },
    {
      id: 4,
      question: "What does 'अच्छा' mean in English?",
      options: ["Good/Well", "Bad", "Hello", "Goodbye"],
      rightAnswer: "Good/Well",
      hint: "It's a positive affirmation",
      character: "अ"
    },
    {
      id: 5,
      question: "Which Hindi vowel is this: 'ई'?",
      options: ["E (short)", "I (short)", "I (long)", "U (short)"],
      rightAnswer: "I (long)",
      hint: "It's the long version of 'इ'",
      character: "ई"
    }
  ];

  useEffect(() => {
    if (isOpen) {
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setScore(0);
      setShowResult(false);
      setProgress(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setProgress((currentQuestion / questions.length) * 100);
  }, [currentQuestion, questions.length]);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestion].rightAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const playAudio = () => {
    setIsPlaying(true);
    // Simulate audio playing - in a real app, you would play the actual audio file
    setTimeout(() => {
      setIsPlaying(false);
    }, 2000);
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setShowResult(false);
  };

  const getResultMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) {
      return "Excellent! You're on your way to mastering Hindi!";
    } else if (percentage >= 60) {
      return "Good job! Keep practicing to improve your Hindi skills.";
    } else {
      return "Don't worry! Practice makes perfect. Try again to improve your score.";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <span className="text-[#FF5722]">हिंदी</span> Hindi Quiz
          </DialogTitle>
          <DialogDescription className="text-center">
            Test your knowledge of Hindi language basics
          </DialogDescription>
        </DialogHeader>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>Score: {score}/{questions.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-16 h-16 bg-[#FF5722]/10 rounded-full flex items-center justify-center text-[#FF5722] text-3xl font-bold"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {questions[currentQuestion].character}
                </motion.div>
                <div>
                  <h3 className="text-lg font-medium">{questions[currentQuestion].question}</h3>
                  {questions[currentQuestion].audioUrl && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-xs flex items-center mt-1 text-primary"
                      onClick={playAudio}
                      disabled={isPlaying}
                    >
                      <Volume2 className="h-3 w-3 mr-1" />
                      {isPlaying ? "Playing..." : "Listen to pronunciation"}
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      selectedAnswer === option 
                        ? isCorrect 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-red-500 bg-red-50' 
                        : 'border-gray-200 hover:border-primary/50 hover:bg-primary/5'
                    } ${selectedAnswer && selectedAnswer !== option ? 'opacity-60' : ''}`}
                    disabled={selectedAnswer !== null}
                    whileHover={{ scale: selectedAnswer ? 1 : 1.02 }}
                    whileTap={{ scale: selectedAnswer ? 1 : 0.98 }}
                  >
                    <div className="flex justify-between items-center">
                      <span>{option}</span>
                      {selectedAnswer === option && (
                        isCorrect 
                          ? <Check className="h-5 w-5 text-green-500" /> 
                          : <X className="h-5 w-5 text-red-500" />
                      )}
                      {selectedAnswer && selectedAnswer !== option && option === questions[currentQuestion].rightAnswer && (
                        <Check className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
              
              {selectedAnswer && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className={`p-3 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}
                >
                  <p className="text-sm font-medium mb-1">{isCorrect ? '✅ Correct!' : '❌ Incorrect!'}</p>
                  <p className="text-xs">
                    {isCorrect 
                      ? "Great job! Let's move to the next question." 
                      : `The correct answer is "${questions[currentQuestion].rightAnswer}". ${questions[currentQuestion].hint}`
                    }
                  </p>
                </motion.div>
              )}
              
              {selectedAnswer && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-end"
                >
                  <Button 
                    onClick={nextQuestion}
                    className="bg-primary text-white"
                  >
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="text-center space-y-6 py-6"
            >
              <div className="relative mx-auto w-32 h-32">
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/20"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="h-16 w-16 text-primary" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
                <p className="text-gray-600 mb-4">{getResultMessage()}</p>
                <div className="bg-primary/10 p-4 rounded-lg inline-block">
                  <p className="text-3xl font-bold text-primary">{score}/{questions.length}</p>
                  <p className="text-sm text-gray-600">Your Score</p>
                </div>
              </div>
              
              <div className="flex justify-center space-x-3">
                <Button 
                  variant="outline" 
                  onClick={restartQuiz}
                >
                  Try Again
                </Button>
                <Button 
                  onClick={onClose}
                  className="bg-primary text-white"
                >
                  Finish
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}