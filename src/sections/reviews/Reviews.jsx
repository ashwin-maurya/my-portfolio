import { useEffect, useState, useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// Sample review data
const reviews = [
  {
    name: "Kenzie Edgar",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium.",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Stevie Tifft",
    review:
      "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Chris Johnson",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus similique velit eaque soluta saepe illum delectus at architecto.",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Jane Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae incidunt soluta harum adipisci ut assumenda!",
    img: "https://i.pravatar.cc/100?img=4",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(2); // Default for larger screens
  const autoScrollRef = useRef(null);

  const totalReviews = reviews.length;

  // Update the number of reviews per page based on the screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setReviewsPerPage(1); // Show 1 review on mobile
      } else {
        setReviewsPerPage(2); // Show 2 reviews on larger screens
      }
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to show the next review
  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + reviewsPerPage >= totalReviews
        ? 0
        : prevIndex + reviewsPerPage
    );
  };

  // Function to show the previous review
  const showPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? totalReviews - reviewsPerPage
        : prevIndex - reviewsPerPage
    );
  };

  // Set up auto-scroll with reset on button click
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(showNext, 3000);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };

    startAutoScroll();

    return () => stopAutoScroll();
  }, [reviewsPerPage]);

  // Reset auto-scroll timer when manually navigating
  const resetAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(showNext, 3000);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full mx-auto">
        <div className="text-center mx-auto">
          <h1 className="text-[6vw] md:text-[1.5vw] font-bold mb-2 whitespace-nowrap text-gray-600">
            What people are saying.
          </h1>

          <div className="text-center mb-5">
            <span className="inline-block w-[1vw] 3xl:h-2 h-1 rounded-full bg-gray-500 ml-1"></span>
            <span className="inline-block w-[3vw] 3xl:h-2 h-1 rounded-full bg-gray-500 ml-1"></span>
            <span className="inline-block w-[15vw] 3xl:h-2 h-1 rounded-full bg-gray-500 ml-1"></span>
            <span className="inline-block w-[3vw] 3xl:h-2 h-1 rounded-full bg-gray-500 ml-1"></span>
            <span className="inline-block w-[1vw] 3xl:h-2 h-1 rounded-full bg-gray-500 ml-1"></span>
          </div>
        </div>

        {/* Review Slider */}
        <div className="relative flex justify-center items-center w-[95vw] md:max-w-[80vw] mx-auto">
          {/* Chevron buttons */}
          <button
            className="absolute left-0 z-10 bg-gray-800 text-white md:p-2 rounded-full"
            onClick={() => {
              showPrev();
              resetAutoScroll();
            }}
          >
            <BiChevronLeft className="text-[8vw] md:text-[2vw]" />
          </button>

          <div className="flex overflow-hidden gap-10 w-full h-full justify-center items-center py-10">
            {reviews
              .slice(currentIndex, currentIndex + reviewsPerPage)
              .map((review, index) => (
                <div
                  key={index}
                  className="h-full w-[80vw] md:w-[30vw] rounded-lg bg-white border border-gray-200 py-[6vw] md:py-[2vw] p-[2vw] text-gray-800 font-light"
                >
                  <div className="w-full flex flex-col md:mb-4 items-center">
                    <div className="overflow-hidden rounded-full  md:w-[3vw] w-[15vw] md:h-[3vw] h-[15vw] bg-gray-50 border border-gray-200">
                      <img
                        src={review.img}
                        alt=""
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                    <h6 className="font-bold  text-[5vw] md:text-[1.2vw] md:mt-2 text-center uppercase font-PlayfairDisplay text-gray-600">
                      {review.name}
                    </h6>
                  </div>
                  <div className="w-full mt-5 md:line-clamp-3">
                    <p className="text-xl md:text-[1vw] font-proximanova text-center leading-tight">
                      {review.review}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <button
            className="absolute right-0 z-10 bg-gray-800 text-white md:p-2 rounded-full"
            onClick={() => {
              showNext();
              resetAutoScroll();
            }}
          >
            <BiChevronRight className="text-[8vw] md:text-[2vw]" />
          </button>
        </div>
      </div>
    </div>
  );
}
