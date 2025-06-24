import React from "react";
import Images from '../Images/em-logo.jpeg';
import Photographer from "../components/Phographer";
import { useState } from "react";
import CatererCard from "../components/CatererCard";
import CatererModal from "../components/CatererModel";


const photographersData = [
  {
    id: 1,
    name: "Rohan Patel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1MPTtbcMFCm9jnX2DT4ta8cqimHKD_RU-oA&s",
    expertise: "Specialist in wedding & candid photography",
    quote: "Capturing real emotions is my passion.",
    // Additional details for the modal
    description:
      "Rohan has over 10 years of experience capturing beautiful moments at weddings and events. His keen eye for candid shots sets him apart.",
    extraPhotos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQKL3bXaSwV-SUUxEj2QhskURHB4yeRI6vFD7jYoMM0xv8Jtghc8QvRHYvFAywqN64Ig&usqp=CAU", 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpArIxtMtv8CaEte_mi3j5sRpbWUTXnfxAEjyJ-oH2Ekvbn2WsyeI3FLEmWn34QJ93Q1c&usqp=CAU"],
  },
  {
    id: 2,
    name: "Meera Shah",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTym8xnR5c-nxLNk5yp4RlXskYpHMiblcztLg&s",
    expertise: "Expert in fashion & pre-wedding shoots",
    quote: "Every frame tells a story.",
    description:
      "Meera specializes in fashion and pre-wedding photography with a creative touch that brings out the personality in every shot.",
    extraPhotos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7ITo3m6fL0_WJkmkbHWFD9ksgUpGkGKCIb-vMHcAjEZO0OfRCV6EATj8PSEFuWIYKqc&usqp=CAU",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Ekz0rz07qoUSFvcvgMOK7aKYtTFbNHp_AA&s"],
  },
  {
    id: 3,
    name: "Ankit Joshi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYyaZf-7rTqZjK3aDY1t5wWrt2yKh4IB1Jw&s",
    expertise: "Corporate event & product photographer",
    quote: "Details matter — every click counts.",
    description:
      "Ankit has a knack for capturing the essence of corporate events and product aesthetics. His work speaks volumes about precision.",
    extraPhotos: ["https://www.candidshutters.media/wp-content/uploads/2020/10/Annual-Dealer-Meet-Photography-Commercial-Corporate-Photography-Delhi-MICE-event-photography-Gurgaon-21.jpg.webp",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7e30sX9Hn1loj83vhenosVoZTACe1fYQtVxTeXBq6zehE0cbUiMCUKb2NP0krRVXWprs&usqp=CAU"],
  },
];



const caterers = [
  {
    name: "Shubh Caterers",
    specialty: "Gujarati & Punjabi cuisine expert",
    quote: "Traditional taste with modern service.",
    image: "https://www.eternalweddingz.in/storage/vendor_images/tVxArZ5YoPDG9hYWTEQe2ggHOaGHbYRT6iwpM0yq.webp",
    workImages: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSqFO3oB340LghwhBLLMoGyLWm_HDiYiv7g3cZqNVy6BMmmRfuELVRlqxt9kqQKta6Ow&usqp=CAU",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrt83Pjtjumeg3rcZkLo8Lpk-MePWnclceg0XsxOlJvx7FB3SDZGBtQkqdN0ZCa0DZwM&usqp=CAU"],
    bio: "With over 15 years of experience, They brings authentic flavors and high-class service to every event. Famous for thalis and sweets.",
  },
  {
    name: "Punjabi Point Catrers",
    specialty: "Continental & live food counters",
    quote: "A taste of every continent.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FjfYt8YMPcnfe3-gUfbSRXlT2RnTrMfUDKrYZhNvM0v_PIOZ_JGBWwGmftz7s4R-8sU&usqp=CAU",
    workImages: ["https://akm-img-a-in.tosshub.com/lingo/brt/images/story/202405/66339dfa4f3e0-catering-020649149-16x9.png",
       "https://content.jdmagicbox.com/comp/def_content/caterers/default-caterers-12.jpg"],
    bio: "A top-tier catering company with a flair for creativity, They adds live counters, themed cuisine, and international dishes to events.",
  },
];


const About = () => {
  // State for modal open/close and selected photographer
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);

  const [activeCaterer, setActiveCaterer] = useState(null);

  // Function to open the modal with a specific photographer's details
  const openModal = (photographer) => {
    setSelectedPhotographer(photographer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhotographer(null);
  };

  return (
    <>
      <div className="p-13">
        <section>
          <div className="container mx-auto mt-20 p-10">
            <h1 className="text-4xl font-bold italic mb-10 font-semibold text-pink-500">
              About Us :
            </h1>
            <div className="flex flex-wrap justify-center mb-10">
              <div className="w-full md:w-1/2 p-5">
                <div className="box">
                  <img
                    src={Images}
                    alt="About Us"
                    className="w-sm h-auto rounded-lg shadow-lg p-5"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-5">
                <div className="box p-5">
                  <h3 className="text-2xl font-bold mb-5 font-semibold text-pink-500">
                    Who We Are
                  </h3>
                  <p className="text-lg">
                    At Event Manager, we are passionate about creating unforgettable
                    experiences. Our team of dedicated professionals specializes in
                    organizing a wide range of events, from corporate gatherings to
                    personal celebrations.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-pink-500 mb-5">
                Our Mission
              </h3>
              <p className="text-lg mb-10">
                Our mission is to provide exceptional event management services
                that exceed our clients' expectations. We strive to deliver
                innovative solutions tailored to each event, ensuring every detail
                is meticulously planned and executed.
              </p>
              <h3 className="text-2xl font-semibold text-pink-500 mb-5">
                Why Choose Us?
              </h3>
              <ul className="list-disc list-inside mb-10">
                <li className="text-lg">
                  <strong>Expert Team:</strong> Our experienced team knows how to
                  bring your vision to life.
                </li>
                <li className="text-lg">
                  <strong>Customized Solutions:</strong> We tailor our services to
                  meet your specific needs.
                </li>
                <li className="text-lg">
                  <strong>Comprehensive Services:</strong> From planning to
                  execution, we handle every aspect of your event.
                </li>
                <li className="text-lg">
                  <strong>Client Satisfaction:</strong> Your satisfaction is our
                  top priority!
                </li>
              </ul>
              <h3 className="text-2xl font-semibold text-pink-500 mb-5">
                Join Us on This Journey!
              </h3>
              <p className="text-lg">
                If you're looking for a partner to help you create memorable events,
                look no further. Contact us today to learn more about our services!
              </p>
            </div>

            {/* Photographers Section */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold text-pink-500 mb-5">Our Photographers</h3>
              <p className="text-lg mb-10">
                Meet our talented photographers who capture unforgettable moments at every event.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {photographersData.map((photographer) => (
                  <div key={photographer.id} className="bg-white rounded-lg shadow-lg p-5 text-center">
                    <img
                      src={photographer.image}
                      alt={photographer.name}
                      className="w-full h-60 object-cover rounded-md mb-4"
                    />
                    <h4 className="text-xl font-bold text-pink-500">{photographer.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{photographer.expertise}</p>
                    <p className="text-sm mb-3">“{photographer.quote}”</p>
                    <button
                      onClick={() => openModal(photographer)}
                      className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



      {/* {Cateres } */}
      <section>
           <div className="mb-20 p-10">
              <h3 className="text-2xl font-semibold text-pink-500 mb-5">Our Caterers</h3>
              <p className="text-lg mb-10">Delicious food prepared by our trusted catering partners.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {caterers.map((caterer, index) => (
                  <CatererCard
                    key={index}
                    caterer={caterer}
                    onMoreClick={() => setActiveCaterer(caterer)}
                  />
                ))}
              </div>

              <CatererModal
                isOpen={!!activeCaterer}
                caterer={activeCaterer}
                onClose={() => setActiveCaterer(null)}
              />
            </div>
      </section>
      {/* {Cateres } */}


        {/* Footer Section */}
        <div className="mt-5">
          <div className="bg-black text-white p-10">
            <div className="flex flex-wrap justify-center md:justify-between">
              <div className="w-full md:w-1/4 mb-5 md:mb-0">
                <h3 className="text-lg font-semibold text-pink-500 mb-2">About Us</h3>
                <p className="text-sm">
                  If you're looking for a partner to help you create memorable events,
                  look no further. Contact us today to learn more about our services!
                </p>
              </div>
              <div className="w-full md:w-1/4 mb-10 md:mb-0">
                <h3 className="text-lg font-semibold text-pink-500 mb-2">Contact Us</h3>
                <p className="text-sm">Email: rajvi77@gmail.com</p>
                <p className="text-sm">Phone: +91 9727916009</p>
                <div className="flex justify-start mt-2">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="mr-4 text-white hover:text-gray-400">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="mr-4 text-white hover:text-gray-400">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-gray-400">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/4 mb-10 md:mb-0">
                <h3 className="text-lg font-semibold text-pink-500 mb-2">Visit Us</h3>
                <div>
                  <iframe
                    className="w-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.019984282839!2d-122.0842496846923!3d37.42206597982571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2f2b9e3b%3A0x2b0b7e1b2b0b7e1b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                    allowFullScreen
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <p>&copy; <span id="year"></span> EM RD. All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* Render Photographer */}
        <Photographer
          isOpen={isModalOpen}
          onClose={closeModal}
          photographer={selectedPhotographer}
        />
      </div>
    </>
  );
};

export default About;
