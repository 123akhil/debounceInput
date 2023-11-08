import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [any, setAny] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAny(input);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" name="name" value={input} onChange={handleChange} />
      <p>{any}</p>
    </div>
  );
}
