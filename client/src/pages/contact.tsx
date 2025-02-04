import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form";
import SocialIcons from "@/components/social-icons";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
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
          Get in Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-8">
              <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p>123 Luxury Lane, Design District</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>contact@akar-interiors.com</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                <SocialIcons />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
