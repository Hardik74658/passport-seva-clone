import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calculator, Check, HelpCircle, Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FeeCalculator = () => {
  const [passportType, setPassportType] = useState("regular");
  const [applicationType, setApplicationType] = useState("new");
  const [bookletType, setBookletType] = useState("36");
  const [ageGroup, setAgeGroup] = useState("adult");
  const [serviceType, setServiceType] = useState("normal");
  const [calculatedFee, setCalculatedFee] = useState(null);

  const calculateFee = () => {
    let baseFee = 0;
    
    // Base fee calculation
    if (bookletType === "36") {
      baseFee = 1500;
    } else {
      baseFee = 2000;
    }
    
    // Age adjustments
    if (ageGroup === "minor") {
      baseFee = baseFee * 0.8;
    } else if (ageGroup === "senior") {
      baseFee = baseFee * 0.9;
    }
    
    // Service type adjustments
    if (serviceType === "tatkaal") {
      baseFee += 1500;
    }
    
    // Application type adjustments
    if (applicationType === "reissue") {
      baseFee = baseFee * 0.9;
    }
    
    const gst = baseFee * 0.18;
    const totalFee = baseFee + gst;
    
    setCalculatedFee({
      baseFee: Math.round(baseFee),
      gst: Math.round(gst),
      totalFee: Math.round(totalFee)
    });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-700 to-navy-900 text-white py-16">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Passport Fee Calculator</h1>
              <p className="text-lg max-w-2xl mx-auto text-gray-100">
                Calculate the exact fee for your passport application based on your requirements
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section className="py-12">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="shadow-md border-gray-200">
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium text-lg text-navy-900">Passport Type</h3>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-80">Different passport types have different fees</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <RadioGroup 
                          defaultValue="regular" 
                          className="grid grid-cols-2 gap-2"
                          onValueChange={(value) => setPassportType(value)}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="regular" id="regular" />
                            <Label htmlFor="regular" className="cursor-pointer">Regular Passport</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="official" id="official" />
                            <Label htmlFor="official" className="cursor-pointer">Official/Diplomatic</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium text-lg text-navy-900">Application Type</h3>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-80">Select whether you're applying for a new passport or reissuing an existing one</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <RadioGroup 
                          defaultValue="new" 
                          className="grid grid-cols-2 gap-2"
                          onValueChange={(value) => setApplicationType(value)}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="new" id="new" />
                            <Label htmlFor="new" className="cursor-pointer">New Passport</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="reissue" id="reissue" />
                            <Label htmlFor="reissue" className="cursor-pointer">Reissue/Renewal</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium text-lg text-navy-900">Booklet Pages</h3>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-80">Choose between a standard 36-page or a jumbo 60-page booklet</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <RadioGroup 
                          defaultValue="36" 
                          className="grid grid-cols-2 gap-2"
                          onValueChange={(value) => setBookletType(value)}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="36" id="36pages" />
                            <Label htmlFor="36pages" className="cursor-pointer">36 Pages (Standard)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="60" id="60pages" />
                            <Label htmlFor="60pages" className="cursor-pointer">60 Pages (Jumbo)</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium text-lg text-navy-900">Age Group</h3>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-80">Minor: Below 18 years, Adult: 18-60 years, Senior Citizen: Above 60 years</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Select defaultValue="adult" onValueChange={(value) => setAgeGroup(value)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Age Group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minor">Minor (Below 18 years)</SelectItem>
                            <SelectItem value="adult">Adult (18-60 years)</SelectItem>
                            <SelectItem value="senior">Senior Citizen (Above 60 years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium text-lg text-navy-900">Service Type</h3>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-80">Tatkaal offers faster processing at an additional cost</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <RadioGroup 
                          defaultValue="normal" 
                          className="grid grid-cols-2 gap-2"
                          onValueChange={(value) => setServiceType(value)}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="normal" id="normal" />
                            <Label htmlFor="normal" className="cursor-pointer">Normal Service</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="tatkaal" id="tatkaal" />
                            <Label htmlFor="tatkaal" className="cursor-pointer">Tatkaal Service</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <Button 
                        className="w-full bg-navy-700 hover:bg-navy-800"
                        onClick={calculateFee}
                      >
                        <Calculator className="mr-2 h-4 w-4" /> Calculate Fee
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className={`h-full ${calculatedFee ? 'bg-gradient-to-br from-blue-50 to-navy-50' : 'bg-gray-50'} border-gray-200`}>
                  <CardContent className="pt-6 flex flex-col h-full justify-center">
                    {calculatedFee ? (
                      <div className="text-center">
                        <div className="bg-white w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm">
                          <Check className="h-10 w-10 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-navy-900 mb-2">Fee Breakdown</h3>
                        
                        <div className="space-y-4 mt-6 max-w-xs mx-auto">
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-gray-600">Base Fee:</span>
                            <span className="font-semibold">₹{calculatedFee.baseFee}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-gray-600">GST (18%):</span>
                            <span className="font-semibold">₹{calculatedFee.gst}</span>
                          </div>
                          <div className="flex justify-between items-center py-4">
                            <span className="text-lg font-bold text-navy-900">Total Fee:</span>
                            <span className="text-lg font-bold text-navy-900">₹{calculatedFee.totalFee}</span>
                          </div>
                        </div>
                        
                        <div className="mt-8 flex flex-col gap-3">
                          <Button variant="outline" className="border-navy-600 text-navy-600 hover:bg-navy-50">
                            Download Fee Receipt
                          </Button>
                          <Button className="bg-saffron-500 hover:bg-saffron-600">
                            Proceed to Apply
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-6">
                        <div className="mb-6">
                          <Calculator className="h-16 w-16 text-gray-400 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-3">
                          Calculate Your Passport Fee
                        </h3>
                        <p className="text-gray-500 mb-8">
                          Select your options and click the calculate button to see the exact fee for your passport application
                        </p>
                        <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3 text-left">
                          <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-blue-800">Payment Methods</h4>
                            <p className="text-sm text-blue-700 mt-1">
                              We accept payment by credit/debit card, UPI, net banking and wallet payments.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeeCalculator;
