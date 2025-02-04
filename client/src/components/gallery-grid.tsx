import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  {
    src: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    alt: "Modern Living Room"
  },
  {
    src: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88",
    alt: "Elegant Dining Area"
  },
  {
    src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
    alt: "Luxury Bedroom"
  },
  {
    src: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da",
    alt: "Modern Kitchen"
  },
  {
    src: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8",
    alt: "Bathroom Design"
  },
  {
    src: "https://images.unsplash.com/photo-1712668401428-df42b8bd93fc",
    alt: "Contemporary Furniture"
  }
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {images.map((image, index) => (
        <GalleryItem key={index} {...image} index={index} />
      ))}
    </div>
  );
}

function GalleryItem({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative aspect-square group"
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-lg"
        loading="lazy"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"
        initial={false}
      >
        <p className="text-white text-lg font-serif">{alt}</p>
      </motion.div>
    </motion.div>
  );
}
