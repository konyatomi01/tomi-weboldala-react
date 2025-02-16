import { useState } from "react";
import "./zita.scss";
import kep from "./kep.png";

const Zita = () => {
  const [showFirst, setShowFirst] = useState(true);

  const handleYesClick = (text: string) => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyUte_2G7ICmVPKv7zIuE4L4h7ps66aUJxPqaBl34HNqa03K-vMbuurKmYkVz_-ZHdd/exec",
      {
        method: "POST",
        body: new URLSearchParams({ answer: text }),
      }
    );
    setShowFirst(false);
  };

  const handleButtonClick = (text: string) => () => {
    handleYesClick(text);
  };

  return (
    <>
      {showFirst ? (
        <div className="d-flex flex-column gap-3 align-items-center vw-100">
          <h1 className="text">Zita eljönnél velem ismét randizni?</h1>
          <button
            className="igen-gomb"
            onClick={handleButtonClick("igen")}
          >
            Igen
          </button>
          <button
            className="igen-gomb"
            onClick={handleButtonClick("persze")}
          >
            Persze
          </button>
        </div>
      ) : (
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center vh-100 vw-100">
          <img src={kep} alt="kep" className="img-fluid meno-img" />
          <h1 className="text-center meno-text">Szupi</h1>
          <img src={kep} alt="kep" className="img-fluid meno-img" />
        </div>
      )}
    </>
  );
};

export default Zita;
