import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Transforming healthcare one habit at a time",
            description: "Our mission is to empower individuals and organizations to prioritize health and well- being through innovative, data - driven tools that simplify health management and improve outcomes",
            imageUrl: "https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg",
        },
    {
        title: "Personalized Health Solutions",
        description: "Experience healthcare tailored to your unique needs with our AI-powered platform that adapts and evolves with you, providing customized recommendations and real-time health insights.",
        imageUrl: "https://images.pexels.com/photos/2383010/pexels-photo-2383010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        title: "Building Healthier Communities Together",
        description: "Join our growing network of healthcare providers, organizations, and individuals committed to revolutionizing healthcare delivery through collaborative wellness programs and preventive care initiatives.",
        imageUrl: "https://images.pexels.com/photos/4719931/pexels-photo-4719931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
    ];

// Auto-play functionality
useEffect(() => {
    const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
}, []);

const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
};

const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
};

const goToSlide = (index: number) => {
    setCurrentSlide(index);
};

return (
    <div className="relative w-full h-120">
        {/* Main carousel container */}
        <div className="relative h-full overflow-hidden rounded-lg">
            {/* Slides */}
            <div
                className="h-full flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        <div className="relative w-full h-full">
                            <img
                                src={slide.imageUrl}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Text overlay */}
                            <div className="absolute top-0 w-full bg-black opacity-50 h-full p-6" />
                            <div className='absolute top-[40%] w-full'>
                                <div className='flex flex-col items-center text-white text-center'>
                                    <h2 className="text-[0.9rem] md:text-[2rem] font-bold w-1/2 mb-2">{slide.title}</h2>
                                    <p className="text-[0.8rem] text-justify md:block md:text-xl w-1/2">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all"
            >
                <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all"
            >
                <ChevronRight className="w-6 h-6 text-black" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white' : 'bg-gray-500 bg-opacity-50'
                            }`}
                    />
                ))}
            </div>
        </div>
    </div>
);
};

export default Carousel;