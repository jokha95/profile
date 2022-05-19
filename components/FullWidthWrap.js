import React from "react";
import Spaceee from "../img/spaceee.jpg";

export default function FullWidthWrapper({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${Spaceee})`,
        flex: 1,
        borderRadius: 10,
        margin: 6,
        paddingLeft: 13,
        backgroundColor: "pink",
      }}
    >
      {children}
    </div>
  );
}
