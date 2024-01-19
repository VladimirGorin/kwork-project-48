import React from 'react'

import bookIcon from "../../assets/images/book-icon.png";

import "./main.css"

export default function Title({title}) {
  return (
    <div className="title">
        <div className="title__body">
            <img src={bookIcon} alt="bookIcon" />
            <h2>{title || "Текст не найден!"}</h2>
        </div>
    </div>
  )
}
