import { useRef } from "react";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(() => {
    const data = localStorage.getItem("length");
    return data ? data : 8;
  });
  const [includeNums, setIncludeNums] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let generatedPassword = "";
    let passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    const numbers = "0123456789";
    const symbols = "!@#$%^&*_|?₹()";

    if (includeNums) passwordString += numbers;
    if (includeSymbols) passwordString += symbols;

    for (let i = 0; i < length; i++) {
      const randomIdx = Math.floor(Math.random() * passwordString.length);
      generatedPassword += passwordString[randomIdx];
    }
    setPassword(generatedPassword);
  }, [length, includeNums, includeSymbols, setPassword]);

  const handleCopyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

  }, [password]);

  useEffect(() => {
    generatePassword();
    localStorage.setItem("length", length);
  }, [length, includeNums, includeSymbols, generatePassword]);

  return (
    <div className="bg-gray-800 h-screen w-screen p-10">
      <div className="bg-blue-900 w-3xl flex flex-col m-auto items-center rounded-2xl p-5">
        <div className="w-full m-5 flex justify-center gap-1">
          <input
            readOnly
            type="text"
            id="password"
            value={password}
            ref={passwordRef}
            className="bg-white w-[70%] rounded-md p-2 text-xl text-orange-500"
          />
          <button 
          onClick={handleCopyToClipboard}
          className="bg-orange-500 px-2 py-2 rounded-md text-white text-lg cursor-pointer">
            Copy
          </button>
        </div>

        <div className="flex gap-3 justify-center">
          <div className="flex gap-1 items-center">
            <label htmlFor="length" className="text-lg text-white">
              Length ({length})
            </label>
            <input
              type="range"
              value={length}
              id="length"
              min={0}
              max={50}
              onChange={(e) => {
                setLength(e.target.value);
                console.log(length);
              }}
            />
          </div>

          <div className="flex gap-1 items-center">
            <label htmlFor="numbers" className="text-lg text-white">
              Numbers
            </label>
            <input
              type="checkbox"
              id="numbers"
              defaultChecked={includeNums}
              onClick={() => {
                setIncludeNums((prev) => !prev);
              }}
            />
          </div>

          <div className="flex gap-1 items-center">
            <label htmlFor="characters" className="text-lg text-white">
              Characters
            </label>
            <input
              type="checkbox"
              id="characters"
              defaultChecked={includeSymbols}
              onClick={() => {
                setIncludeSymbols((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
