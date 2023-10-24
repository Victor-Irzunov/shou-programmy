"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoGallery = ({ videos, title = 'Видео: Цыганский ансамбль на мероприятиях' }) => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  }

  useEffect(() => {
    // Проверка, является ли текущий экран мобильным
    const isMobileScreen = window.innerWidth <= 768; // Настройте значение ширины по своему усмотрению
    setIsMobile(isMobileScreen);
  }, []);

  const visibleVideos = showAll ? videos : videos.slice(0, 1);

  return (
    <div className="mt-16">
      <h3 className="uppercase text-2xl mb-8">{title}</h3>
      {visibleVideos.map((video, index) => (
        <div key={index} className="flex flex-col justify-center items-center mb-8">
          <h4 className="mb-3">{video.title}</h4>
          <iframe
            width={isMobile ? "100%" : "560"}
            height={isMobile ? "200" : "315"}
            src={video.src}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      ))}
      {videos.length > 1 && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleShowAll}
          className="bg-[#c9a035] text-white py-1 px-6 rounded-full"
        >
          {showAll ? 'Скрыть' : 'Больше видео'}
        </motion.button>
      )}
    </div>
  );
}

export default VideoGallery;
