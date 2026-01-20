import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Team = () => {
    const members = [
        {
            name: "Abdun Nur",
            role: "Team Leader",
            author: "শিক্ষা ডেস্ক",
            img: "/images/nur-logo.png",
            facebook: "https://www.facebook.com/nur637788",
            instagram: "https://www.instagram.com/nur637788",
            linkedin: "https://www.linkedin.com/in/nur637788",
            email: "mailto:mdnoyon631234@gmail.com"
        },
        {
            name: "Samiul Alom",
            role: "CO-Team Leader",
            author: "খেলাধুলা ডেস্ক",
            img: "/images/nur-logo.png",
            facebook: "https://www.facebook.com/share/1GAsWMygM4/",
            instagram: "https://www.instagram.com/samiul__alom__?igsh=MWp5ZTllY2p4aHpvYg==",
            linkedin: "",
            email: "mailto:samiuljr60@gmail.com"
        },
        {
            name: "Fahim Ahmed",
            role: "Team Member",
            author: "নিউজ ডেস্ক",
            img: "/images/logo-image.png",
            facebook: "https://www.facebook.com/share/1ALmv7dvkF/",
            instagram: "https://www.instagram.com/fahim.md143?igsh=OGw5bmVub2dtcDk3",
            linkedin: "",
            email: "mailto:fahimahmed80051@gmail.com"
        },
        {
            name: "Tamjid",
            role: "Team Member",
            author: "স্টাফ রিপোর্টার",
            img: "/images/nur-logo.png",
            facebook: "https://www.facebook.com/share/17zZ7C5oAy/",
            instagram: "https://www.instagram.com/_tamzid_____?igsh=MW1haThyODNkeHUyOA==",
            linkedin: "",
            email: "mailto:toimurrahmantamzid@gmail.com"
        },
        {
            name: "Shahin Alom",
            role: "Team Member",
            author: "আবহাওয়া ডেস্ক",
            img: "/images/logo-image.png",
            facebook: "https://www.facebook.com/mdshahinalommim#",
            instagram: "",
            linkedin: "",
            email: "alom46909@gmail.com"
        },
        {
            name: "Kamrul Hasan",
            role: "Team Member",
            author: "স্পোর্টস ডেস্ক",
            img: "/images/nur-logo.png",
            facebook: "https://www.facebook.com/kamrul.hasan.shakib.647250",
            instagram: "",
            linkedin: "",
            email: "mailto:kamrulhasan7063@gmail.com"
        },
        {
            name: "Saju Ahmed",
            role: "Team Member",
            author: "ইকোনমিক রিপোর্টার",
            img: "/images/logo-image.png",
            facebook: "https://www.facebook.com/S4J8.S1",
            instagram: "https://www.instagram.com/s4j8.s1",
            linkedin: "",
            email: "mailto:its.me.saju.ahmed@gmail.com"
        },
        {
            name: "Fahim Faisal",
            role: "Team Member",
            author: "স্বাস্থ্য ডেস্ক",
            img: "/images/nur-logo.png",
            facebook: "https://www.facebook.com/share/1FdJC2uH1m/",
            instagram: "",
            linkedin: "",
            email: "mailto:sfs161377@gmail.com"
        },
    ];

    return (
        <div>
            <section className="bg-gray-200 py-5 px-4 md:px-10 text-white  min-h-screen rounded-xl">
                <div className=" mx-auto text-center">
                    <h1 className="text-2xl md:text-4xl font-bold text-green-700  mb-3" >
                        Our Honorable Team
                    </h1>
                    <p className="text-gray-600 mb-10">
                        Meet the dedicated team member of our 'News-Protal' Website who guide with knowledge and values.
                    </p>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5 ">
                        {members.map((person, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 rounded-2xl shadow-md hover:shadow-green-400/40 py-3 px-2  transition-transform hover:-translate-0.5 duration-300 ">
                                <div className="overflow-hidden border-2 border-green-500 rounded-full w-fit m-auto" >
                                    <img src={person.img} alt={person.name} loading="lazy"
                                        className="w-25 h-25 bg-blue-900 m-auto  object-cover  hover:scale-105 duration-300" />
                                </div>

                                <h3 className="text-xl mt-1 font-semibold text-green-700 dark:text-green-300">{person.name}</h3>
                                <p className="text-sm font-semibold text-red-100 ">{person.role}</p>
                                <p className="text-sm text-gray-400 ">{person.author}</p>

                                <div className="flex justify-between items-center mt-5 px-4">
                                    <span className="text-blue-400 hover:text-blue-500 text-xl hover:scale-110 duration-300"><a href={person.facebook} target="_blank"><FaFacebook /></a></span>

                                    <span className="text-pink-400 hover:text-pink-500 text-xl hover:scale-110 duration-300"><a href={person.instagram} target="_blank"><FaInstagram /></a></span>

                                    <span className="text-blue-600 hover:text-blue-700 text-xl hover:scale-110 duration-300"><a href={person.linkedin} target="_blank"><FaLinkedin /></a></span>

                                    <span className="text-gray-400 hover:text-gray-300 text-xl hover:scale-110 duration-300"><a href={person.email} target="_blank"><FaEnvelope /></a></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Team;
