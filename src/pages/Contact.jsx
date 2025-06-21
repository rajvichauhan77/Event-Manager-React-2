import React from "react";

const Contact = () => {
    return(
        <>

          <div className="p-13">

                       <section>
        <div className="container mx-auto p-10 shadow-lg rounded-lg">
          <div className="text-center mb-10">
            <h1 className="text-4xl my-5 font-semibold text-pink-500">Reach Us</h1>
            <p className="text-lg text-gray-600">If you're looking for a partner to help you create memorable events, look no further. Contact us today to learn more about our services!</p>
          </div>
        </div>
      </section>

        <section>
  <div className="container mx-auto p-10 shadow-lg rounded-lg mt-10">
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 p-5">
        <h1 className="text-4xl font-semibold text-pink-500">Contact Us</h1>
        <p className="text-lg text-gray-600">Contact us today to learn more about our services!</p>
      </div>
      <div className="w-full md:w-2/3 p-5 shadow-lg rounded-lg bg-gray-100">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 p-5">
            <h5 className="text-lg font-semibold text-pink-500 mb-2">Working Hours</h5>
            <p>Weekdays : 8am to 8pm</p>
            <p>Weekend : 6am to 9pm</p>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <h5 className="text-lg font-semibold text-pink-500 mb-2">Where are we?</h5>
            <p>Gyanmanjari institute of technology, sidsar road, Bhavnagar.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container mx-auto p-10 shadow-lg rounded-lg mt-10">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193662.120542944!2d-112.364058!3d40.674616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1719314636508!5m2!1sen!2sus" className="w-full h-96"></iframe>
  </div>
</section>

<section className="my-10">
  <div className="container mx-auto p-10 shadow-lg rounded-lg mt-10">
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/3 p-5">
        <h3 className="text-lg font-semibold my-4 text-pink-500">Payment Options</h3>
        <button className="bg-gray-400 mx-2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Cash</button>
        <button className="bg-gray-400 mx-2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Card</button>
        <button className="bg-gray-400 mx-2 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Online</button>
        <p>&copy; event manager</p>
      </div>

      {/* <div className="w-full md:w-1/3 p-5">
        <h3 className="text-lg font-semibold text-pink-500">Follow Us</h3>
        <a href="https://www.facebook.com/login/" className="text-blue-600 hover:text-blue-800" target="_blank"><i className="ri-facebook-fill"></i></a>
        <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D" className="text-blue-400 hover:text-blue-600" target="_blank"><i className="ri-twitter-fill"></i></a>
        <a href="https://in.pinterest.com/#top" className="text-red-600 hover:text-red-800" target="_blank"><i className="ri-pinterest-fill"></i></a>
      </div> */}

      <div className="w-full md:w-1/3 p-5">
        <h3 className="text-lg font-semibold text-pink-500">We Accept</h3>
        <ul>
          <li><i className="ri-arrow-right-circle-fill"></i> Visa Cards</li>
          <li><i className="ri-arrow-right-circle-fill"></i> Master Cards</li>
          <li><i className="ri-arrow-right-circle-fill"></i> Other Cards</li>
        </ul>
      </div>
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
export default Contact
