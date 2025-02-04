import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Luxury Living,
          <br />
          Redefined
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Transform your space into a masterpiece of design with आकर Interiors. 
          Where luxury meets lifestyle.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1445510861639-5651173bc5d5"
            alt="Luxury Interior"
            className="w-full h-[60vh] object-cover rounded-lg shadow-2xl"
            loading="lazy"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
