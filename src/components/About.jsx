import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        A portfolio website is the ultimate way to showcase your work and let others reach out for you. 
        It is your bread and butter if you are a freelancer in whatever sphere.
        </p>

        <br />

        <p className="text-xl">
        A portfolio website presents your professionalism and dedication to the craft better and more clearly than any CV. 
        You don’t just tell, you show actual cases and examples which speak volumes. 
        Moreover, owing to the portfolio website, you can show your mature and sophisticated
         approach to selling your work along with yourself
        </p>
      </div>
    </div>
  );
};

export default About;
