import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ms Agarwal",
    role: "Homeowner",
    content: "आकर Interiors transformed our space into something beyond our imagination. Their attention to detail is impeccable."
  },
  {
    id: 2,
    name: "Mr Ganguly",
    role: "Property Developer",
    content: "Working with आकर has been a pleasure. They understand luxury and deliver excellence consistently."
  },
  {
    id: 3,
    name: "Akash Roy",
    role: "Business Owner",
    content: "The designs by आकर Interiors have significantly increased the value of my properties."
  },
  {
    id: 4,
    name: "Mrs Diksha",
    role: "Interior Design Enthusiast",
    content: "Their attention to detail and understanding of modern aesthetics is unmatched."
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-background/50 backdrop-blur">
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-lg mb-4">{testimonials[current].content}</p>
              <div className="font-serif">
                <p className="font-medium">{testimonials[current].name}</p>
                <p className="text-sm text-foreground/60">{testimonials[current].role}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}