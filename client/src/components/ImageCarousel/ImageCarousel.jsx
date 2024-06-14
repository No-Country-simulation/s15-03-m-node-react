import { useState, useEffect } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // sm: 1 image
      } else if (window.innerWidth < 768) {
        setVisibleCount(2); // mb: 2 images
      } else {
        setVisibleCount(3); // lg: 3 images
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - visibleCount : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - visibleCount ? 0 : prevIndex + 1
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);
  if (visibleImages.length < visibleCount) {
    visibleImages.push(...images.slice(0, visibleCount - visibleImages.length));
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrev}
          className="bg-gray-500 text-white p-2 rounded-full"
        >
          &#8249;
        </button>
        <div className="flex space-x-4 overflow-hidden w-full">
          {visibleImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`carousel-${index}`}
              className={`object-cover m-2 ${
                visibleCount === 1
                  ? "w-full"
                  : visibleCount === 2
                  ? "w-1/2"
                  : "w-1/3"
              } h-full`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="bg-gray-500 text-white p-2 rounded-full"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
