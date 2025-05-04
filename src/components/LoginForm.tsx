
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email.trim() || !password.trim()) {
      toast.error("Please enter both email and password");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful");
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          placeholder="Enter your email" 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <a 
            href="#" 
            className="text-xs text-navy-600 hover:text-navy-900"
            onClick={(e) => {
              e.preventDefault();
              toast.info("Reset password functionality would be implemented here");
            }}
          >
            Forgot Password?
          </a>
        </div>
        <Input 
          id="password" 
          type="password" 
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="remember" />
        <label
          htmlFor="remember"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember me
        </label>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-navy-700 hover:bg-navy-800" 
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
      
      <p className="text-sm text-center text-muted-foreground">
        Don't have an account?{" "}
        <a 
          href="#" 
          className="text-navy-600 hover:text-navy-900 font-medium"
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          Register Now
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
