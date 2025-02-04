import { motion } from "framer-motion";
import HeroSection from "@/components/hero-section";
import TestimonialSlider from "@/components/testimonial-slider";
import EnquiryForm from "@/components/enquiry-form";
import SocialIcons from "@/components/social-icons";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

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
            Our Latest Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
              "https://images.unsplash.com/photo-1600566752447-f7234e9e6d5d"
            ].map((src, index) => (
              <motion.div
                key={src}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <img
                  src={src}
                  alt={`Luxury Interior ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <EnquiryForm />
            </motion.div>
          </div>
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