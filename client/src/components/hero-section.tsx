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
          Give Your Home
          <br />
          A New आकार
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Transform your space into a masterpiece of design with आकार Interiors. 
          Where luxury meets lifestyle.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          <motion.div className="relative overflow-hidden rounded-lg shadow-2xl">
            <motion.img
              src="https://images.unsplash.com/photo-1600121848594-d8644e57abab"
              alt="Luxury Living Room"
              className="w-full h-[40vh] object-cover"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div className="relative overflow-hidden rounded-lg shadow-2xl">
            <motion.img
              src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4"
              alt="Modern Kitchen"
              className="w-full h-[40vh] object-cover"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
