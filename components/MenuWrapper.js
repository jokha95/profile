import React from "react";
import Spacee from "../img/spacee.jpg";
export default function MenuWrapper({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${Spacee})`,
        flex: 1,
        borderRadius: 10,
        margin: 6,
        marginRight: 88,
        paddingLeft: 13,

        backgroundColor: "beige",
      }}
    >
      {children}

      <h2
        style={{
          color: "red",
          fontSize: "55px",
          paddingLeft: 220,
        }}
      >
        {" "}
        Joukha Alhosni
      </h2>
      <h4
        style={{
          color: "green",
          fontSize: "22px",
          paddingLeft: 120,
        }}
      >
        Computer Engineer
      </h4>
      <h4
        style={{
          color: "black",
          fontSize: "22px",
        }}
      >
        Graduate with a Computer Engineering Bachelor Degree and some relevant
        experience in the field that I am very enthusiastic to use in adding a
        value to your company. A sound background in electronics and data
        communications as well as extensive training in structured programming
        techniques such as HTML, CSS, Java, JavaScript, C and C++. projects. I
        am seeking a challenging technical or administrative position in a
        pleasant working environment, which will permit me to continue
        practicing and expanding my skill set and knowledge base. I am equally
        comfortable and qualified in Information Technology field .
      </h4>
    </div>
  );
}
