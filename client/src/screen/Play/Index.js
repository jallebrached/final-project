import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const el = location.state;

  return (
    <div className="index">
      {console.log(el)}
      <h1>{el.Name}</h1>
      <h2>{el.Categorie}</h2>
      <p>{el.Subject}</p>
      <p>{el.Overview}</p>

      <button
        onClick={() => {
          navigate("/card", { state: el.Questions });
        }}
      >
        PLAY
      </button>
    </div>
  );
};

export default Index;
