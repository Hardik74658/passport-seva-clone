
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InstructionsCardProps {
  title: string;
  icon?: ReactNode;
  instructions: string[];
}

const InstructionsCard = ({ title, icon, instructions }: InstructionsCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          {icon && <span className="text-navy-600">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {instructions.map((instruction, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-navy-100 text-navy-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium">{index + 1}</span>
              </div>
              <span className="text-sm">{instruction}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default InstructionsCard;
