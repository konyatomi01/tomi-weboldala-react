import { useState } from 'react';
import "./cica.scss";
import kep from "./cat.png";

const Cica = () => {
  const [page, setPage] = useState(0);

  const handleNext = (event) => {
    fetch(
        "https://script.google.com/macros/s/AKfycbyUte_2G7ICmVPKv7zIuE4L4h7ps66aUJxPqaBl34HNqa03K-vMbuurKmYkVz_-ZHdd/exec",
        {
          method: "POST",
          body: new URLSearchParams({ answer: event.target.innerText }),
        }
      );
    setPage((prevPage) => (prevPage + 1) % 6);
  };

  const renderPage = () => {
    switch (page) {
      case 0:
        return <div>
            <h1>Melyik cica lennél quiz</h1>
            <button onClick={handleNext}>Kezdés</button>
        </div>;
      case 1:
        return <div>
            <h2>1. kérdés:</h2>
            <h2>Melyik a legjobb cica szín?</h2>
            <button onClick={handleNext}>Fekete</button>
            <button onClick={handleNext}>Barna</button>
            <button onClick={handleNext}>Szürke</button>
            <button onClick={handleNext}>Foltos</button>
        </div>;
      case 2:
        return <div>
            <h2>2. kérdés:</h2>
            <h2>Melyik jellemez téged a legjobban?</h2>
            <button onClick={handleNext}>Vicces</button>
            <button onClick={handleNext}>Játékos</button>
            <button onClick={handleNext}>Okos</button>
            <button onClick={handleNext}>Éhes</button>
        </div>;
      case 3:
        return <div>
            <h2>3. kérdés:</h2>
            <h2>Ki a példaképed?</h2>
            <button onClick={handleNext}>Garfield</button>
            <button onClick={handleNext}>Tom</button>
            <button onClick={handleNext}>Csizmás kandúr</button>
            <button onClick={handleNext}>Kung fu panda</button>
        </div>;
      case 4:
        return <div>
            <h2>4. kérdés:</h2>
            <h2>Melyik a legfinomabb?</h2>
            <button onClick={handleNext}>Lasagne</button>
            <button onClick={handleNext}>Rántott hús</button>
            <button onClick={handleNext}>Pizza</button>
            <button onClick={handleNext}>Bármi, ami szeretettel készül</button>
        </div>;
        case 5:
            return <div>
                <h2>Végeredmény:</h2>
                <h2>Tomival randizós cica</h2>
                <img src={kep} />
            </div>;
      default:
        return <div>Invalid page</div>;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default Cica;
