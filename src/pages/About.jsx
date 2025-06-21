import React from "react";
import Images from '../Images/em-logo.jpeg';

const About = () => {
    return(
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
              If you're looking for a partner to help you create memorable
              events, look no further. Contact us today to learn more about our
              services!
            </p>
          </div>
        </div>
      </section>


         <div className="mt-5">
                    
            <div className="bg-black text-white p-10">
        <div className="flex flex-wrap justify-center md:justify-between">
        <div className="w-full md:w-1/4 mb-5 md:mb-0">
          <h3 className="text-lg font-semibold text-pink-500 mb-2">About Us</h3>
          <p className="text-sm">If you're looking for a partner to help you create memorable events, look no further. Contact us today to learn more about our services!</p>
        </div>
        <div className="w-full md:w-1/4 mb-10 md:mb-0">
          <h3 className="text-lg font-semibold text-pink-500 mb-2">Contact Us</h3>
          <p className="text-sm">Email: rajvi77@gmail.com</p>
          <p className="text-sm">Phone: +91 9727916009</p>
          <div className="flex justify-start mt-2">
            <a href="https://facebook.com" target="_blank" className="mr-4 text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" className="mr-4 text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-10 md:mb-0">
          <h3 className="text-lg font-semibold text-pink-500 mb-2">Visit Us</h3>
          <div className=" ">
            <iframe className="w-full  border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.019984282839!2d-122.0842496846923!3d37.42206597982571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2f2b9e3b%3A0x2b0b7e1b2b0b7e1b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" allowFullScreen></iframe>
      </div>
    </div>
 
  </div>
      <div className="text-center mt-10">
        <p>&copy; <span id="year"></span> EM RD. All rights reserved.</p>
      </div>
    </div>

        </div>

         </div>
  

        </>
    )
}
export default About