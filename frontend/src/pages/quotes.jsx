import React, { useEffect, useState } from 'react';
import Nav_logged_in from '../components/Nav_logged_in';
import '../animations/quotes.css';

const Quotes = () => {
  const [fade, setFade] = useState(false);
  const [showContent, setShowContent] = useState(false); // State to manage content visibility

  const quoteSelected = "Don't leave until tomorrow, what you can do today";
  const quoteFirst = "Raphael ";
  const quoteLast = "Rodriguez";

  // Function to handle content visibility after 5 seconds
  const handleContentVisibility = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 4000);
  };

  useEffect(() => {
    // Start counting 5 seconds for content visibility
    handleContentVisibility();

    // Start fading animation after 1.5 seconds
    const timer = setTimeout(() => {
      setFade(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`h-screen transition-colors duration-1000 bg-white ${fade ? 'fade-to-black' : ''}`}>
      <div className="sticky top-0 border-b border-black">
        <Nav_logged_in/>
      </div>

      <h1 className="fade-text font-100 text-[25px] pt-20 text-center">
        Quote of the Day...
      </h1>

      <div className="font-100 text-box mx-auto">
        <h1 className="pt-5 text-[25px] text-white text-center">
          {quoteSelected}
        </h1>

        <h1 className="pt-10 text-[18px] text-white text-center">
          -{quoteFirst} {quoteLast}
        </h1>
      </div>

      {/* Apply invisible class conditionally */}
      <div className={`pt-8 ${showContent ? '' : 'invisible'}`}>
        <li className="mx-auto animate-pulse items-center hover:bg-[#E0D9F1] w-[200px] h-[40px] flex bg-[#ffffff] font-semibold rounded-full border border-black">
          <button className="mx-auto block text-black text-[12px]">
            Connect with {quoteFirst}
          </button>
        </li>
        <div class="pt-2">
        <li className="mx-auto items-center hover:bg-[#8F8F8F] w-[150px] h-[30px] flex bg-[#C1C1C1] font-semibold rounded-full border border-black">
          <button className="mx-auto block text-black text-[12px]">
            Discover more quotes
          </button>
        </li>
        </div>
      </div>

    </div>
  );
};

export default Quotes;
