"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Импорт компонента Image

const images = [];
for (let i = 1; i <= 16; i++) {
  images.push(`/uslugi/cyganskij-ansambl/${i}.webp`);
}

function FotoSection() {
  const [showAll, setShowAll] = useState(false);
  
  const toggleShowAll = () => {
    setShowAll(!showAll);
  }

  const visibleImages = showAll ? images : images.slice(0, 4);

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleImages.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="responsive"
                width={400} // Укажите ширину и высоту по своему усмотрению
                height={300}
              />
            </div>
          ))}
        </div>
        {images.length > 4 && (
          <div className="mt-6 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#c9a035]  text-white py-1 px-5 rounded-full"
              onClick={toggleShowAll}
            >
              {showAll ? 'Скрыть' : 'Смотреть больше'}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FotoSection;
