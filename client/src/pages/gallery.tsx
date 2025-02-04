import { motion } from "framer-motion";
import GalleryGrid from "@/components/gallery-grid";

export default function Gallery() {
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
          Our Portfolio
        </motion.h1>
        
        <motion.p
          className="text-lg text-foreground/60 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Explore our collection of meticulously crafted interiors that blend 
          luxury with functionality.
        </motion.p>

        <GalleryGrid />
      </div>
    </motion.div>
  );
}
