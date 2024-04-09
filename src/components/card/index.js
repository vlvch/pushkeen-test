import { memo, useState } from "react";
import './style.css';

function Card({ title, text }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = () => {
    setIsSelected(!isSelected);
  }

  return (
    <div onClick={() => handleSelected()} className={isSelected ? "Card Card__selected" : "Card"}>
      <div className="Card-title">{title}</div>
      <span className="Card-text">{text}</span>
    </div>
  )
}

export default memo(Card);
