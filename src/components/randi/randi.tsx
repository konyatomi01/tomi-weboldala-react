import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./randi.scss";

const Randi = () => {
  const [yesSize, setYesSize] = useState({ width: 35, height: 10 });
  const [noSize, setNoSize] = useState({ width: 35, height: 10 });
  const navigate = useNavigate();

  const handleNoClick = () => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyUte_2G7ICmVPKv7zIuE4L4h7ps66aUJxPqaBl34HNqa03K-vMbuurKmYkVz_-ZHdd/exec",
      {
        method: "POST",
        body: new URLSearchParams({ answer: "nem" }),
      }
    );

    setYesSize((prev) => ({ width: prev.width * 1.3, height: prev.height * 1.3 }));
    setNoSize((prev) => ({ width: prev.width * 0.8, height: prev.height * 0.8 }));
  };

  const handleYesClick = () => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyUte_2G7ICmVPKv7zIuE4L4h7ps66aUJxPqaBl34HNqa03K-vMbuurKmYkVz_-ZHdd/exec",
      {
        method: "POST",
        body: new URLSearchParams({ answer: "igen" }),
      }
    );
    navigate("/meno");
  };

  return (
    <div className="xd3 d-flex flex-column gap-3 align-items-center">
      <h1 className="text">Eljönnél velem randizni?</h1>
        <button
          className="jogomb"
          style={{ width: `${yesSize.width}vw`, height: `${yesSize.height}vh` }}
          onClick={handleYesClick}
        >
          Igen
        </button>
        <button
          className="rosszgomb"
          style={{ width: `${noSize.width}vw`, height: `${noSize.height}vh` }}
          onClick={handleNoClick}
        >
          Nem
        </button>
    </div>
  );
};

export default Randi;
