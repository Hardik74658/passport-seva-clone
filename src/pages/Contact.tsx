import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  HelpCircle,
  Send 
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import FAQSection from "@/components/FAQSection";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [queryType, setQueryType] = useState("general");
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !message) {
      toast.error("Please fill all required fields");
      return;
    }
    
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your message has been sent successfully. We'll get back to you soon!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setQueryType("general");
      setSubmitting(false);
    }, 1000);
  };

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

  const offices = [
    {
      name: "Delhi Regional Passport Office",
      address: "Bhikaji Cama Place, R.K. Puram, New Delhi - 110066",
      phone: "011-26196419",
      email: "rpo.delhi@mea.gov.in",
      hours: "9:30 AM - 4:30 PM (Mon-Fri)",
      mapUrl: "https://maps.google.com/?q=Delhi+Regional+Passport+Office"
    },
    {
      name: "Mumbai Regional Passport Office",
      address: "Manish Commercial Centre, Andheri Kurla Road, Andheri (E), Mumbai - 400059",
      phone: "022-26500002",
      email: "rpo.mumbai@mea.gov.in",
      hours: "9:30 AM - 4:30 PM (Mon-Fri)",
      mapUrl: "https://maps.google.com/?q=Mumbai+Regional+Passport+Office"
    },
    {
      name: "Bangalore Regional Passport Office",
      address: "80 Feet Road, Koramangala, Bengaluru - 560095",
      phone: "080-22254061",
      email: "rpo.bangalore@mea.gov.in",
      hours: "9:30 AM - 4:30 PM (Mon-Fri)",
      mapUrl: "https://maps.google.com/?q=Bangalore+Regional+Passport+Office"
    },
    {
      name: "Chennai Regional Passport Office",
      address: "Rayala Towers, 3rd Floor, Anna Salai, Chennai - 600002",
      phone: "044-28522500",
      email: "rpo.chennai@mea.gov.in",
      hours: "9:30 AM - 4:30 PM (Mon-Fri)",
      mapUrl: "https://maps.google.com/?q=Chennai+Regional+Passport+Office"
    },
  ];

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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-gray-100">
                Get in touch with us for any queries related to passport services.
                Our team is here to help you.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-6xl">
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 rounded-full p-1 bg-muted mb-8">
                <TabsTrigger value="contact" className="rounded-full data-[state=active]:bg-navy-800 data-[state=active]:text-white transition-all">Contact Us</TabsTrigger>
                <TabsTrigger value="offices" className="rounded-full data-[state=active]:bg-navy-800 data-[state=active]:text-white transition-all">Passport Offices</TabsTrigger>
                <TabsTrigger value="faqs" className="rounded-full data-[state=active]:bg-navy-800 data-[state=active]:text-white transition-all">FAQs</TabsTrigger>
              </TabsList>

              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <TabsContent value="contact" className="space-y-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 space-y-6">
                      <motion.div variants={fadeIn}>
                        <Card className="rounded-xl border overflow-hidden hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="bg-navy-100 p-3 rounded-full">
                                <PhoneCall className="h-6 w-6 text-navy-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                <p className="text-muted-foreground text-sm mb-2">Toll-free helpline</p>
                                <a href="tel:1800-258-1800" className="text-navy-700 hover:underline font-medium">
                                  1800-258-1800
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                      
                      <motion.div variants={fadeIn}>
                        <Card className="rounded-xl border overflow-hidden hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="bg-navy-100 p-3 rounded-full">
                                <Mail className="h-6 w-6 text-navy-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg mb-1">Email</h3>
                                <p className="text-muted-foreground text-sm mb-2">Send us an email</p>
                                <a href="mailto:support@passportseva.gov.in" className="text-navy-700 hover:underline font-medium break-all">
                                  support@passportseva.gov.in
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                      
                      <motion.div variants={fadeIn}>
                        <Card className="rounded-xl border overflow-hidden hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="bg-navy-100 p-3 rounded-full">
                                <Clock className="h-6 w-6 text-navy-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg mb-1">Hours</h3>
                                <p className="text-muted-foreground text-sm mb-2">Customer support hours</p>
                                <p className="text-navy-700 font-medium">
                                  8:00 AM - 8:00 PM (Mon-Sat)
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                    
                    <motion.div variants={fadeIn} className="md:col-span-2">
                      <Card className="rounded-xl overflow-hidden">
                        <CardHeader className="bg-navy-50">
                          <CardTitle className="flex items-center gap-2">
                            <MessageSquare className="h-5 w-5" />
                            Send us a message
                          </CardTitle>
                          <CardDescription>
                            Fill out the form below and we'll get back to you as soon as possible
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="name">Full Name*</Label>
                                <Input
                                  id="name"
                                  placeholder="Enter your full name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  required
                                  className="rounded-md"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">Email Address*</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  placeholder="Enter your email address"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  required
                                  className="rounded-md"
                                />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number*</Label>
                              <Input
                                id="phone"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                className="rounded-md"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label>Query Type*</Label>
                              <RadioGroup
                                value={queryType}
                                onValueChange={setQueryType}
                                className="flex flex-wrap gap-4"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="general" id="general" />
                                  <Label htmlFor="general" className="cursor-pointer">General Inquiry</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="application" id="application" />
                                  <Label htmlFor="application" className="cursor-pointer">Application Help</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="documents" id="documents" />
                                  <Label htmlFor="documents" className="cursor-pointer">Document Questions</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="complaint" id="complaint" />
                                  <Label htmlFor="complaint" className="cursor-pointer">Complaint</Label>
                                </div>
                              </RadioGroup>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="message">Your Message*</Label>
                              <Textarea
                                id="message"
                                placeholder="Type your message here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="min-h-32 rounded-md"
                              />
                            </div>
                            
                            <Button 
                              type="submit" 
                              className="w-full rounded-md bg-navy-700 hover:bg-navy-800 flex items-center gap-2"
                              disabled={submitting}
                            >
                              <Send className="h-4 w-4" />
                              {submitting ? "Sending..." : "Send Message"}
                            </Button>
                          </form>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </TabsContent>

                <TabsContent value="offices" className="space-y-8">
                  <motion.div variants={fadeIn}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {offices.map((office, index) => (
                        <Card key={index} className="rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                          <CardHeader className="bg-navy-50 pb-3">
                            <CardTitle className="text-lg">{office.name}</CardTitle>
                            <CardDescription className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{office.address}</span>
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-4 space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <div className="text-muted-foreground">Phone</div>
                                <a href={`tel:${office.phone}`} className="font-medium hover:text-navy-700">
                                  {office.phone}
                                </a>
                              </div>
                              <div>
                                <div className="text-muted-foreground">Email</div>
                                <a href={`mailto:${office.email}`} className="font-medium hover:text-navy-700">
                                  {office.email}
                                </a>
                              </div>
                              <div>
                                <div className="text-muted-foreground">Working Hours</div>
                                <div className="font-medium">{office.hours}</div>
                              </div>
                              <div className="flex items-end">
                                <a 
                                  href={office.mapUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-navy-700 hover:underline"
                                >
                                  View on Map
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-4 bg-muted rounded-lg flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-navy-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Additional Information</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          For a complete list of all Passport Offices and Passport Seva Kendras across India, 
                          please visit the Ministry of External Affairs website.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="faqs" className="space-y-8">
                  <FAQSection 
                    title="Support FAQs" 
                    description="Answers to common questions about contacting us"
                    showSearch={false}
                    maxItems={3}
                    filterCategories={["Services", "Fees"]}
                  />
                </TabsContent>
              </motion.div>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
