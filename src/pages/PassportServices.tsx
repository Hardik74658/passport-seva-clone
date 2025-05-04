
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, FileText, Clock, ArrowRight, Calculator, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const PassportServices = () => {
  const [activeTab, setActiveTab] = useState("new");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-12">
          <div className="container">
            <motion.div 
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Passport Services</h1>
              <p className="text-lg text-gray-100 mb-6">Apply for a new passport, renew your existing passport, or check the status of your application.</p>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full bg-saffron-500 hover:bg-saffron-600 text-white">Get Started</Button>
                <Button variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-white/10">Learn More</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Tabs */}
        <section className="py-12 bg-white">
          <div className="container">
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 rounded-full p-1 bg-muted mb-8">
                <TabsTrigger value="new" className="rounded-full data-[state=active]:bg-navy-800 data-[state=active]:text-white transition-all">New Passport</TabsTrigger>
                <TabsTrigger value="renew" className="rounded-full data-[state=active]:bg-navy-800 data-[state=active]:text-white transition-all">Renew Passport</TabsTrigger>
                <TabsTrigger value="tatkaal" className="rounded-full data-[state=active]:bg-navy-800 data-[state=active]:text-white transition-all">Tatkaal Service</TabsTrigger>
                <TabsTrigger value="minor" className="rounded-full data-[state=active]:bg-navy-800 data-[state=active]:text-white transition-all">Minor Passport</TabsTrigger>
              </TabsList>

              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <TabsContent value="new" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={fadeIn}>
                      <Card className="h-full hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
                        <CardHeader className="bg-navy-50 pb-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-navy-100 p-3 rounded-full">
                              <Shield className="h-6 w-6 text-navy-600" />
                            </div>
                            <div>
                              <CardTitle>Fresh Passport Application</CardTitle>
                              <CardDescription>For first-time applicants</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-india-600 flex-shrink-0 mt-0.5" />
                              <span>Valid for 10 years from the date of issue</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-india-600 flex-shrink-0 mt-0.5" />
                              <span>36 pages standard booklet</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-india-600 flex-shrink-0 mt-0.5" />
                              <span>Normal processing time: 15-30 working days</span>
                            </li>
                          </ul>
                          <Separator />
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-muted-foreground">Starting from</p>
                              <p className="text-lg font-semibold">₹1,500</p>
                            </div>
                            <Button className="rounded-full bg-navy-700 hover:bg-navy-800 text-white">Apply Now</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <Card className="h-full hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
                        <CardHeader className="bg-muted pb-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-navy-100 p-3 rounded-full">
                              <FileText className="h-6 w-6 text-navy-600" />
                            </div>
                            <div>
                              <CardTitle>Required Documents</CardTitle>
                              <CardDescription>Documents needed for application</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">1</span>
                              <span>Proof of Identity (Aadhaar Card/Voter ID/PAN)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">2</span>
                              <span>Proof of Address (Utility Bills/Bank Statement)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">3</span>
                              <span>Proof of Date of Birth (Birth Certificate)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">4</span>
                              <span>Recent Passport Size Photographs</span>
                            </li>
                          </ul>
                          <Separator />
                          <div className="flex justify-end">
                            <Button variant="ghost" className="flex items-center gap-1 text-navy-700 hover:text-navy-800 hover:bg-navy-50">
                              See full list <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  <motion.div variants={fadeIn}>
                    <Card className="rounded-xl overflow-hidden">
                      <CardHeader className="bg-muted">
                        <CardTitle className="flex items-center gap-2">
                          <Clock className="h-5 w-5" />
                          Application Process
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="p-6">
                          <ol className="relative border-l border-gray-200">
                            <li className="mb-10 ml-6">
                              <span className="absolute flex items-center justify-center w-8 h-8 bg-navy-100 rounded-full -left-4 ring-4 ring-white">
                                <span className="text-navy-800 font-semibold">1</span>
                              </span>
                              <h3 className="font-semibold text-lg">Register Online</h3>
                              <p className="text-sm text-muted-foreground">Create an account and fill in your details</p>
                            </li>
                            <li className="mb-10 ml-6">
                              <span className="absolute flex items-center justify-center w-8 h-8 bg-navy-100 rounded-full -left-4 ring-4 ring-white">
                                <span className="text-navy-800 font-semibold">2</span>
                              </span>
                              <h3 className="font-semibold text-lg">Schedule Appointment</h3>
                              <p className="text-sm text-muted-foreground">Choose a convenient date and time</p>
                            </li>
                            <li className="mb-10 ml-6">
                              <span className="absolute flex items-center justify-center w-8 h-8 bg-navy-100 rounded-full -left-4 ring-4 ring-white">
                                <span className="text-navy-800 font-semibold">3</span>
                              </span>
                              <h3 className="font-semibold text-lg">Visit Passport Office</h3>
                              <p className="text-sm text-muted-foreground">Bring required documents and complete verification</p>
                            </li>
                            <li className="ml-6">
                              <span className="absolute flex items-center justify-center w-8 h-8 bg-navy-100 rounded-full -left-4 ring-4 ring-white">
                                <span className="text-navy-800 font-semibold">4</span>
                              </span>
                              <h3 className="font-semibold text-lg">Receive Passport</h3>
                              <p className="text-sm text-muted-foreground">Your passport will be delivered to your address</p>
                            </li>
                          </ol>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Card className="rounded-xl overflow-hidden">
                      <CardHeader className="bg-muted">
                        <CardTitle className="flex items-center gap-2">
                          <Calculator className="h-5 w-5" />
                          Fee Calculator
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-3 gap-4">
                          <Card className="border-dashed hover:bg-muted/50 transition-colors">
                            <CardContent className="p-4 text-center">
                              <h4 className="font-semibold mb-2">36 Pages</h4>
                              <p className="text-2xl font-bold text-navy-700">₹1,500</p>
                              <p className="text-xs text-muted-foreground mt-1">Standard processing</p>
                            </CardContent>
                          </Card>
                          <Card className="border-dashed hover:bg-muted/50 transition-colors">
                            <CardContent className="p-4 text-center">
                              <h4 className="font-semibold mb-2">60 Pages</h4>
                              <p className="text-2xl font-bold text-navy-700">₹2,000</p>
                              <p className="text-xs text-muted-foreground mt-1">Standard processing</p>
                            </CardContent>
                          </Card>
                          <Card className="border-dashed hover:bg-muted/50 transition-colors">
                            <CardContent className="p-4 text-center">
                              <h4 className="font-semibold mb-2">Tatkaal Service</h4>
                              <p className="text-2xl font-bold text-navy-700">+₹1,500</p>
                              <p className="text-xs text-muted-foreground mt-1">Additional to base fee</p>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="flex justify-center mt-6">
                          <Button variant="outline" className="rounded-full">View Detailed Fee Structure</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="renew" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={fadeIn}>
                      <Card className="h-full hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
                        <CardHeader className="bg-navy-50 pb-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-navy-100 p-3 rounded-full">
                              <FileText className="h-6 w-6 text-navy-600" />
                            </div>
                            <div>
                              <CardTitle>Passport Renewal</CardTitle>
                              <CardDescription>For existing passport holders</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-india-600 flex-shrink-0 mt-0.5" />
                              <span>Simplified process for existing passport holders</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-india-600 flex-shrink-0 mt-0.5" />
                              <span>Expedited processing available</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-india-600 flex-shrink-0 mt-0.5" />
                              <span>Option to change details during renewal</span>
                            </li>
                          </ul>
                          <Separator />
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-muted-foreground">Starting from</p>
                              <p className="text-lg font-semibold">₹1,500</p>
                            </div>
                            <Button className="rounded-full bg-navy-700 hover:bg-navy-800 text-white">Apply Now</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    
                    <motion.div variants={fadeIn}>
                      <Card className="h-full hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
                        <CardHeader className="bg-muted pb-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-navy-100 p-3 rounded-full">
                              <FileText className="h-6 w-6 text-navy-600" />
                            </div>
                            <div>
                              <CardTitle>Required Documents</CardTitle>
                              <CardDescription>Documents needed for renewal</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">1</span>
                              <span>Original old passport</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">2</span>
                              <span>Self-attested copies of first and last page</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">3</span>
                              <span>Proof of Address (if changed)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">4</span>
                              <span>Recent Passport Size Photographs</span>
                            </li>
                          </ul>
                          <Separator />
                          <div className="flex justify-end">
                            <Button variant="ghost" className="flex items-center gap-1 text-navy-700 hover:text-navy-800 hover:bg-navy-50">
                              See full list <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </TabsContent>
                
                <TabsContent value="tatkaal" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={fadeIn}>
                      <Card className="h-full hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
                        <CardHeader className="bg-navy-50 pb-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-saffron-100 p-3 rounded-full">
                              <Clock className="h-6 w-6 text-saffron-600" />
                            </div>
                            <div>
                              <CardTitle>Tatkaal Passport Service</CardTitle>
                              <CardDescription>For urgent passport requirements</CardDescription>
                            </div>
                          </div>
                          <Badge className="mt-2 bg-saffron-500 text-white">Expedited</Badge>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-india-600 flex-shrink-0 mt-0.5" />
                              <span>Priority processing in 1-3 working days</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-india-600 flex-shrink-0 mt-0.5" />
                              <span>Available for both new and renewal applications</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-india-600 flex-shrink-0 mt-0.5" />
                              <span>Additional verification requirements</span>
                            </li>
                          </ul>
                          <Separator />
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-muted-foreground">Starting from</p>
                              <p className="text-lg font-semibold">₹3,000</p>
                            </div>
                            <Button className="rounded-full bg-saffron-500 hover:bg-saffron-600 text-white">Apply Now</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    
                    <motion.div variants={fadeIn}>
                      <Card className="h-full hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
                        <CardHeader className="bg-muted pb-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-navy-100 p-3 rounded-full">
                              <FileText className="h-6 w-6 text-navy-600" />
                            </div>
                            <div>
                              <CardTitle>Additional Requirements</CardTitle>
                              <CardDescription>For Tatkaal service</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">1</span>
                              <span>Standard documents as per regular application</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">2</span>
                              <span>Annexure F (Declaration of urgency)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">3</span>
                              <span>Proof of urgency (travel tickets, medical emergency, etc.)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">4</span>
                              <span>Verification certificate from designated officials</span>
                            </li>
                          </ul>
                          <Separator />
                          <div className="flex justify-end">
                            <Button variant="ghost" className="flex items-center gap-1 text-navy-700 hover:text-navy-800 hover:bg-navy-50">
                              See full list <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </TabsContent>
                
                <TabsContent value="minor" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={fadeIn}>
                      <Card className="h-full hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
                        <CardHeader className="bg-navy-50 pb-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-green-india-100 p-3 rounded-full">
                              <Shield className="h-6 w-6 text-green-india-600" />
                            </div>
                            <div>
                              <CardTitle>Minor Passport</CardTitle>
                              <CardDescription>For children below 18 years</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-india-600 flex-shrink-0 mt-0.5" />
                              <span>Valid for 5 years or until the child turns 18</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-india-600 flex-shrink-0 mt-0.5" />
                              <span>Parental consent required</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-india-600 flex-shrink-0 mt-0.5" />
                              <span>Special provisions for guardian applicants</span>
                            </li>
                          </ul>
                          <Separator />
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-muted-foreground">Starting from</p>
                              <p className="text-lg font-semibold">₹1,000</p>
                            </div>
                            <Button className="rounded-full bg-green-india-600 hover:bg-green-india-700 text-white">Apply Now</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    
                    <motion.div variants={fadeIn}>
                      <Card className="h-full hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
                        <CardHeader className="bg-muted pb-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-navy-100 p-3 rounded-full">
                              <FileText className="h-6 w-6 text-navy-600" />
                            </div>
                            <div>
                              <CardTitle>Required Documents</CardTitle>
                              <CardDescription>For minor passport application</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">1</span>
                              <span>Birth Certificate of the child</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">2</span>
                              <span>Parent's passport/ID proof</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">3</span>
                              <span>Consent letter from both parents</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-5 w-5 rounded-full bg-navy-100 flex items-center justify-center text-xs font-semibold">4</span>
                              <span>Recent photographs of the child</span>
                            </li>
                          </ul>
                          <Separator />
                          <div className="flex justify-end">
                            <Button variant="ghost" className="flex items-center gap-1 text-navy-700 hover:text-navy-800 hover:bg-navy-50">
                              See full list <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </TabsContent>
              </motion.div>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-navy-50">
          <div className="container">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get your passport?</h2>
              <p className="text-lg text-muted-foreground mb-6">Start your application today and travel the world with ease.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="rounded-full bg-saffron-500 hover:bg-saffron-600 text-white px-8">Apply Now</Button>
                <Button variant="outline" className="rounded-full px-8">Track Application</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PassportServices;
