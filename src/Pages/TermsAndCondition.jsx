import React from "react";

const TermsAndCondition = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/Footer/termsAndCondition.png')" }}
    >
      {/* Background image with content section */}
      <div className="bg-black bg-opacity-70 min-h-screen px-4 py-12 text-white">
        <div className="max-w-6xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6 md:p-12 text-black">
          <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>

          {/* Terms content section */}
          <section className="mb-8 space-y-4">
            <ul className="list-disc pl-5 text-sm md:text-base text-gray-700">
              <li>
                Our website uses cookies to analyse our website traffic. If you do allow cookies to be used, your personal information may be stored by us for use as provided in our Privacy Policy.
              </li>
              <li>
                Your use of any information or materials on our website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
              </li>
              <li>
                We do not guarantee that our website will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programmes, and platform in order to access our website. You should use your own virus protection software.
              </li>
              <li>
                From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that We endorse the website(s), its content, or services accessed through those websites. We have no responsibility for the content of the linked website(s).
              </li>
              <li>
                “THOMSON REUTERS FOUNDATION” and “CONTEXT” are trademarks of the Thomson Reuters Foundation. You must not use such marks without Our prior written permission. All other names, logos, product and service names, designs, and slogans on our website are the trademarks of their respective owners.
              </li>
              <li>
                These Terms of Use permit you to use our website for your personal, non-commercial use only. Unauthorised use of our website may give rise to a claim for damages and/or be a criminal offence.
              </li>
              <li>
                To the extent permitted by law, You hereby fully release and discharge Thomson Reuters Foundation and its subsidiaries and Affiliates from all rights, claims, and actions, which You have or may hereafter have against Us arising out of, in connection with or relating to Your use of this website.
              </li>
              <li>
                Your use of this website and any dispute arising out of such use of the website is subject to the laws of England and Wales.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
