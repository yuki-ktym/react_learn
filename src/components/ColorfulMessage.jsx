import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入
  const { color, font, children } = props;
  const contentStyle = {
    color: color,
    fontSize: font
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
