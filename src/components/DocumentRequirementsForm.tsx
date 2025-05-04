import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DocumentRequirementsForm = () => {
  return (
    <Card className="rounded-lg border shadow-sm">
      <CardHeader>
        <CardTitle>Required Documents</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="doc-id-proof" />
            <Label htmlFor="doc-id-proof">ID Proof (Aadhaar/Voter ID/PAN Card)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="doc-address" />
            <Label htmlFor="doc-address">Address Proof (Aadhaar/Utility Bill/Bank Statement)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="doc-birth" />
            <Label htmlFor="doc-birth">Birth Proof (Birth Certificate/Aadhaar/10th Certificate)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="doc-photos" />
            <Label htmlFor="doc-photos">Recent passport-sized photographs (4.5cm x 3.5cm)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="doc-minor" />
            <Label htmlFor="doc-minor">For minors: Birth Certificate and parent's documents</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentRequirementsForm;
