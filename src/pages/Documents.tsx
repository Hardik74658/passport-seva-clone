import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowDownToLine, Info, HelpCircle } from "lucide-react";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { useState } from "react";

const Documents = () => {
  const [docType, setDocType] = useState("regular");

  const documentCategories = [
    {
      id: "proofOfIdentity",
      title: "Proof of Identity",
      description: "Any one of the following documents",
      documents: [
        { id: "aadhar", name: "Aadhaar Card", description: "Issued by UIDAI" },
        { id: "voter", name: "Voter ID Card", description: "Issued by Election Commission of India" },
        { id: "pan", name: "PAN Card", description: "Issued by Income Tax Department" },
        { id: "driving", name: "Driving License", description: "Issued by Transport Authority" },
        { id: "govt", name: "Government ID Card", description: "Issued by Central/State Government" },
      ]
    },
    {
      id: "proofOfAddress",
      title: "Proof of Address",
      description: "Any one of the following documents",
      documents: [
        { id: "aadharAddr", name: "Aadhaar Card", description: "Issued by UIDAI" },
        { id: "electricity", name: "Electricity Bill", description: "Not older than 3 months" },
        { id: "water", name: "Water Bill", description: "Not older than 3 months" },
        { id: "telephone", name: "Telephone/Mobile Bill", description: "Not older than 3 months" },
        { id: "bank", name: "Bank Account Statement", description: "Not older than 3 months" },
      ]
    },
    {
      id: "proofOfDOB",
      title: "Proof of Date of Birth",
      description: "Any one of the following documents",
      documents: [
        { id: "birth", name: "Birth Certificate", description: "Issued by Municipal Authority" },
        { id: "ssc", name: "SSC Certificate", description: "Showing date of birth" },
        { id: "passport", name: "Old Passport", description: "For passport renewal" },
      ]
    }
  ];

  const additionalDocuments = {
    tatkaal: [
      { id: "verification", name: "Standard Verification Certificate", description: "From Group A Gazetted Officer" },
      { id: "annexureF", name: "Annexure F", description: "Self-declaration for Tatkaal applications" },
    ],
    minors: [
      { id: "parentsId", name: "Parents' ID Proof", description: "Passport/Aadhaar/PAN of both parents" },
      { id: "consent", name: "Annexure D", description: "Parental Consent Form (if one parent is absent)" },
      { id: "birthRegister", name: "Birth Certificate", description: "Issued by Municipal Authority" },
    ],
    renewal: [
      { id: "oldPassport", name: "Original Old Passport", description: "Must be submitted at appointment" },
      { id: "copyPassport", name: "First and Last Page Copy", description: "Of your existing passport" },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold text-navy-800">Documents Required</h1>
            <p className="text-muted-foreground">Complete list of documents required for your passport application</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Tabs value={docType} onValueChange={setDocType} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="regular">Regular Passport</TabsTrigger>
                  <TabsTrigger value="tatkaal">Tatkaal Passport</TabsTrigger>
                  <TabsTrigger value="minor">Minor Passport</TabsTrigger>
                </TabsList>
                <Card className="mt-6 border-t-0 rounded-t-none">
                  <CardContent className="pt-6">
                    <TabsContent value="regular" className="space-y-8 mt-0">
                      <div className="space-y-6">
                        {documentCategories.map((category) => (
                          <div key={category.id} className="space-y-4">
                            <h3 className="text-lg font-semibold text-navy-700">{category.title}</h3>
                            <p className="text-sm text-muted-foreground">{category.description}</p>
                            <div className="grid gap-2">
                              {category.documents.map((doc) => (
                                <div key={doc.id} className="flex items-start space-x-3 p-3 border rounded-md bg-white hover:bg-muted/50 transition-colors">
                                  <Checkbox id={doc.id} />
                                  <div className="space-y-1">
                                    <label htmlFor={doc.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                      {doc.name}
                                    </label>
                                    <p className="text-sm text-muted-foreground">{doc.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="tatkaal" className="space-y-8 mt-0">
                      <div className="p-4 rounded-md bg-saffron-50 border border-saffron-200 mb-6">
                        <div className="flex gap-3">
                          <Info className="h-5 w-5 text-saffron-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-saffron-800 mb-1">Tatkaal Processing</h4>
                            <p className="text-sm text-saffron-700">
                              Tatkaal applications require additional verification documents along with all regular passport documents.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {documentCategories.map((category) => (
                          <div key={category.id} className="space-y-4">
                            <h3 className="text-lg font-semibold text-navy-700">{category.title}</h3>
                            <p className="text-sm text-muted-foreground">{category.description}</p>
                            <div className="grid gap-2">
                              {category.documents.map((doc) => (
                                <div key={doc.id} className="flex items-start space-x-3 p-3 border rounded-md bg-white hover:bg-muted/50 transition-colors">
                                  <Checkbox id={`tatkaal-${doc.id}`} />
                                  <div className="space-y-1">
                                    <label htmlFor={`tatkaal-${doc.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                      {doc.name}
                                    </label>
                                    <p className="text-sm text-muted-foreground">{doc.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-navy-700">Additional Tatkaal Documents</h3>
                          <p className="text-sm text-muted-foreground">Required specifically for Tatkaal applications</p>
                          <div className="grid gap-2">
                            {additionalDocuments.tatkaal.map((doc) => (
                              <div key={doc.id} className="flex items-start space-x-3 p-3 border rounded-md bg-saffron-50 border-saffron-200 hover:bg-saffron-100 transition-colors">
                                <Checkbox id={`tatkaal-special-${doc.id}`} />
                                <div className="space-y-1">
                                  <label htmlFor={`tatkaal-special-${doc.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                    {doc.name}
                                  </label>
                                  <p className="text-sm text-muted-foreground">{doc.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="minor" className="space-y-8 mt-0">
                      <div className="p-4 rounded-md bg-green-india-50 border border-green-india-200 mb-6">
                        <div className="flex gap-3">
                          <Info className="h-5 w-5 text-green-india-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-green-india-800 mb-1">Minor Applicants (Under 18)</h4>
                            <p className="text-sm text-green-india-700">
                              Applications for minors require documents of both parents along with the minor's documents.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {documentCategories.map((category) => (
                          <div key={category.id} className="space-y-4">
                            <h3 className="text-lg font-semibold text-navy-700">{category.title}</h3>
                            <p className="text-sm text-muted-foreground">{category.description}</p>
                            <div className="grid gap-2">
                              {category.documents.map((doc) => (
                                <div key={doc.id} className="flex items-start space-x-3 p-3 border rounded-md bg-white hover:bg-muted/50 transition-colors">
                                  <Checkbox id={`minor-${doc.id}`} />
                                  <div className="space-y-1">
                                    <label htmlFor={`minor-${doc.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                      {doc.name}
                                    </label>
                                    <p className="text-sm text-muted-foreground">{doc.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-navy-700">Additional Documents for Minors</h3>
                          <p className="text-sm text-muted-foreground">Required specifically for applicants under 18</p>
                          <div className="grid gap-2">
                            {additionalDocuments.minors.map((doc) => (
                              <div key={doc.id} className="flex items-start space-x-3 p-3 border rounded-md bg-green-india-50 border-green-india-200 hover:bg-green-india-100 transition-colors">
                                <Checkbox id={`minor-special-${doc.id}`} />
                                <div className="space-y-1">
                                  <label htmlFor={`minor-special-${doc.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                    {doc.name}
                                  </label>
                                  <p className="text-sm text-muted-foreground">{doc.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </CardContent>
                </Card>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card className="bg-navy-50">
                <CardHeader>
                  <CardTitle className="text-lg">Document Checklist</CardTitle>
                  <CardDescription>Download and prepare all required documents</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full flex justify-between items-center">
                    <span>Download Checklist</span>
                    <ArrowDownToLine className="h-4 w-4 ml-2" />
                  </Button>
                  <p className="text-sm text-muted-foreground">Bring all original documents and their photocopies to your appointment.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Document Guidelines</CardTitle>
                  <CardDescription>Important information about your documents</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Collapsible className="space-y-2">
                    <div className="flex items-center justify-between space-x-4 px-4 py-2 bg-muted/50 rounded-md">
                      <h4 className="text-sm font-semibold">Self-Attestation Guidelines</h4>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="text-sm px-4">
                      All photocopies must be self-attested. Write "This is a true copy of the original" and sign with date on each page.
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Collapsible className="space-y-2">
                    <div className="flex items-center justify-between space-x-4 px-4 py-2 bg-muted/50 rounded-md">
                      <h4 className="text-sm font-semibold">Document Validity</h4>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="text-sm px-4">
                      Utility bills and bank statements should not be older than 3 months from the date of application.
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Collapsible className="space-y-2">
                    <div className="flex items-center justify-between space-x-4 px-4 py-2 bg-muted/50 rounded-md">
                      <h4 className="text-sm font-semibold">Translation Requirements</h4>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="text-sm px-4">
                      Documents in languages other than English or Hindi must be accompanied by an official translation.
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>

              <Card className="bg-green-india-50">
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                  <CardDescription>Support options for document preparation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-green-india-600 hover:bg-green-india-700">Chat with Support</Button>
                  <Button variant="outline" className="w-full">Call Helpline</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <Button variant="outline">
              Back to Dashboard
            </Button>
            <Button className="bg-navy-600 hover:bg-navy-700">
              Book Appointment
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documents;
