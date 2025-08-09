import React from "react";
import '../Data/DevelopmentTeam';
import { Link } from "react-router-dom";
import { devteamarray } from "../Data/DevelopmentTeam";

export default function DevTeam() {
  return (
    <section className="py-12 px-6 sm:px-12 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-green-600 !mb-8 text-center">
        Development Team
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {devteamarray.map((member, index) => (
            <Link
            to={member.socialLink}
            key={index}
            className="flex flex-col items-center w-[70vw] md:w-[30%] bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 p-6"
            >
            {/* Image on Top */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
                />
            </div>

            {/* Details */}
            <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
            </div>
            </Link>
        ))}
        </div>
    </section>
  );
}
