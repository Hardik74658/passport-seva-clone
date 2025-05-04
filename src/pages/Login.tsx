import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Fingerprint, Key, Mail } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login logic - would be replaced with actual API calls
    setTimeout(() => {
      // Simulating successful login
      localStorage.setItem("isLoggedIn", "true");
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="bg-navy-50 text-center pb-6">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <Fingerprint className="h-8 w-8 text-navy-700" />
                </div>
                <CardTitle className="text-navy-900 text-2xl">Welcome Back</CardTitle>
                <CardDescription>
                  Sign in to your Passport Seva account
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email address" 
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">
                        Password
                      </Label>
                      <Link to="/forgot-password" className="text-xs text-navy-700 hover:text-navy-800">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="Your password" 
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="rememberMe" 
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked === true)}
                    />
                    <label
                      htmlFor="rememberMe"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me for 30 days
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-navy-700 hover:bg-navy-800" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                        <span>Signing in...</span>
                      </div>
                    ) : (
                      <span className="flex items-center justify-center">
                        Sign In
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
                
                <div className="mt-6 relative flex items-center justify-center">
                  <Separator className="absolute w-full" />
                  <span className="relative bg-white px-2 text-xs text-gray-500">OR CONTINUE WITH</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Button variant="outline" className="w-full">
                    <img src="/images/google.svg" alt="Google" className="h-4 w-4 mr-2" />
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <img src="/images/aadhaar.svg" alt="Aadhaar" className="h-4 w-4 mr-2" />
                    Aadhaar
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t flex justify-center p-4">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-navy-700 hover:text-navy-800 font-medium">
                    Create account
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
