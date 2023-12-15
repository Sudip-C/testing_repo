import React from "react";

function SpecificEventAdderCard({ name, email, roll }) {
  return (
    <div>
      <div className=" bg-blue-500 shadow-md rounded-md p-4 mb-2 flex justify-between items-center ">
        {/* <h5 className="text-xl font-semibold mb-2">Name:{name}</h5> */}
        <div>
          <span className="text-lg font-semibold mb-2 pr-4 text-white">{`Name: ${name}`}</span>
          <span className="text-gray-600 mb-2 pr-4 text-white ">{`Email: ${email}`}</span>
          <span className="text-gray-500  pr-4 text-white">{`Roll: ${roll}`}</span>
        </div>
        {/* <div className="flex space-x-2">
          <span className=" pr-4">
            <button className="bg-blue-500 text-white px-2 py-1  rounded-md hover:bg-blue-600 ">
              ADD
            </button>
          </span>
          <span>
            <button className="bg-red-500 text-white px-2 py-1  rounded-md hover:bg-red-600 ">
              Remove
            </button>
          </span>
        </div> */}
        <div className="flex flex-col lg:flex-row lg:items-center">
        <button
          className="bg-orange-500 text-white px-2 py-1 rounded-md hover:bg-orange-600 mb-2 lg:mb-0 lg:mr-2"
         
        >
          ADD
        </button>
        <button
          className="bg-blue-700 text-white px-2 py-1 rounded-md hover:bg-red-600"
         
        >
          Remove
        </button>
      </div>
      </div>
    </div>
  );
}

export default SpecificEventAdderCard;
