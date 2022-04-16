import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const handleCheckOut = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <h1 className="text-center">this is service details page {serviceId}</h1>
      <div className="text-center">
        <button onClick={handleCheckOut} className="btn btn-info">
          check out
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
