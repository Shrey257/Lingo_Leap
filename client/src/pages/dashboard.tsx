import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { LogOut } from "lucide-react";

interface User {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  language?: string;
}

export default function Dashboard() {
  const [_, navigate] = useLocation();
  const { toast } = useToast();

  const { data: user, isLoading, error } = useQuery<User>({
    queryKey: ["/api/me"],
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/logout");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/me"] });
      toast({
        title: "Logged out successfully",
      });
      navigate("/");
    },
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Authentication error",
        description: "Please log in to access the dashboard",
        variant: "destructive",
      });
      navigate("/");
    }
  }, [error, navigate, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Loading...</h2>
          <p className="text-gray-500">Please wait while we load your dashboard</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <header className="bg-white shadow-sm py-4 fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-8 h-8 mr-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10.5 21l-.5-1c-.6-1.5-1.6-2.8-2.8-3.8-2.2-1.8-3.4-4.5-3.2-7.3.3-4.5 4.1-8.1 8.6-8.1 4.6 0 8.3 3.6 8.6 8.1.2 2.8-1 5.5-3.2 7.3-1.2 1-2.2 2.3-2.8 3.8l-.5 1h-4.2z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="text-xl font-heading font-bold text-primary">LingoLeap</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 mt-8">
        <h1 className="text-3xl font-heading font-bold mb-8">Welcome, {user.firstName || user.username}!</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is your LingoLeap dashboard. In the future, this is where you will see your learning progress, streaks, and recommended lessons.</p>
            <p className="mt-4">You are currently signed in as: <strong>{user.username}</strong> ({user.email})</p>
            
            {user.language && (
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p>You're learning: <strong>{user.language}</strong></p>
              </div>
            )}
            
            <Button className="mt-6">Start Learning</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
