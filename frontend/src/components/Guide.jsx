import React from "react";
import Card from "./ui/Card";
// import guidedeco from "../assets/guidedeco.svg"

const Guide = () => {
  return (
    <div className="w-[90%] lg:w-[70%] mx-auto mt-12 p-6 md:mt-32 md:px-16 md:py-10 h-fit bg-[url('src/assets/guidedeco.svg')] bg-cover bg-center rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-start text-4xl font-bold mb-12 mt-4">How it works?</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] lg:w-[70%]">
          <Card
            title="1. Register to HealthSynx"
            desc="It's totally free! You can just register if you are new on HealthSynx, follow simple registration steps and you're ready to get started! If you are already a user, just sign in!"
            className="bg-[#C0DEDD]"
          />
          <Card
            title="2. Set Your Health and Fitness Goals"
            desc="Define your specific health and fitness goals.
          Tailor your goals based on factors such as weight, activity level, and desired outcomes."
            className="bg-[#F1DFDE]"
          />
          <Card
            title="3. Track Your Activities and Progress"
            desc="Log your exercises, steps, distance, and calories burned.
          Monitor your daily activity levels and track your progress towards your goals."
            className="bg-[#E6DFF1]"
          />
          <Card
            title="4. Analyze and Optimize"
            desc="Gain insights into your activities and progress with charts and analytics.
          Use the data to make informed decisions and optimize your health and fitness routine.
          "
            className="bg-[#363636] text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Guide;
