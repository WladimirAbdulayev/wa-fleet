import "./Styles/shipForm.css";
import { useState, useEffect } from "react";

export default function Ship({ createShip }) {
  const [shipData, setShipData] = useState({
    shipName: "",
    shipType: "",
    shipClass: "",
  });
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (shipData.shipName && shipData.shipType && shipData.shipClass) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [shipData]);

  const handleChange = (e) => {
    setShipData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!shipData.shipName || !shipData.shipType || !shipData.shipClass)
      return alert(
        "Dear Friend! Would you be so kind as to privide us with full information?"
      );
    if (valid) {
      createShip(shipData);
      setShipData({ shipName: "", shipType: "", shipClass: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="item-container form-container">
      <input
        name="shipName"
        onChange={handleChange}
        value={shipData.shipName}
        className="form-text"
        placeholder="please enter Ship Name"
      ></input>
      <input
        name="shipType"
        onChange={handleChange}
        value={shipData.shipType}
        className="form-text"
        placeholder="please enter Ship Type"
      ></input>
      <input
        name="shipClass"
        onChange={handleChange}
        value={shipData.shipClass}
        className="form-text"
        placeholder="please enter Ship Class"
      ></input>
      <button type="submit" className={valid ? "valid" : "invalid"}>
        Submit
      </button>
    </form>
  );
}
