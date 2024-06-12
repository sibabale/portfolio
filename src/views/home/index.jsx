import React from "react";
import { Navbar } from "../../components/navbar";

export const Home = () => {
  return (
    <div className="bg-black h-screen">
      <Navbar />

      <main>
        <div className="lg:py-60 lg:px-20 sm:p-20  p-5">
          
          <div  className="flex flex-col">
            <h2 className="text-white mb-10 text-4xl sm:text-8xl">hi</h2>
            <p className="text-white font-thin text-2xl sm:text-5xl mb-5">my name is sibabale</p>
            <p className="text-white font-thin text-2xl sm:text-5xl">i am a <span className="designer-text">designer</span> & <span className="developer-text">{`<developer>`}</span></p>
          </div>

        </div>
      </main>
    </div>
  );
};
