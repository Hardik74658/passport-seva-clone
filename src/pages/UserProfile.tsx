import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, Calendar, MapPin, ArrowLeft } from "lucide-react";

export default function UserProfile() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 98765 43210",
    dob: "1985-05-15",
    address: "123, Sector 15, Vasant Kunj, New Delhi - 110070",
    state: "Delhi",
    pincode: "110070"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile data logic would go here
    
    setIsEditing(false);
    
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="flex-1 py-10">
        <div className="container max-w-4xl mx-auto px-4">
          <Button 
            variant="outline" 
            className="mb-6" 
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
          
          <Card className="shadow-sm border border-gray-100/80 rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-navy-50 to-navy-100 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="bg-navy-700 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                  R
                </div>
                <div>
                  <CardTitle>User Profile</CardTitle>
                  <CardDescription>
                    View and edit your personal information
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <User className="h-5 w-5 text-navy-600" />
                      Personal Information
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Update your personal details
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                          id="dob"
                          name="dob"
                          type="date"
                          value={formData.dob}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Mail className="h-5 w-5 text-navy-600" />
                      Contact Information
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      How we can reach you
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-navy-600" />
                      Address Information
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Your primary residence address
                    </p>
                    
                    <div className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Full Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="pincode">PIN Code</Label>
                          <Input
                            id="pincode"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end gap-3">
                    {isEditing ? (
                      <>
                        <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                        <Button type="submit" className="bg-navy-700 hover:bg-navy-800 text-white">
                          Save Changes
                        </Button>
                      </>
                    ) : (
                      <Button 
                        type="button" 
                        onClick={() => setIsEditing(true)}
                        className="bg-navy-700 hover:bg-navy-800 text-white"
                      >
                        Edit Profile
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
