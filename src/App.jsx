import useSwitch from "./components/UseSwitch";
import useDate from "./components/UseData";
import useCustomPointer from "./components/UseCustomPointer";

function App() {
  const { isOn, toggle } = useSwitch();
  const { currentDate } = useDate();
  const customPointer = useCustomPointer("🔥");

  return (
    <>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>
      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>
    </>
  );
}

export default App;
