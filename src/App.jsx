/* eslint react-hooks/exhaustive-deps:off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("saisyo!!");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickfaceSwich = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  // 関心を分離
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "blue" }}>こんにちわ!</h1>
      <ColorfulMessage color="blue" font="60px">
        お元気ですか？
      </ColorfulMessage>
      <ColorfulMessage color="pink" font="30px">
        お元気です。
      </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickfaceSwich}>on/off</button>
      <br />
      <p>{num}</p>
      {faceShowFlag && <p>^_^</p>}
    </>
  );
};

export default App;
