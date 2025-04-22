import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AboutUs() {
    const url = 'https://news-portal-backend-code-a5rg.onrender.com/api/v1/aboutus/getaboutus';
    const [aboutUsData, setAboutUsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response.data.success) {
          setAboutUsData(response.data.data);
        } else {
          setError(response.data.message || 'Failed to fetch data');
        }
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
    return (
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/Footer/footer.png')" }} // Updated image path
      >
        <div className="bg-black bg-opacity-70 min-h-screen px-4 py-12 text-white">
          <div className="max-w-6xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6 md:p-12 text-black">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">About The News</h2>
              <p className="text-sm leading-relaxed">
                The News is a formidable global news network, operating across both traditional and digital platforms.
                For 3 decades, we have been a trusted source of news for millions worldwide. From breaking headlines to
                deep-dive reports, our team of acclaimed journalists, analysts, and tech experts work tirelessly to inform,
                engage, and empower society.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
              <p className="text-sm leading-relaxed">
                In order to track and analyze how armed conflicts and atrocities are financed, sustained, and monetized,
                The News uses open source data collection, field reporting, and tech-based verification methods to ensure
                information is both local and international.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Our Achievements</h2>
              <p className="text-sm leading-relaxed">
                From uncovering scams to empowering people through awareness campaigns, our achievements include
                award-winning journalism, impactful editorials, and powerful human stories that made a difference.
              </p>
            </section>
  
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { name: "Gary Jadhav", role: "Founder & CEO" },
                  { name: "Sunil Das", role: "VP Head of Growth" },
                  { name: "Chetan Kadu", role: "Co-Founder" },
                  { name: "Salman Sheikh", role: "Head of Engineering" },
                ].map((member, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      src={`https://i.pravatar.cc/150?img=${index + 10}`}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover shadow-md mb-2"
                    />
                    <h4 className="text-lg font-semibold">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </section>
  
            <p className="text-center text-sm text-gray-700 font-medium">
              Get All World Wide News at <strong>The News</strong>.
            </p>
          </div>
        </div>
      </div>
    );
  };
