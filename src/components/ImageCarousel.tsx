import React, { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  autoSlideInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  autoSlideInterval = 4000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [images.length, autoSlideInterval]);

  const getImageStyle = (imageUrl: string) => {
    // Specific positioning for problematic images
    if (imageUrl.includes('IMG-20250605-WA0009_x733kk.jpg')) {
      return {
        objectPosition: 'center 30%',
        objectFit: 'cover' as const
      };
    }
    if (imageUrl.includes('2f486508-7630-429d-9ea4-1ad057147acb_ghvp7b.jpg')) {
      return {
        objectPosition: 'center 25%',
        objectFit: 'cover' as const
      };
    }
    return {
      objectPosition: 'center center',
      objectFit: 'cover' as const
    };
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Carousel image ${index + 1}`}
            className="w-full h-full"
            style={getImageStyle(image)}
          />
        </div>
      ))}
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;