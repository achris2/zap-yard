import { Zap, Unplug, Clock12, Coffee, ArrowDownUp } from 'lucide-react';


interface iAppProps {
    name: string;
    title: string;
    icon: React.ElementType;
    description: string;
    id: number;
  }
  
export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "fastcharge",
    description: "Fast Chargers",
    title: "Fast Charge",
    icon: Zap,  
    },
    {
      id: 1,
      name: "overnight",
      description: "Overnight charge",
      title: "Overnight",
      icon: Unplug,
    },
    {
      id: 2,
      name: "twentyfour",
      description: "24/7",
      title: "24/7",
      icon: Clock12, 
    },
    {
      id: 3,
      name: "teabreak",
      description: "Chargers near tea/coffee facilities",
      title: "Tea Break",
      icon: Coffee, 
    },
    {
      id: 4,
      name: "motorway",
      description: "Chargers in major routes",
      title: "Major Road",
      icon: ArrowDownUp, 
    },
  ];