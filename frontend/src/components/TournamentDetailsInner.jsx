import React from "react";
import { Link } from "react-router-dom";

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

const TournamentDetailsInner = () => {
  return (
    <>
     {/* tournament-details area start */}
<div className="pt-24 bg-[#0b1120] h-[1220px]">  {/* Adjusted min-h */}
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-wrap justify-between">
      {/* Left Section - Image Grid and Description */}
      <div className="lg:w-2/3 w-full px-3 mb-4 lg:mb-0" data-aos="fade-up" data-aos-delay="300">  {/* Adjusted margin-bottom */}
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="row-span-2 col-span-1">
            <img className="w-full h-full object-cover rounded-md" src="/img/tournament/11.png" alt="img" data-aos="fade-up" data-aos-delay="400" />
          </div>
          <div className="gap-2">
            <img className="w-full h-50 object-cover rounded-md mb-3" src="/img/tournament/12.png" alt="img" data-aos="fade-up" data-aos-delay="500" />
            <img className="w-full h-51 object-cover rounded-md" src="/img/tournament/13.png" alt="img" data-aos="fade-up" data-aos-delay="600" />
          </div>
        </div>

        {/* Tournament Info + Join Now */}
        <div className="flex flex-wrap justify-between items-center mb-8" data-aos="fade-up" data-aos-delay="700">
          <h2 className="flex items-center text-[2rem] font-extrabold text-white tracking-tight">
            <img src="/img/team/info1.png" alt="icon" className="mr-2 w-10 h-10" />
            About Alxender Pul
          </h2>
          <Link className="bg-[#e6fe46] hover:bg-[#d4ec3a] text-gray-900 text-lg font-bold py-2 px-8 rounded-md flex items-center shadow transition" to="#">
            Join Now
            <img className="ml-2 w-7 h-7" src="/img/team/info2.png" alt="join" />
          </Link>
        </div>

        {/* Prize & Win Time */}
        <div className="flex flex-wrap items-center border-b border-[#232c37] pb-4 mb-6 gap-y-4" data-aos="fade-up" data-aos-delay="800">
          <div className="flex items-center mr-12">
            <div className="text-gray-400 font-semibold text-base mr-2">PRIZE MONEY</div>
            <span className="flex items-center text-[#e6fe46] font-bold text-lg">
              <img src="/img/1.png" alt="coin" className="w-6 h-6 mr-2" />
              $15000
            </span>
          </div>
          <div className="flex items-center mr-12">
            <div className="text-gray-400 font-semibold text-base mr-2">WIN TIME</div>
            <span className="flex items-center text-gray-300 font-bold text-lg">
              <i className="fa fa-clock mr-2" />
              5 TIME
            </span>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <Link to="#" className="text-[#b6bece] text-lg hover:text-[#e6fe46] mr-2">
              <i className="fa fa-share-alt" />
            </Link>
            <Link to="#" className="text-[#b6bece] hover:text-blue-600 mr-2">
              <i className="fab fa-facebook" />
            </Link>
            <Link to="#" className="text-[#b6bece] hover:text-blue-500 mr-2">
              <i className="fab fa-twitter" />
            </Link>
            <Link to="#" className="text-[#b6bece] hover:text-pink-500">
              <i className="fab fa-pinterest" />
            </Link>
          </div>
        </div>

        {/* Description */}
        <div data-aos="fade-up" data-aos-delay="900">
          <p className="text-gray-300 mb-2 leading-relaxed">
            Do think your skin should look and refhed matted Nourish your outecon secture’arew inner deauty with our essential infused include hits like have the best online games. From its medieval origins to the digital erare learn everything there is to know about the ubiquitous lorem ipsum.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We think your skin should look and refhed matted Nourish your outecon secture’arew inner deauty with our essential infused include hits like have the best online games. From its medieval origins to the digital erare learn everything there is to know about the ubiquitous lorem ipsum passage surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90ths as desktop publishers bundled the text with their software.
          </p>
        </div>

        {/* Game Info */}
        <div data-aos="fade-up" data-aos-delay="1000">
          <h4 className="text-xl font-extrabold mb-4 tracking-wide text-white">
            Game <span className="text-[#e6fe46] font-extrabold">Info</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {['4 Player', '4 Player', '4 Player'].map((teamSize, index) => (
              <div key={index} className="bg-[#131927] rounded-lg p-5 shadow flex flex-col items-center">
                <div className="flex justify-between items-center w-full mb-2">
                  <img src="/img/icon/8.png" alt="img" className="w-8 h-8" />
                  <img src="/img/icon/11.png" alt="img" className="w-8 h-8" />
                </div>
                <div className="text-white font-bold mb-1">Team size</div>
                <span className="text-[#e6fe46] text-base font-bold">{teamSize}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Enquiry & Matches */}
      <div className="lg:w-1/3 w-[320px] min-h-[1400px] px-3" data-aos="fade-up" data-aos-delay="300">  {/* Adjusted height */}
        <div className="bg-[#131927] rounded-xl p-7 shadow mb-8 border border-[#222c38]">
          <div className="mb-4 border-b border-[#222c38] pb-3">
            <span className="block text-[#e6fe46] text-2xl font-extrabold tracking-tight leading-tight">
              CHECK <span className="text-white">HOME ENQUIRY</span>
            </span>
          </div>
          <form>
            <label className="block uppercase text-xs text-gray-400 mb-1">Your Name *</label>
            <input type="text" placeholder="Name" className="w-full mb-4 rounded-md bg-[#101726] border border-[#234] px-4 py-2 text-gray-200 focus:ring-1 focus:ring-[#e6fe46] outline-none" />
            <label className="block uppercase text-xs text-gray-400 mb-1">Email *</label>
            <input type="email" placeholder="Email" className="w-full mb-4 rounded-md bg-[#101726] border border-[#234] px-4 py-2 text-gray-200 focus:ring-1 focus:ring-[#e6fe46] outline-none" />
            <label className="block uppercase text-xs text-gray-400 mb-1">Phone *</label>
            <input type="text" placeholder="Phone" className="w-full mb-4 rounded-md bg-[#101726] border border-[#234] px-4 py-2 text-gray-200 focus:ring-1 focus:ring-[#e6fe46] outline-none" />
            <label className="block uppercase text-xs text-gray-400 mb-1">Your Inquiry *</label>
            <textarea placeholder="Message" className="w-full mb-3 rounded-md bg-[#101726] border border-[#234] px-4 py-2 text-gray-200 focus:ring-1 focus:ring-[#e6fe46] outline-none" rows={3} />
            <div className="flex items-center mb-4">
              <input type="checkbox" className="accent-[#e6fe46] mr-2" />
              <span className="text-sm text-gray-400">* I agree with Terms of Service.</span>
            </div>
            <button type="submit" className="w-full bg-[#e6fe46] text-gray-900 font-bold py-3 rounded-md text-lg transition hover:bg-[#d4ec3a]">
              Submit Enquiry
            </button>
          </form>
        </div>

        {/* Trending Match Widget */}
        <div className="bg-[#131927] w-[317px] h-[320px] rounded-xl p-5 shadow border border-[#222c38]">
          <h3 className="uppercase text-xl text-white font-extrabold mb-5 tracking-wider">Trending Match</h3>
          <ul>
            {['5', '6', '7'].map((match, index) => (
              <li key={index} className="flex items-center mb-5 last:mb-0">
                <img src={`/img/tournament/${match}.png`} alt="img" className="w-14 h-14 rounded mr-4 object-cover" />
                <div>
                  <div className="text-white font-bold text-lg mb-1">Crack Head</div>
                  <div className="flex items-center">
                    <span className="text-[#e6fe46] font-bold text-base flex items-center">
                      <img src="/img/1.png" alt="img" className="w-5 h-5 mr-1" /> $15000
                    </span>
                    <img className="ml-3 w-6 h-6" src="/img/icon/11.png" alt="icon" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* schedule-details area start */}
      <div className="bg-[#181f31] py-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section title */}
          <div className="mb-12">
            <h6 className="text-base font-bold text-[#e6fe46] uppercase tracking-widest mb-2">Schedule</h6>
            <h2 className="text-4xl font-extrabold text-white tracking-wide leading-snug mb-2">Match Schedule</h2>
            <div className="mx-auto w-20 h-1 rounded-lg bg-[#e6fe46]"></div>
          </div>

     {/* Schedule cards */}
<div className="grid grid-cols-1 pl-14 lg:grid-cols-3 gap-3">
  {['1', '2', '3'].map((round, index) => (
    <div
      key={index}
      className="bg-[#232b3d] border border-[#20283a] rounded-2xl px-5 py-4 text-left flex flex-col shadow-xl transition hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-[#e6fe46] group w-80" // Increased left-right padding
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-sm font-bold text-[#e6fe46] uppercase">Round {round}</span>
          <h6 className="text-lg font-extrabold text-white mt-2 leading-normal">April 20 <span className="text-[#b8bdc0] font-medium">18 : 00</span></h6>
        </div>
        <img src="/img/icon/12.png" alt="img" className="w-4 h-4 group-hover:scale-105 transition" />
      </div>
      <div className="flex items-center gap-5">
        <span className="text-xs text-gray-400 font-semibold flex items-center">
          <i className="fa fa-clock mr-1 text-[#e6fe46]" /> Duration: 35 min
        </span>
      </div>
    </div>
  ))}
</div>


          {/* Schedule Image */}
          <div className="mt-14 flex justify-center">
            <img
              src="/img/schedule.png"
              alt="img"
              className="w-[1115px] h-[1138px] rounded-2xl shadow-lg bg-[#171f2e]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TournamentDetailsInner;  