import React from "react";
import { Link } from "react-router-dom";

const TeamAreaInner = () => {
  const teamMembers = [
    {
      id: 1,
      mainImg: "/img/creator-2/1.png",
      avatar: "/img/creator-2/u-1.png",
      name: "Alxender Pul",
      role: "CEO",
      delay: "200"
    },
    {
      id: 2,
      mainImg: "/img/creator-2/2.png",
      avatar: "/img/creator-2/u-2.png",
      name: "Simon Fraser",
      role: "CEO",
      delay: "300"
    },
    {
      id: 3,
      mainImg: "/img/creator-2/3.png",
      avatar: "/img/creator-2/u-3.png",
      name: "Simron",
      role: "CEO",
      delay: "400"
    },
    {
      id: 4,
      mainImg: "/img/creator-2/4.png",
      avatar: "/img/creator-2/u-4.png",
      name: "Robarl Nonal",
      role: "CEO",
      delay: "500"
    },
    {
      id: 5,
      mainImg: "/img/creator-2/5.png",
      avatar: "/img/creator-2/u-5.png",
      name: "Robart jr",
      role: "CEO",
      delay: "200"
    },
    {
      id: 6,
      mainImg: "/img/creator-2/6.png",
      avatar: "/img/creator-2/u-6.png",
      name: "Kader Jobber",
      role: "CEO",
      delay: "300"
    },
    {
      id: 7,
      mainImg: "/img/creator-2/7.png",
      avatar: "/img/creator-2/u-7.png",
      name: "Robarto nr",
      role: "CEO",
      delay: "400"
    },
    {
      id: 8,
      mainImg: "/img/creator-2/8.png",
      avatar: "/img/creator-2/u-8.png",
      name: "Jone Doe",
      role: "CEO",
      delay: "500"
    },
    {
      id: 9,
      mainImg: "/img/creator-2/9.png",
      avatar: "/img/creator-2/u-1.png",
      name: "Alex Ender",
      role: "CEO",
      delay: "200"
    },
    {
      id: 10,
      mainImg: "/img/creator-2/10.png",
      avatar: "/img/creator-2/u-2.png",
      name: "Alxen Derul",
      role: "CEO",
      delay: "300"
    },
    {
      id: 11,
      mainImg: "/img/creator-2/11.png",
      avatar: "/img/creator-2/u-3.png",
      name: "Fique dr",
      role: "CEO",
      delay: "400"
    },
    {
      id: 12,
      mainImg: "/img/creator-2/12.png",
      avatar: "/img/creator-2/u-4.png",
      name: "Vender Pul",
      role: "CEO",
      delay: "500"
    }
  ];

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M9.58317 3.8335L14.7498 9.00016M14.7498 9.00016L9.58317 14.1668M14.7498 9.00016L2.24984 9.00016"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-[#0D0D2B] to-[#1A1A3F]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="
                bg-[#161633]
                rounded-2xl
                overflow-hidden
                border
                border-[#242450]
                hover:border-[#6754F9]
                hover:shadow-lg
                hover:shadow-[#6754F9]/20
                relative
                transition-all
                duration-300
                flex
                flex-col
                items-center
                max-w-xs
                w-full
              "
              data-aos="fade-up"
              data-aos-delay={member.delay}
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={member.mainImg}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-1/2 pt-28 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full border-4 border-[#161633] shadow-lg overflow-hidden bg-[#232354]">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full  object-cover"
                  />
                </div>
              </div>
              <div className="pt-20 text-center w-full">
                <h5 className="text-2xl font-bold mb-1 text-white">
                  <Link
                    to="/creator-details"
                    className="hover:text-[#6754F9] transition-colors"
                  >
                    {member.name}
                  </Link>
                </h5>
                <span className="text-lime-400 font-semibold">{member.role}</span>
                <div className="h-0.5 w-16 bg-gradient-to-r from-[#6754F9] to-[#9D50FF] mx-auto my-4 rounded"></div>
                <Link
                  to="/creator-details"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#242450] text-white hover:bg-gradient-to-r hover:from-[#6754F9] hover:to-[#9D50FF] transition-all duration-300 "
                >
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamAreaInner;
