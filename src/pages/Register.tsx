import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Info, Mail, Phone, Shield, User } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock registration logic - would be replaced with actual API calls
    setTimeout(() => {
      setIsLoading(false);
      navigate("/verification"); // Or wherever you want to direct users after registration
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-navy-700 to-navy-800 text-white text-center pb-6">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <Shield className="h-8 w-8 text-navy-700" />
                </div>
                <CardTitle className="text-white text-2xl">Create Account</CardTitle>
                <CardDescription className="text-gray-100">
                  Join Passport Seva for seamless passport services
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        id="fullName" 
                        placeholder="Enter your full name"
                        className="pl-10"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email address"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        id="mobile" 
                        type="tel" 
                        placeholder="Enter your 10-digit mobile number"
                        className="pl-10"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input 
                        id="confirmPassword" 
                        type="password" 
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 py-2">
                    <Checkbox 
                      id="terms" 
                      checked={agreed}
                      onCheckedChange={(checked) => setAgreed(checked === true)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the <Link to="/terms" className="text-navy-700 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-navy-700 hover:underline">Privacy Policy</Link>
                      </label>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-700">
                      Your mobile number will be verified through OTP. Please ensure it's correct and accessible.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-navy-700 hover:bg-navy-800"
                    disabled={isLoading || !agreed}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      <span className="flex items-center justify-center">
                        Create Account
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
                
                <div className="mt-6 relative flex items-center justify-center">
                  <Separator className="absolute w-full" />
                  <span className="relative bg-white px-2 text-xs text-gray-500">OR REGISTER WITH</span>
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
                  Already have an account?{" "}
                  <Link to="/login" className="text-navy-700 hover:text-navy-800 font-medium">
                    Sign in
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

export default Register;
