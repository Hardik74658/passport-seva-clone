import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { 
  Search, 
  Headphones, 
  MessageSquare, 
  Clock, 
  Mail, 
  Phone, 
  PhoneCall, 
  Video, 
  ChevronRight, 
  FileText,
  BookOpen,
  HelpCircle,
  Check,
  Send
} from "lucide-react";
import FAQSection from "@/components/FAQSection";

const helpCategories = [
  {
    id: "general",
    title: "General",
    icon: HelpCircle,
    topics: [
      "Creating an account",
      "Login issues",
      "Password reset",
      "Account verification",
      "Profile management"
    ]
  },
  {
    id: "application",
    title: "Application Process",
    icon: FileText,
    topics: [
      "Filling application form",
      "Required documents",
      "Payment issues",
      "Appointment booking",
      "Application submission"
    ]
  },
  {
    id: "tracking",
    title: "Tracking & Status",
    icon: Search,
    topics: [
      "Track application status",
      "Status meaning",
      "Delays in processing",
      "Police verification",
      "Passport delivery"
    ]
  },
  {
    id: "documents",
    title: "Documents",
    icon: BookOpen,
    topics: [
      "Address proof",
      "Identity proof",
      "Date of birth proof",
      "Document uploads",
      "Document verification"
    ]
  }
];

const popularQuestions = [
  "How do I apply for a new passport?",
  "What documents are required for passport application?",
  "How can I track my passport application status?",
  "What is the fee for passport application?",
  "How long does it take to get a passport?",
  "What is police verification for passports?",
  "Can I expedite my passport application?"
];

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactQuery, setContactQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setContactName("");
      setContactEmail("");
      setContactQuery("");
    }, 1000);
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
        <section className="bg-gradient-to-r from-navy-700 to-navy-900 text-white py-16 md:py-24">
          <div className="container">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">How can we help you?</h1>
              <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
                Search our knowledge base or browse through frequently asked questions
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search for answers, guides, and topics..." 
                  className="pl-12 h-14 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-300 focus-visible:ring-white/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="absolute right-1 top-1 rounded-full h-12 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white border-none">
                  Search
                </Button>
              </div>
              
              <div className="mt-6">
                <p className="text-sm mb-3">Popular searches:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularQuestions.slice(0, 5).map((question, index) => (
                    <button 
                      key={index}
                      className="bg-white/10 hover:bg-white/20 text-sm py-1 px-3 rounded-full transition-colors"
                      onClick={() => setSearchQuery(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Help Categories */}
        <section className="py-12 bg-white">
          <div className="container">
            <motion.h2 
              className="text-2xl font-bold text-center mb-8 text-navy-900"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Browse by Category
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {helpCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-md transition-shadow overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="mb-6 flex justify-center">
                      <div className="bg-navy-50 p-3 rounded-full">
                        <category.icon className="h-8 w-8 text-navy-600" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl mb-3 text-center text-navy-900">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 mr-2 text-green-600" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 text-center">
                      <Button variant="outline" className="text-navy-700 border-navy-200 hover:bg-navy-50 group-hover:border-navy-300">
                        View Articles
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Support Options */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <motion.div 
              className="text-center mb-12"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-3 text-navy-900">Contact Support</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you with any questions or issues.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Tabs defaultValue="contact" className="max-w-4xl mx-auto">
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="contact" className="py-3">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Us
                  </TabsTrigger>
                  <TabsTrigger value="call" className="py-3">
                    <PhoneCall className="h-4 w-4 mr-2" />
                    Call Support
                  </TabsTrigger>
                  <TabsTrigger value="visit" className="py-3">
                    <Headphones className="h-4 w-4 mr-2" />
                    Support Hours
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="contact" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      {submitted ? (
                        <div className="text-center py-6">
                          <div className="bg-green-100 rounded-full p-3 inline-flex mb-4">
                            <Check className="h-8 w-8 text-green-600" />
                          </div>
                          <h3 className="text-xl font-medium text-navy-900 mb-2">Thank You!</h3>
                          <p className="text-gray-600 max-w-md mx-auto mb-6">
                            Your message has been submitted successfully. Our support team will get back to you within 24-48 hours.
                          </p>
                          <Button 
                            onClick={() => setSubmitted(false)}
                            className="bg-navy-700 hover:bg-navy-800"
                          >
                            Submit Another Query
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmitQuery} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">
                                Full Name <span className="text-red-500">*</span>
                              </label>
                              <Input 
                                required
                                placeholder="Enter your name"
                                value={contactName}
                                onChange={(e) => setContactName(e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">
                                Email Address <span className="text-red-500">*</span>
                              </label>
                              <Input 
                                required
                                type="email"
                                placeholder="Enter your email"
                                value={contactEmail}
                                onChange={(e) => setContactEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              How can we help you? <span className="text-red-500">*</span>
                            </label>
                            <textarea 
                              className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Describe your issue or question in detail..."
                              required
                              value={contactQuery}
                              onChange={(e) => setContactQuery(e.target.value)}
                            />
                          </div>
                          
                          <div className="flex justify-end">
                            <Button className="bg-navy-700 hover:bg-navy-800">
                              <Send className="h-4 w-4 mr-2" />
                              Submit Query
                            </Button>
                          </div>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="call" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-navy-50 p-3 rounded-full inline-flex mb-4">
                            <Phone className="h-6 w-6 text-navy-600" />
                          </div>
                          <h3 className="text-xl font-medium text-navy-900 mb-2">Passport Seva Helpline</h3>
                          <p className="text-gray-600 mb-4">
                            Our dedicated support team is ready to assist you with any passport-related queries.
                          </p>
                          <div className="space-y-3">
                            <div className="flex">
                              <div className="w-24 text-sm text-gray-500">Toll Free</div>
                              <div className="font-medium">1800-258-1800</div>
                            </div>
                            <div className="flex">
                              <div className="w-24 text-sm text-gray-500">Direct Line</div>
                              <div className="font-medium">011-40863592</div>
                            </div>
                            <div className="flex">
                              <div className="w-24 text-sm text-gray-500">SMS</div>
                              <div className="font-medium">9704100100</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-6">
                          <div className="bg-navy-50 p-3 rounded-full inline-flex mb-4">
                            <Clock className="h-6 w-6 text-navy-600" />
                          </div>
                          <h3 className="text-xl font-medium text-navy-900 mb-2">Support Hours</h3>
                          <div className="space-y-3">
                            <div className="flex">
                              <div className="w-24 text-sm text-gray-500">Weekdays</div>
                              <div className="font-medium">9:00 AM - 5:30 PM</div>
                            </div>
                            <div className="flex">
                              <div className="w-24 text-sm text-gray-500">Saturday</div>
                              <div className="font-medium">9:00 AM - 1:00 PM</div>
                            </div>
                            <div className="flex">
                              <div className="w-24 text-sm text-gray-500">Sunday</div>
                              <div className="font-medium">Closed</div>
                            </div>
                            <div className="flex">
                              <div className="w-24 text-sm text-gray-500">Holidays</div>
                              <div className="font-medium">Closed</div>
                            </div>
                          </div>
                          
                          <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-md">
                            <p className="text-sm text-amber-800">
                              Due to high call volume, you may experience longer wait times during peak hours (11 AM - 2 PM).
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="visit" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-medium text-navy-900 mb-4">Support Channels</h3>
                          <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                              <div className="bg-navy-50 p-2 rounded-full">
                                <Phone className="h-5 w-5 text-navy-600" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-1">Phone Support</h4>
                                <p className="text-sm text-gray-600 mb-1">
                                  Speak directly with our support team for urgent queries.
                                </p>
                                <div className="text-sm text-navy-700 font-medium">1800-258-1800</div>
                              </div>
                            </div>
                            
                            <div className="flex gap-4 items-start">
                              <div className="bg-navy-50 p-2 rounded-full">
                                <Mail className="h-5 w-5 text-navy-600" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-1">Email Support</h4>
                                <p className="text-sm text-gray-600 mb-1">
                                  Send us an email for non-urgent issues or complex questions.
                                </p>
                                <div className="text-sm text-navy-700 font-medium">support@passportindia.gov.in</div>
                              </div>
                            </div>
                            
                            <div className="flex gap-4 items-start">
                              <div className="bg-navy-50 p-2 rounded-full">
                                <MessageSquare className="h-5 w-5 text-navy-600" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-1">Live Chat</h4>
                                <p className="text-sm text-gray-600 mb-1">
                                  Chat with our virtual assistant for quick answers to common questions.
                                </p>
                                <Button size="sm" className="mt-1 text-xs h-8 bg-navy-700 hover:bg-navy-800">
                                  Start Chat
                                </Button>
                              </div>
                            </div>
                            
                            <div className="flex gap-4 items-start">
                              <div className="bg-navy-50 p-2 rounded-full">
                                <Video className="h-5 w-5 text-navy-600" />
                              </div>
                              <div>
                                <h4 className="font-medium mb-1">Video Tutorials</h4>
                                <p className="text-sm text-gray-600 mb-1">
                                  Watch step-by-step guides for common passport procedures.
                                </p>
                                <Link to="/tutorials">
                                  <Button size="sm" variant="outline" className="mt-1 text-xs h-8">
                                    View Tutorials
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-6">
                          <h3 className="text-xl font-medium text-navy-900 mb-4">Support Hours</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-navy-800 mb-2">Phone Support Hours</h4>
                              <table className="w-full text-sm">
                                <tbody>
                                  <tr className="border-b">
                                    <td className="py-2 text-gray-600">Monday - Friday</td>
                                    <td className="py-2 font-medium">9:00 AM - 5:30 PM</td>
                                  </tr>
                                  <tr className="border-b">
                                    <td className="py-2 text-gray-600">Saturday</td>
                                    <td className="py-2 font-medium">9:00 AM - 1:00 PM</td>
                                  </tr>
                                  <tr>
                                    <td className="py-2 text-gray-600">Sunday & Holidays</td>
                                    <td className="py-2 font-medium">Closed</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-navy-800 mb-2">Email Support</h4>
                              <p className="text-sm text-gray-600">
                                Emails are processed 24/7, with responses typically within 24-48 hours.
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-navy-800 mb-2">Live Chat Hours</h4>
                              <p className="text-sm text-gray-600">
                                Our chatbot is available 24/7. Human chat agents are available during phone support hours.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
        
        {/* FAQs Section */}
        <FAQSection 
          title="Common Questions" 
          description="Quick answers to frequently asked questions"
          showSearch={false}
          maxItems={4}
          filterCategories={["Application Process", "Tracking"]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Help;
