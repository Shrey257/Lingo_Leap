import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { motion, AnimatePresence } from "framer-motion";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
  defaultView?: "login" | "register";
}

export function AuthDialog({ isOpen, onClose, defaultView = "login" }: AuthDialogProps) {
  const [view, setView] = useState<"login" | "register">(defaultView);

  const handleViewSwitch = (newView: "login" | "register") => {
    setView(newView);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) onClose();
    }}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10" 
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
        
        {/* Decoration - Top right corner blob */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-bl-full -z-10"></div>
        {/* Decoration - Bottom left corner blob */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#10B981]/10 rounded-tr-full -z-10"></div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-8"
          >
            {view === "login" ? (
              <LoginForm onSwitchToRegister={() => handleViewSwitch("register")} />
            ) : (
              <RegisterForm onSwitchToLogin={() => handleViewSwitch("login")} />
            )}
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
