import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LanguagePills } from "@/components/landing/LanguagePills";
import { Features } from "@/components/landing/Features";
import { SpeechDemo } from "@/components/landing/SpeechDemo";
import { VideoDemo } from "@/components/landing/VideoDemo";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { AuthDialog } from "@/components/auth/AuthDialog";

export default function LandingPage() {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authView, setAuthView] = useState<"login" | "register">("login");

  const openAuthDialog = (view: "login" | "register") => {
    setAuthView(view);
    setAuthDialogOpen(true);
  };

  const closeAuthDialog = () => {
    setAuthDialogOpen(false);
  };

  return (
    <div className="relative overflow-x-hidden text-text-dark">
      {/* Background blobs for decoration */}
      <div className="blob fixed bg-primary/20 w-[500px] h-[500px] top-[-250px] right-[-150px] z-[-1] opacity-70 rounded-full blur-[50px]"></div>
      <div className="blob fixed bg-[#10B981]/20 w-[500px] h-[500px] bottom-[200px] left-[-250px] z-[-1] opacity-70 rounded-full blur-[50px]"></div>
      <div className="blob fixed bg-[#F59E0B]/20 w-[400px] h-[400px] bottom-[-200px] right-[-100px] z-[-1] opacity-70 rounded-full blur-[50px]"></div>
      
      <Navbar openAuthDialog={openAuthDialog} />
      <Hero openAuthDialog={openAuthDialog} />
      <LanguagePills />
      <Features />
      <SpeechDemo />
      <VideoDemo />
      <Testimonials />
      <FAQ />
      <CTA openAuthDialog={openAuthDialog} />
      <Footer />
      
      <AuthDialog 
        isOpen={authDialogOpen} 
        onClose={closeAuthDialog}
        defaultView={authView}
      />
    </div>
  );
}
