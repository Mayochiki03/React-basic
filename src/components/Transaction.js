import Item from "./Item";
import './Transaction.css'


const Transaction = () => {
  const data = [
      {title: "ค่ารักษาพยาบาล",amount:2000},
      {title: "ค่าน้ำมัน",amount:5000},
      {title: "ค่าเช่าบ้าน",amount:8000},
      {title: "เงินเดือน",amount:70000},
      {title: "เงินเดือน",amount:70000}

  ]
    return (
      <li className="item-list">
        {data.map((Element)=>{
          return <Item title={Element.title} amount={Element.amount}/>
        
        
        })}
      </li>
    );
  
  
  }
  export default Transaction;