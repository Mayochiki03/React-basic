import Item from "./Item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid';


const Transaction = () => {
  const data = [
      {title: "ค่ารักษาพยาบาล",amount:2000},
      {title: "ค่าน้ำมัน",amount:5000},
      {title: "ค่าเช่าบ้าน",amount:8000},
      {title: "เงินเดือน",amount:70000},
      {title: "ค่าอาหาร",amount:8000}
  ]
    return (
      <li className="item-list">
        {data.map((Element)=>{                                                
          return <Item {...Element} key = {uuidv4}/>
        
        })}
      </li>
    );
  
  
  }
  export default Transaction;