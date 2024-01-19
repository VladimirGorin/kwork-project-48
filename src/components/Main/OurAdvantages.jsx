import React from "react";
import Title from "./Title";

import "./main.css";

export default function OurAdvantages({ourAdvantages}) {

  const renderNumbers = ourAdvantages.map((item, index) => (
    <div key={index} className="ourAdvantages__number">
      <span>{item.number}</span>
    </div>
  ));

  const renderTexts = ourAdvantages.map((item, index) => (
    <div className="ourAdvantages__text">
      <div className="ourAdvantages__blur"></div>
      <li key={index}>{item.text}</li>
    </div>
  ));

  return (
    <>
      <Title title="Наши преимущества" />
      <div className="ourAdvantages">
        <div className="ourAdvantages__body">
          <div className="ourAdvantages__numbers">{renderNumbers}</div>
          <div className="hr"></div>
          <ul className="ourAdvantages__texts">{renderTexts}</ul>
        </div>
      </div>
    </>
  );
}
