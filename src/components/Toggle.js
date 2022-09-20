import React , {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(isOn => !isOn);
  }

  const color = isOn ? "green" : "orange";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "OFF" : "ON"}
    </button>
  );
}
export default Toggle;
