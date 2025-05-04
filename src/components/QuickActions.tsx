
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";
import LoginForm from "./LoginForm";

const QuickActions = () => {
  const [applicationNumber, setApplicationNumber] = useState("");
  
  const handleTrack = () => {
    if (!applicationNumber.trim()) {
      toast.error("Please enter a valid application number");
      return;
    }
    toast.success("Tracking application: " + applicationNumber);
    // In a real app, this would call an API to fetch the status
  };

  return (
    <section className="py-8 bg-white">
      <div className="container">
        <Tabs defaultValue="track" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 h-auto">
            <TabsTrigger value="track" className="py-3">Track Application</TabsTrigger>
            <TabsTrigger value="login" className="py-3">Login</TabsTrigger>
            <TabsTrigger value="appointment" className="py-3">Book Appointment</TabsTrigger>
          </TabsList>
          
          <Card className="border-t-0 rounded-t-none">
            <CardContent className="pt-6">
              <TabsContent value="track" className="mt-0">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="application-number">Application Number</Label>
                    <Input 
                      id="application-number"
                      placeholder="Enter your application number" 
                      value={applicationNumber}
                      onChange={(e) => setApplicationNumber(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={handleTrack}
                    className="w-full bg-navy-700 hover:bg-navy-800"
                  >
                    Track Now
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Enter your application number to track the current status of your passport application
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="login" className="mt-0">
                <LoginForm />
              </TabsContent>
              
              <TabsContent value="appointment" className="mt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="appointment-id">Appointment ID</Label>
                      <Input id="appointment-id" placeholder="Enter your appointment ID" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter registered phone number" />
                    </div>
                  </div>
                  <Button className="w-full bg-navy-700 hover:bg-navy-800">
                    Check Appointment
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Check, reschedule or cancel your existing passport appointment
                  </p>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </section>
  );
};

export default QuickActions;
