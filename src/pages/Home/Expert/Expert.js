import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="col-lg-4 col-md-6 col-12 g-4">
      <div className="custom-card border rounded">
        <img src={img} alt="" className="w-100" />
        <h3 className="p-1">{name}</h3>
      </div>
    </div>
  );
};

export default Expert;
