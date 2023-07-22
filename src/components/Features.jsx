import React from "react";
import Card from "./ui/FeatureCard";
import featuredeco2 from "../assets/featuredeco2.svg";
import featuredeco3 from "../assets/featuredeco3.svg";
import { GoGoal } from "react-icons/go";
import { TbActivity } from "react-icons/tb";
import { GiMeal } from "react-icons/gi";
import { SiGoogleanalytics } from "react-icons/si";
import { TbDeviceWatchHeart } from "react-icons/tb";
import { FaMagic } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-black w-[90%] lg:w-[70%] mx-auto  bg-[url('src/assets/noise.svg')] bg-cover bg-center rounded-xl mt-[20rem] p-6 md:mt-32 md:px-16 md:py-10">
      <h1 className="text-white text-3xl md:text-4xl text-start font-bold">Features</h1>
      <p className="text-gray-300 text-base md:text-lg text-start mt-4 mb-8">
        Discover the powerful features that make HealthSynx the ultimate health
        and fitness tracker
      </p>
      <div className="flex flex-col items-start w-[100%]">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Personalized Goal Setting"
            desc="Set custom health and fitness goals tailored to your preferences and track your progress."
            icon={GoGoal}
          />

          <Card
            title="Activity Tracking Made Easy"
            desc="Effortlessly log exercises, monitor steps, distance, and calories burned to stay active and motivated."
            icon={TbActivity}
          />

          <Card
            title="Nutritional Insights"
            desc="Track meals, monitor calorie intake, and make informed choices for a balanced diet."
            icon={GiMeal}
          />

          <Card
            title="Progress Monitoring and Analytics"
            desc="Visualize your progress, trends, and achievements with interactive charts and analytics."
            icon={SiGoogleanalytics}
          />

          <Card
            title="Seamless Integration with Fitness Wearables"
            desc="Connect and sync data from your favorite fitness wearables for a comprehensive view of your well-being."
            icon={TbDeviceWatchHeart}
          />

          <Card
            title="User-Friendly Interface"
            desc="Enjoy a sleek and intuitive interface for seamless navigation and quick access to information."
            icon={FaMagic}
          />
          <img
            src={featuredeco2}
            alt="featuredeco1"
            className="absolute -right-[36rem] -top-56 hidden lg:block"
          />
          <img
            src={featuredeco3}
            alt="featuredeco3"
            className="absolute -right-[40rem] top-8 hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
