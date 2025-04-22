import React from "react";

const AdvertiseWithUs = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/src/assets/Footer/footer.png')" }}>
      {/* Background image with content section */}
      <div className="bg-black bg-opacity-70 min-h-screen px-4 py-12 text-white">
        <div className="max-w-6xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6 md:p-12 text-black">
          <h1 className="text-4xl font-bold text-center mb-8">Advertise With Us</h1>
          
          {/* Main Content Section */}
          <section className="mb-8 space-y-4">
            <p className="text-sm md:text-base text-gray-700">
              The News's independent editorial stand and its reliable and balanced presentation of the news have over the years won serious attention and regard of the people who matter in India and abroad. We offer a wide range of multi-platform solutions to access a global audience who wants to understand and engage with the world.
            </p>

            <p className="text-sm md:text-base text-gray-700">
              Contact our specialist now to help you build solutions that will exceed your expectations.
            </p>
          </section>

          {/* Contact Information Section */}
          <section className="mb-8">
            <h4 className="text-base md:text-lg font-semibold">Get in Touch</h4>
            <ul className="mt-4 space-y-2">
              <div className="text-sm md:text-base">
                <strong>Advertisement Queries (Print)</strong>
                <li className="text-black hover:underline break-words">
                  <a href="mailto:inetads@thehindu.co.in">inetads@thehindu.co.in</a> (Print)
                </li>
              </div>

              <div className="text-sm md:text-base">
                <strong>Advertisement Queries (Online-International)</strong>
                <li className="text-black hover:underline break-words">
                  <a href="mailto:digital.global@thehindu.co.in">digital.global@thehindu.co.in</a> (Online - International)
                </li>
              </div>

              <div className="text-sm md:text-base">
                <strong>Advertisement Queries (Online)</strong>
                <li className="text-black hover:underline break-words">
                  <a href="mailto:digital@thehindu.co.in">digital@thehindu.co.in</a> (Online)
                </li>
              </div>

              <div className="text-sm md:text-base">
                <strong>Advertisement Queries (International)</strong>
                <li className="text-black hover:underline break-words">
                  <a href="mailto:international@thehindu.co.in">international@thehindu.co.in</a> (International)
                </li>
              </div>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseWithUs;
