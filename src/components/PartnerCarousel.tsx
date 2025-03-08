import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

// Define types for partner and props
interface Partner {
  title: string;
  description: string;
  imageUrl: string;
}

interface PartnerCarouselProps {
  partners: Partner[];
}

const PartnerCarousel: React.FC<PartnerCarouselProps> = ({ partners }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(true);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollIntervalRef = useRef<any>(null);

  // Calculate the scroll step based on container width
  const scrollStep = 200; // Width of each partner item including padding

  useEffect(() => {
    if (!containerRef.current) return;
    
    
    const cloneItems = () => {
      const cloneContainer = scrollRef.current;
      if (!cloneContainer) return;
      
      cloneContainer.innerHTML = '';
      
      partners.forEach((partner, index) => {
        const div = document.createElement('div');
        div.className = 'flex-shrink-0 px-4 partner-item clone';
        div.style.width = '200px';
        index
        const img = document.createElement('img');
        img.className = 'object-contain w-full h-20';
        img.src = partner.imageUrl;
        img.alt = partner.title;
        
        div.appendChild(img);
        cloneContainer.appendChild(div);
      });
    };
    
    cloneItems();

    // Start auto-scrolling
    startScrolling();

    return () => {
      stopScrolling();
    };
  }, [partners]);

  // Function to start automatic scrolling
  const startScrolling = () => {
    if (scrollIntervalRef.current) return;
    
    setIsScrolling(true);
    scrollIntervalRef.current = setInterval(() => {
      setScrollPosition(prev => {
        const totalWidth = partners.length * scrollStep;
        // Reset when we reach the end
        if (prev >= totalWidth) {
          return 0;
        }
        return prev + 1;
      });
    }, 30);
  };

  // Function to stop automatic scrolling
  const stopScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    setIsScrolling(false);
  };

  // Handle manual navigation
  const handlePrev = () => {
    stopScrolling();
    setScrollPosition(prev => {
      const totalWidth = partners.length * scrollStep;
      // Go to the end if at the beginning
      if (prev <= 0) {
        return totalWidth - scrollStep;
      }
      return Math.max(0, prev - scrollStep);
    });
  };

  const handleNext = () => {
    stopScrolling();
    setScrollPosition(prev => {
      const totalWidth = partners.length * scrollStep;
      // Go to the beginning if at the end
      if (prev >= totalWidth - scrollStep) {
        return 0;
      }
      return prev + scrollStep;
    });
  };

  // Resume auto-scrolling after a period of inactivity
  const handleAutoScrollResume = () => {
    if (!isScrolling) {
      const resumeTimeout = setTimeout(() => {
        startScrolling();
      }, 5000); // Resume after 5 seconds of inactivity
      
      return () => clearTimeout(resumeTimeout);
    }
  };

  useEffect(() => {
    handleAutoScrollResume();
  }, [isScrolling]);

  return (
    <div className="relative w-full max-w-6xl">
      {/* Navigation buttons */}
      <button 
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-80 text-gray-700 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
        aria-label="Previous partners"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-80 text-gray-700 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
        aria-label="Next partners"
      >
       <ChevronRight className="w-6 h-6 text-black" />
      </button>
      
      {/* Carousel container */}
      <div className="w-full overflow-hidden">
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={containerRef}
              className="flex transition-transform duration-300 ease-linear" 
              style={{ 
                willChange: 'transform',
                transform: `translateX(-${scrollPosition}px)` 
              }}
            >
              {partners.map((partner, index) => (
                <div 
                  key={`partner-${index}`} 
                  className="flex-shrink-0 px-4 partner-item"
                  style={{ width: '200px' }}
                >
                  <img 
                    className="object-contain w-full h-30" 
                    src={partner.imageUrl} 
                    alt={partner.title} 
                  />
                </div>
              ))}
            </div>
          </div>
          <div 
            ref={scrollRef}
            className="absolute top-0 left-full flex"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;