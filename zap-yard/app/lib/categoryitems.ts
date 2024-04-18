import { Zap, Unplug, Clock12, Coffee, ArrowDownUp } from 'lucide-react';


interface iAppProps {
    name: string;
    title: string;
    icon: React.ElementType;
    description: string;
    id: number;
    imageUrl: string;
  }
  
export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "fastcharge",
    description: "Fast Chargers",
    title: "Fast Charge",
    icon: Zap,
    imageUrl: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    },
    {
      id: 1,
      name: "overnight",
      description: "Overnight charge",
      title: "Overnight",
      icon: Unplug,
      imageUrl: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    },
    {
      id: 2,
      name: "twentyfour",
      description: "24/7",
      title: "24/7",
      icon: Clock12, 
      imageUrl: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    },
    {
      id: 3,
      name: "teabreak",
      description: "Chargers near tea/coffee facilities",
      title: "Tea Break",
      icon: Coffee, 
      imageUrl: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    },
    {
      id: 4,
      name: "motorway",
      description: "Chargers in major routes",
      title: "Major Road",
      icon: ArrowDownUp, 
      imageUrl: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    },
  ];