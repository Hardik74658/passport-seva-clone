import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  File,
  SearchCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Status items
const statusItems = [
  {
    status: "Application Submitted",
    date: "15 May 2023",
    icon: CheckCircle2,
    description: "Your application has been successfully submitted",
    complete: true,
  },
  {
    status: "Payment Confirmed",
    date: "15 May 2023",
    icon: CheckCircle2,
    description: "Payment has been verified",
    complete: true,
  },
  {
    status: "Document Verification",
    date: "18 May 2023",
    icon: CheckCircle2,
    description: "Your documents have been verified",
    complete: true,
  },
  {
    status: "Police Verification Initiated",
    date: "20 May 2023",
    icon: Clock,
    description: "Police verification process has been initiated",
    complete: false,
    current: true,
  },
  {
    status: "Police Verification Completed",
    date: "",
    icon: File,
    description: "Police verification process completed",
    complete: false,
  },
  {
    status: "Passport Printing",
    date: "",
    icon: File,
    description: "Your passport is being printed",
    complete: false,
  },
  {
    status: "Passport Dispatched",
    date: "",
    icon: File,
    description: "Your passport has been dispatched",
    complete: false,
  },
  {
    status: "Passport Delivered",
    date: "",
    icon: File,
    description: "Your passport has been delivered",
    complete: false,
  },
];

const TrackApplication = () => {
  const [applicationNumber, setApplicationNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("progress");

  const handleSearch = () => {
    if (!applicationNumber || !mobileNumber) return;

    setIsLoading(true);

    // Simulating API call
    setTimeout(() => {
      setShowResult(true);
      setIsLoading(false);
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const statusItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-700 to-navy-900 text-white py-16">
          <div className="container">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Track Your Passport Application
              </h1>
              <p className="text-lg max-w-2xl mx-auto text-gray-100">
                Check the real-time status of your passport application with
                your application number
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main tracking section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <AnimatePresence mode="wait">
                  {showResult ? (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Status sidebar */}
                        <div className="md:w-1/3 bg-navy-50 p-6">
                          <div className="mb-6">
                            <h3 className="text-lg font-medium text-navy-900 mb-1">
                              Application Details
                            </h3>
                            <p className="text-sm text-gray-500">
                              Last updated: Today, 09:15 AM
                            </p>
                          </div>

                          <div className="space-y-5">
                            <div>
                              <p className="text-sm text-gray-500">
                                Application Number
                              </p>
                              <p className="font-medium">{applicationNumber}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Applicant Name
                              </p>
                              <p className="font-medium">Rajesh Kumar</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Application Type
                              </p>
                              <p className="font-medium">New Passport</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Applied On</p>
                              <p className="font-medium">15 May 2023</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Current Status
                              </p>
                              <div className="flex items-center mt-1">
                                <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                                <p className="font-medium text-amber-700">
                                  In Progress
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-8">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-500">Progress</span>
                              <span className="text-navy-700 font-medium">
                                50%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div
                                className="bg-gradient-to-r from-amber-400 to-amber-500 h-2 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "50%" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                              ></motion.div>
                            </div>
                          </div>
                        </div>

                        {/* Main content */}
                        <div className="flex-1 p-6">
                          <div className="flex space-x-4 border-b mb-6">
                            <button
                              className={`pb-3 px-2 font-medium text-sm ${
                                activeTab === "progress"
                                  ? "text-navy-700 border-b-2 border-navy-700"
                                  : "text-gray-500"
                              }`}
                              onClick={() => setActiveTab("progress")}
                            >
                              Progress Timeline
                            </button>
                            <button
                              className={`pb-3 px-2 font-medium text-sm ${
                                activeTab === "details"
                                  ? "text-navy-700 border-b-2 border-navy-700"
                                  : "text-gray-500"
                              }`}
                              onClick={() => setActiveTab("details")}
                            >
                              Details
                            </button>
                            <button
                              className={`pb-3 px-2 font-medium text-sm ${
                                activeTab === "documents"
                                  ? "text-navy-700 border-b-2 border-navy-700"
                                  : "text-gray-500"
                              }`}
                              onClick={() => setActiveTab("documents")}
                            >
                              Documents
                            </button>
                          </div>

                          <AnimatePresence mode="wait">
                            {activeTab === "progress" && (
                              <motion.div
                                key="progress"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <motion.ol
                                  className="relative border-l border-gray-200 ml-3"
                                  variants={staggerContainer}
                                  initial="hidden"
                                  animate="visible"
                                >
                                  {statusItems.map((item, index) => (
                                    <motion.li
                                      key={index}
                                      className="mb-6 ml-6"
                                      variants={statusItemVariant}
                                    >
                                      <span
                                        className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white
                                        ${
                                          item.complete
                                            ? "bg-green-100 text-green-500"
                                            : item.current
                                            ? "bg-amber-100 text-amber-500"
                                            : "bg-gray-100 text-gray-400"
                                        }`}
                                      >
                                        <item.icon className="w-4 h-4" />
                                      </span>
                                      <div
                                        className={`${
                                          item.current
                                            ? "bg-amber-50 border-amber-200"
                                            : "bg-white border-gray-200"
                                        } p-4 rounded-lg border shadow-sm`}
                                      >
                                        <div className="flex justify-between items-start mb-1">
                                          <h3 className="font-medium">
                                            {item.status}
                                          </h3>
                                          {item.date && (
                                            <p className="text-sm text-gray-500">
                                              {item.date}
                                            </p>
                                          )}
                                        </div>
                                        <p className="text-sm text-gray-600">
                                          {item.description}
                                        </p>
                                      </div>
                                    </motion.li>
                                  ))}
                                </motion.ol>
                              </motion.div>
                            )}

                            {activeTab === "details" && (
                              <motion.div
                                key="details"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                              >
                                <div>
                                  <h3 className="font-medium text-gray-700 mb-2">
                                    Personal Details
                                  </h3>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <p className="text-gray-500">Full Name</p>
                                      <p>Rajesh Kumar</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">
                                        Date of Birth
                                      </p>
                                      <p>15 Mar 1990</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">Gender</p>
                                      <p>Male</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">
                                        Place of Birth
                                      </p>
                                      <p>Delhi</p>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h3 className="font-medium text-gray-700 mb-2">
                                    Address Details
                                  </h3>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="col-span-2">
                                      <p className="text-gray-500">
                                        Residential Address
                                      </p>
                                      <p>
                                        123, Sector 15, Vasant Kunj, New Delhi -
                                        110070
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">State</p>
                                      <p>Delhi</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">Pin Code</p>
                                      <p>110070</p>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h3 className="font-medium text-gray-700 mb-2">
                                    Passport Details
                                  </h3>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <p className="text-gray-500">
                                        Passport Type
                                      </p>
                                      <p>Ordinary Passport</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">
                                        Booklet Type
                                      </p>
                                      <p>36 Pages</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">
                                        Applied Via
                                      </p>
                                      <p>Normal Application</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">
                                        Scheme Type
                                      </p>
                                      <p>Fresh Passport</p>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}

                            {activeTab === "documents" && (
                              <motion.div
                                key="documents"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="space-y-4">
                                  <h3 className="font-medium text-gray-700 mb-2">
                                    Submitted Documents
                                  </h3>

                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center p-3 border rounded-lg bg-gray-50">
                                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                      </div>
                                      <div>
                                        <p className="font-medium text-sm">
                                          Address Proof
                                        </p>
                                        <p className="text-xs text-gray-500">
                                          Aadhaar Card
                                        </p>
                                      </div>
                                    </div>

                                    <div className="flex items-center p-3 border rounded-lg bg-gray-50">
                                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                      </div>
                                      <div>
                                        <p className="font-medium text-sm">
                                          Identity Proof
                                        </p>
                                        <p className="text-xs text-gray-500">
                                          PAN Card
                                        </p>
                                      </div>
                                    </div>

                                    <div className="flex items-center p-3 border rounded-lg bg-gray-50">
                                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                      </div>
                                      <div>
                                        <p className="font-medium text-sm">
                                          Date of Birth Proof
                                        </p>
                                        <p className="text-xs text-gray-500">
                                          Birth Certificate
                                        </p>
                                      </div>
                                    </div>

                                    <div className="flex items-center p-3 border rounded-lg bg-gray-50">
                                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                      </div>
                                      <div>
                                        <p className="font-medium text-sm">
                                          Photographs
                                        </p>
                                        <p className="text-xs text-gray-500">
                                          2 Passport Size Photos
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                    <div className="flex items-start gap-3">
                                      <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                      <div>
                                        <h4 className="font-medium text-blue-800">
                                          Document Verification Complete
                                        </h4>
                                        <p className="text-sm text-blue-700 mt-1">
                                          All your submitted documents have
                                          been verified by our team. The process
                                          has now moved to police verification
                                          stage.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <div className="mt-6 pt-6 border-t">
                            <div className="flex justify-between items-center">
                              <Button
                                variant="ghost"
                                className="text-gray-600 hover:text-gray-900"
                                onClick={() => {
                                  setShowResult(false);
                                  setApplicationNumber("");
                                  setMobileNumber("");
                                }}
                              >
                                Track Another Application
                              </Button>
                              <Button className="bg-navy-700 hover:bg-navy-800">
                                Download Report
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="search-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="p-8 md:p-12"
                    >
                      <div className="max-w-lg mx-auto">
                        <div className="mb-8 text-center">
                          <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <SearchCheck className="h-8 w-8 text-navy-600" />
                          </div>
                          <h2 className="text-2xl font-bold text-navy-900 mb-2">
                            Track Application Status
                          </h2>
                          <p className="text-gray-600">
                            Enter your application number and mobile number to
                            check the current status
                          </p>
                        </div>

                        <div className="space-y-5">
                          <div className="space-y-2">
                            <label
                              htmlFor="applicationNo"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Application Number{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <Input
                              id="applicationNo"
                              type="text"
                              placeholder="e.g., PSP123456789"
                              value={applicationNumber}
                              onChange={(e) =>
                                setApplicationNumber(e.target.value)
                              }
                              className="h-12"
                            />
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="mobileNo"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Registered Mobile Number{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <Input
                              id="mobileNo"
                              type="tel"
                              placeholder="Enter your 10-digit mobile number"
                              value={mobileNumber}
                              onChange={(e) => setMobileNumber(e.target.value)}
                              className="h-12"
                            />
                          </div>

                          <Button
                            className="w-full h-12 bg-navy-700 hover:bg-navy-800 transition-all duration-200 rounded-md"
                            onClick={handleSearch}
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                                <span>Searching...</span>
                              </div>
                            ) : (
                              <span className="flex items-center justify-center">
                                Track Status
                                <ArrowRight className="ml-2 h-5 w-5" />
                              </span>
                            )}
                          </Button>

                          <div className="p-4 bg-blue-50 rounded-lg flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-blue-800">
                                Quick Tip
                              </h4>
                              <p className="text-sm text-blue-700">
                                For testing purposes, use any application
                                number starting with "PSP" (e.g.,
                                PSP123456789)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section - replacing the redundant FAQs section */}
        <section className="py-12 bg-navy-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-navy-900">Need More Help?</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  If you have questions about your application status or the passport process, 
                  check our comprehensive FAQ section or contact our support team directly.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    className="bg-navy-700 hover:bg-navy-800"
                    onClick={() => window.location.href = '/faqs'}
                  >
                    View FAQs
                  </Button>
                  <Button variant="outline" className="border-navy-200 text-navy-700">
                    Contact Support
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TrackApplication;
