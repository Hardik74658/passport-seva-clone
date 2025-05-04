import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, ThumbsUp, ThumbsDown } from "lucide-react";

// Create a FAQData component that can be imported by multiple pages
export const faqData = [
  {
    id: 1,
    category: "Application Process",
    question: "What is the process to apply for a passport in India?",
    answer: 
      "The process to apply for a passport in India involves: 1) Register on the Passport Seva Portal and create an account. 2) Fill the online application form. 3) Schedule an appointment at a Passport Seva Kendra. 4) Pay the application fee online. 5) Visit the Passport Seva Kendra on the appointment date with required documents for verification and biometric capture. 6) Undergo police verification (if applicable). 7) Receive your passport by post.",
  },
  {
    id: 2,
    category: "Documents",
    question: "What documents are required for a fresh passport application?",
    answer:
      "For a fresh passport application, you'll need: 1) Proof of Identity (Aadhaar/Voter ID/PAN Card). 2) Proof of Address (Aadhaar/Utility Bill/Bank Statement). 3) Proof of Date of Birth (Birth Certificate/Aadhaar/10th Certificate). 4) Recent passport-sized photographs (4.5cm x 3.5cm). 5) For minors: Birth Certificate and parent's documents. Additional documents may be required based on specific circumstances.",
  },
  {
    id: 3,
    category: "Tracking",
    question: "How can I check the status of my passport application?",
    answer:
      "You can check your passport application status by visiting the 'Track Application Status' section of the Passport Seva website. Enter your application number or file number along with your date of birth to view the current status. You can also track your application status via SMS by sending 'STATUS APPLICATION_NUMBER' to 9704100100.",
  },
  {
    id: 4,
    category: "Services",
    question: "What is the difference between normal and Tatkaal passport services?",
    answer:
      "The normal passport application process follows the standard timeline for processing, while Tatkaal is an expedited service with faster processing times for urgent requirements. Tatkaal services have higher fees and require additional documentation including verification certificates from specific authorities. Normal applications typically take 4-6 weeks, while Tatkaal applications are processed within 1-3 working days.",
  },
  {
    id: 5,
    category: "Application Process",
    question: "Can I apply for passport services online?",
    answer:
      "Yes, you can apply for most passport services online through the Passport Seva Portal. This includes new passport applications, renewals, and other miscellaneous services. After submitting your online application, you'll need to schedule an appointment at a Passport Seva Kendra for document verification and biometric capture.",
  },
  {
    id: 6,
    category: "Fees",
    question: "What are the fees for different passport services?",
    answer:
      "The fees for passport services vary based on the type and urgency: 1) Fresh Passport (36 pages): ₹1,500 for normal, ₹3,500 for Tatkaal. 2) Fresh Passport (60 pages): ₹2,000 for normal, ₹4,000 for Tatkaal. 3) Passport for minors under 18 (36 pages): ₹1,000 for normal, ₹3,000 for Tatkaal. 4) Passport reissue: ₹1,500 for normal, ₹3,500 for Tatkaal. Additional charges apply for damaged/lost passports.",
  },
  {
    id: 7,
    category: "Police Verification",
    question: "What is police verification and when is it required?",
    answer:
      "Police verification is the process where local police authorities verify your address and identity as part of the passport issuance process. It's generally required for first-time passport applicants, those changing their address, and in cases of lost/damaged passports. For passport renewals with no address change, police verification might be done after passport issuance or waived entirely if your previous passport had no adverse observations.",
  },
  {
    id: 8,
    category: "Application Process",
    question: "How long does it take to get a passport?",
    answer:
      "The processing time for passports depends on the service type and verification requirements. For fresh passports with normal processing, it typically takes 4-6 weeks from the application date. Tatkaal (urgent) applications are usually processed within 1-3 working days after appointment. Reissue cases might be faster if post-issuance police verification is applicable. Processing times may vary based on application completeness and verification complexity.",
  },
];

// Props interface for the FAQSection component
interface FAQSectionProps {
  title?: string;
  description?: string;
  showSearch?: boolean;
  showContactSupport?: boolean;
  filterCategories?: string[];
  maxItems?: number;
}

const FAQSection = ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about passport application process",
  showSearch = true,
  showContactSupport = true,
  filterCategories = [],
  maxItems = 0,
}: FAQSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [helpfulFaqs, setHelpfulFaqs] = useState<number[]>([]);
  const [unhelpfulFaqs, setUnhelpfulFaqs] = useState<number[]>([]);
  
  // Apply category filter and search filter
  const filteredFaqs = faqData
    .filter(faq => 
      filterCategories.length === 0 || filterCategories.includes(faq.category)
    )
    .filter(faq => 
      searchQuery ? 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    )
    .slice(0, maxItems || undefined); // Limit number of FAQs if maxItems is specified

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

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-navy-900">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
          
          {showSearch && (
            <div className="max-w-md mx-auto mt-6 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search in FAQs..."
                className="pl-9 h-11"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}
        </div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredFaqs.length > 0 ? (
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
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </div>
          )}

          {showContactSupport && (
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Button className="bg-navy-700 hover:bg-navy-800 rounded-md">
                Contact Support
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
