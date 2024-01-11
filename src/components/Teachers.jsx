import React from "react";
import img1 from "../assets/img/teach2.jpg";
import img2 from "../assets/img/teach4.jpg";
import img3 from "../assets/img/teach3.jpg";

const Teachers = () => {
  const data = [
    {
      id: 1,
      img: img1,
      name: "Serenity Bliss",
    },
    {
      id: 2,
      img: img2,
      name: "Harmony Lotus",
    },
    {
      id: 3,
      img: img3,
      name: "Zenith Moonlight",
    },
  ];
  return (
    <div className=" bg-primary text-white pt-14">
      <div className="px-4 sm:container">
        <h1 className=" font-bold text-5xl text-center">Our Expert Teachers</h1>

        <p className=" text-center font-semibold py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          autem.
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <img className=" rounded-lg" src={item.img} alt="" />

                <h3 className=" text-center font-semibold text-2xl">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
