import { motion } from "framer-motion";
import ServiceCard from "@/components/service-card";
import { Palette, Sofa, Home, Brush, PenTool, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Interior Design Consultation",
    description: "Expert guidance to transform your vision into reality with our comprehensive design consultation service.",
    icon: Palette
  },
  {
    title: "Furniture Selection",
    description: "Curated selection of premium furniture pieces that perfectly complement your space and lifestyle.",
    icon: Sofa
  },
  {
    title: "Space Planning",
    description: "Optimize your living space with our professional space planning and layout design services.",
    icon: Home
  },
  {
    title: "Color Consultation",
    description: "Create the perfect ambiance with our expert color selection and consultation services.",
    icon: Brush
  },
  {
    title: "Custom Solutions",
    description: "Bespoke design solutions tailored to your unique requirements and preferences.",
    icon: PenTool
  },
  {
    title: "Lighting Design",
    description: "Transform your space with our expert lighting design and implementation services.",
    icon: Lightbulb
  }
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-serif text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Services
        </motion.h1>

        <motion.p
          className="text-lg text-foreground/60 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Experience luxury interior design services tailored to your unique style and needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
