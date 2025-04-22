import React from "react";
import { Link } from "react-router-dom";

const Accidents = () => {
  const crimeArticles = [
    {
      image: "/src/assets/linkimages/techo.png",
      title: "India: Canada creating ‘environment for illegal migration and crime",
      timestamp: "02, Jan, 2025 00:38",
      link: "/inneraccidents",
    },
    {
      image: "/src/assets/linkimages/iit.png",
      title: "Notorious fraudster in crime branch net",
      timestamp: "02, Jan, 2025 00:43",
      link: "/inneraccidents",
    },
    {
      image: "/src/assets/linkimages/kiddo.png",
      title: "Terror kingpin deported from Philippines to India, arrested",
      timestamp: "02, Jan, 2025 01:02",
      link: "/inneraccidents",
    },
    {
      image: "/src/assets/linkimages/manmohan.png",
      title: "Fraudster steals 2 mobiles on train & withdraws 6.25L; held",
      timestamp: "02, Jan, 2025 02:53",
      link: "/inneraccidents",
    },
    {
      image: "/src/assets/linkimages/whatever.png",
      title: "Zodiac Signs as Criminals: A Celestial crime Syndicate",
      timestamp: "02, Jan, 2025 05:30",
      link: "/inneraccidents",
    },
    {
      image: "/src/assets/linkimages/iit.png",
      title: "Crime cases declined by 5.7%, says outgoing DGP",
      timestamp: "02, Jan, 2025 07:44",
      link: "/inneraccidents",
    },
  ];

  return (
    <div className="p-6 bg-white ml-45 mx-auto w-80%">
      <h2 className="text-xl font-bold mb-4">Accidents 2025</h2>
      <div className="space-y-4">
        {crimeArticles.map((article, index) => (
          <div key={index} className="flex items-start space-x-4">
            <img src={article.image} alt="Accident News" className="w-30 h-25 rounded-md" />
            <div>
              {article.link ? (
                <Link to={article.link} className="font-semibold text-blue-600 hover:underline text-3xl">
                  {article.title}
                </Link>
              ) : (
                <h3 className="font-semibold text-3xl">{article.title}</h3>
              )}
              <p className="text-xs text-blue-500">{article.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accidents;
