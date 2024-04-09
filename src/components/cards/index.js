import { memo } from "react";
import Card from "../card";
import './style.css'

function Cards({list}) {

  return (
    <div className="Cards">
      {list.map((item) => <Card key={list.indexOf(item)} title={item.title} text={item.text} />)}
    </div>
  )
}

export default memo(Cards);
