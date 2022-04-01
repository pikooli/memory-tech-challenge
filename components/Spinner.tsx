import React from "react";

type Props = {};

const Spinner: React.FC<Props> = () => {
  return (
    <div className="absolute absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Spinner;
