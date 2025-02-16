import "bootstrap/dist/css/bootstrap.min.css";
import "./meno.scss";
import kep from "./kep2.jpg";

const Meno = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
        <img src={kep} alt="kep" className="img-fluid meno-img" />
        <h1 className="text-center meno-text">Szupi</h1>
        <img src={kep} alt="kep" className="img-fluid meno-img" />
      </div>
    </div>
  );
};

export default Meno;
