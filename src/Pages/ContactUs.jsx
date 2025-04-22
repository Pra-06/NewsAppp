import React from "react";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/Footer/footer.png')" }} // Updated image path
    >
      {/* Background image with heading on top */}
      <div className="bg-black bg-opacity-70 min-h-screen px-4 py-12 text-white">
        <div className="max-w-6xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6 md:p-12 text-black">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

          {/* Contact details + map section */}
          <section className="flex flex-col md:flex-row gap-8">

            {/* Left side: Contact Info */}
            <div className="w-full md:w-2/3 space-y-4">
              <div className="border rounded p-3 shadow-sm">
                <h4 className="font-semibold">1. Send us an email:</h4>
                <p className="text-sm mt-1">
                  If you are facing any issue or for feedback, write to us at<br />
                  <a
                    href="mailto:info@spotacta.com"
                    className="text-gray-400 hover:underline"
                  >
                    info@spotacta.com
                  </a>
                </p>
              </div>

              <div className="border rounded p-3 shadow-sm">
                <h4 className="font-semibold">2. Pick up the phone and call us 24*7:</h4>
                <p className="text-gray-400 text-sm mt-1">
                  9988885555<br />
                  <span className="text-gray-900 text-xs">(standard STD/local charges apply)</span>
                </p>
              </div>

              <div className="border rounded p-3 shadow-sm">
                <h4 className="font-semibold">3. Send snail mail to this address</h4>
                <p className="text-sm mt-1">
                  <strong>The News Pvt. Ltd.</strong><br />
                  3rd & 4th Floors, Merad, East<br />
                  Manikshnagar, Mumbai - 879995
                </p>
              </div>

              <div className="border rounded p-3 shadow-sm">
                <h4 className="font-semibold">4. Grievance Redressal - Nodal Officer</h4>
                <p className="text-sm mt-1">
                  <strong>Devendra Raut</strong><br />
                  <a
                    href="mailto:nodal.officer@spotacta.com"
                    className="text-gray-400 hover:underline"
                  >
                    nodal.officer@spotacta.com
                  </a><br />
                  2nd, 3rd & 4th Floors, 1137, RG Towers<br />
                  100ft Road, Indiranagar, Bangalore - 560038
                </p>
              </div>
            </div>

            {/* Right side: Map */}
            <div className="w-full md:w-1/3">
              <img
                src="/src/assets/map/map.png"
                alt="Location Map"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;