import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faqData } from "@/components/FAQSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const FAQs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [helpfulFaqs, setHelpfulFaqs] = useState<number[]>([]);
  const [unhelpfulFaqs, setUnhelpfulFaqs] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const filteredFaqs = faqData.filter(
    (faq) => {
      // Filter by search query
      const matchesSearch = searchQuery ? 
        (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())) : true;
      
      // Filter by category
      const matchesCategory = selectedCategory === "all" ? true : faq.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    }
  );

  const handleToggle = (value: string) => {
    setExpandedFaqs((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };

  const markHelpful = (id: number) => {
    if (helpfulFaqs.includes(id)) {
      setHelpfulFaqs(helpfulFaqs.filter(faqId => faqId !== id));
    } else {
      setHelpfulFaqs([...helpfulFaqs, id]);
      setUnhelpfulFaqs(unhelpfulFaqs.filter(faqId => faqId !== id));
    }
  };

  const markUnhelpful = (id: number) => {
    if (unhelpfulFaqs.includes(id)) {
      setUnhelpfulFaqs(unhelpfulFaqs.filter(faqId => faqId !== id));
    } else {
      setUnhelpfulFaqs([...unhelpfulFaqs, id]);
      setHelpfulFaqs(helpfulFaqs.filter(faqId => faqId !== id));
    }
  };

  // Extract unique categories for filter
  const categories = ["all", ...Array.from(new Set(faqData.map(faq => faq.category)))];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-700 to-navy-900 py-16">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-lg text-gray-100">
                Find answers to common questions about passport application process and services
              </p>

              <div className="mt-8 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search in FAQs..."
                  className="pl-12 h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-300 rounded-full w-full max-w-md mx-auto"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="font-medium text-lg mb-4">Filter by Category</h3>
                  
                  <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2 py-1.5">
                        <RadioGroupItem value={category} id={`category-${category}`} className="rounded-full" />
                        <Label htmlFor={`category-${category}`} className="capitalize cursor-pointer">
                          {category === "all" ? "All Categories" : category}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {searchQuery && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSearchQuery("")}
                        className="w-full"
                      >
                        Clear Search
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* FAQ Content */}
              <div className="md:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {filteredFaqs.length > 0 ? (
                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        {selectedCategory === "all" 
                          ? "All Questions" 
                          : `Questions about ${selectedCategory}`}
                        <span className="text-sm font-normal text-gray-500 ml-2">
                          ({filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'})
                        </span>
                      </h2>
                      
                      <Accordion type="single" collapsible className="w-full" onValueChange={handleToggle}>
                        {filteredFaqs.map((faq, i) => (
                          <AccordionItem
                            key={faq.id}
                            value={`item-${faq.id}`}
                            className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white shadow-sm"
                          >
                            <AccordionTrigger className="px-6 py-4 hover:no-underline data-[state=open]:bg-navy-50/30">
                              <div className="flex items-start text-left pr-2">
                                <HelpCircle className="h-5 w-5 text-navy-600 mr-3 mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="font-medium text-navy-900">{faq.question}</p>
                                  <span className="text-xs text-navy-600 bg-navy-50 px-2 py-0.5 rounded-full mt-1 inline-block">
                                    {faq.category}
                                  </span>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 pt-1 text-gray-700">
                              <div className="pl-8">
                                <p className="whitespace-pre-line">{faq.answer}</p>
                                
                                <div className="mt-4 flex items-center justify-end space-x-4 pt-2 border-t text-sm text-gray-500">
                                  <span>Was this helpful?</span>
                                  <button 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      markHelpful(faq.id);
                                    }}
                                    className={`flex items-center space-x-1 ${helpfulFaqs.includes(faq.id) ? 'text-green-600' : 'text-gray-500 hover:text-green-600'}`}
                                  >
                                    <ThumbsUp className="h-4 w-4" />
                                    <span>Yes</span>
                                  </button>
                                  <button 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      markUnhelpful(faq.id);
                                    }}
                                    className={`flex items-center space-x-1 ${unhelpfulFaqs.includes(faq.id) ? 'text-red-600' : 'text-gray-500 hover:text-red-600'}`}
                                  >
                                    <ThumbsDown className="h-4 w-4" />
                                    <span>No</span>
                                  </button>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ) : (
                    <div className="text-center p-8 bg-white rounded-lg border border-gray-200">
                      <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4">
                        <Search className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No results found</h3>
                      <p className="text-gray-500 mb-4">
                        We couldn't find any FAQs matching your search query.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedCategory("all");
                        }}
                      >
                        Reset Filters
                      </Button>
                    </div>
                  )}

                  <div className="mt-8 p-6 bg-navy-50 rounded-lg border border-navy-100">
                    <h3 className="font-medium text-lg mb-2">Still have questions?</h3>
                    <p className="text-gray-600 mb-4">
                      If you couldn't find the answer you were looking for, please contact our support team.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-navy-700 hover:bg-navy-800">
                        Contact Support
                      </Button>
                      <Button variant="outline" className="border-navy-200 text-navy-700 hover:bg-navy-50">
                        Submit Feedback
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
