import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const visibleImages = images.slice(currentIndex, currentIndex + 3);
    if (visibleImages.length < 3) {
        visibleImages.push(...images.slice(0, 3 - visibleImages.length));
    }

    return (
        <div className="relative w-full overflow-hidden ">
            <div className="flex justify-between items-center">
                <button onClick={handlePrev} className="bg-gray-500 text-white p-2 rounded-full">
                    &#8249;
                </button>
                <div className="flex space-x-4 overflow-hidden w-full ">
                    {visibleImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`carousel-${index}`}
                            className="w-1/3 h-full object-cover m-6"
                        />
                    ))}
                </div>
                <button onClick={handleNext} className="bg-gray-500 text-white p-2 rounded-full">
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;
