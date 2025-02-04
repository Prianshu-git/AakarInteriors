import { motion } from "framer-motion";
import HeroSection from "@/components/hero-section";
import TestimonialSlider from "@/components/testimonial-slider";
import SocialIcons from "@/components/social-icons";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSection />
      
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <TestimonialSlider />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Connect With Us</h2>
          <div className="flex justify-center">
            <SocialIcons />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
