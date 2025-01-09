import React from "react";

const Fallback: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <div className="w-auto h-24 mb-4">
          <img src="/logo.png" alt="Ratu Ongkir" className="inline-block w-auto h-24" />
        </div>
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Fallback;
