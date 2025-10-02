import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS

const tournaments = [
  {
    icon: "/img/tournament/7.png",
    badge: "bg-blue-500",
    title: "Escape Room",
  },
  {
    icon: "/img/tournament/8.png",
    badge: "bg-yellow-500",
    title: "Escape Room",
  },
  {
    icon: "/img/tournament/9.png",
    badge: "bg-purple-500",
    title: "Escape Room",
  },
  {
    icon: "/img/tournament/10.png",
    badge: "bg-red-500",
    title: "Escape Room",
  },
];

const TournamentInner = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with options
  }, []);

  return (
    <div className="m-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {tournaments.map((tour, idx) => (
          <div
            key={idx}
            className="bg-[#232b3d] rounded-2xl shadow-lg p-6 flex flex-col justify-between relative overflow-hidden"
            data-aos="fade-up" // Add AOS attribute for fade-up animation
            data-aos-delay={`${idx * 100}`} // Delay animation for each card
          >
            {/* Top Icon and Title */}
            <div className="flex items-center gap-4">
              <img src={tour.icon} alt="icon" className="w-14 h-14" />
              <div>
                <h6 className="uppercase text-sm text-gray-300 font-semibold tracking-wide">Action</h6>
                <h4 className="text-white text-2xl font-bold mb-0">{tour.title}</h4>
              </div>
              {/* Arrow */}
              <Link to="/tournament-details" className="ml-auto hover:scale-110 transition">
                <svg width={26} height={26} fill="none" viewBox="0 0 22 22">
                  <image
                    x="0px"
                    y="0px"
                    width="22px"
                    height="22px"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEX///9NTk3ExMSIiYj////h4eGmpqb///9/FIABAAAAB3RSTlMAHJNWza90vjA1FgAAAAFiS0dEAIgFHUgAAAAHdElNRQfoCQIXHjaTSIYGAAAAbElEQVQY00XNwQmAMAyF4UcVz+IEIl1AEJygeNUNREq9iyXr29SmeaeP/5AAwDDxRvBW4rmevWTTwe5CCBfRgzJDFMVWbTZ3i+27i1OGOGUxZzHn4pyLc/79Z/hYM5q5Zj2iL2VeM1rNwFn1Aeb+IAGtAecIAAAAAElFTkSuQmCC"
                  />
                </svg>
              </Link>
            </div>

            {/* Divider line */}
            <div className="h-px bg-gray-700 my-6"></div>

            {/* Prize / Time / Status */}
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-xs text-gray-400">PRIZE</span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#d6ff3e]">
                  <img src="/img/1.png" alt="coin" className="inline w-5 h-5" />$35000
                </span>
              </div>
              <div>
                <span className="block text-xs text-gray-400">TIME</span>
                <span className="inline-flex items-center gap-1 font-medium text-gray-200">
                  <i className="fa fa-clock" aria-hidden="true" />
                  0H : 30M
                </span>
              </div>
              <div>
                <Link
                  to="#"
                  className="bg-gray-800 text-white px-5 py-2 rounded-lg shadow font-bold hover:bg-gray-700 transition"
                >
                  live Now <i className="fa fa-arrow-right ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentInner;
