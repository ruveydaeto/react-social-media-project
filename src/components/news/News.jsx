import "./new.css";

export default function News({last }) {
  return (
    <div className="newsArea">
 <div className="lastDesc">
   <h6 className="lastDesc">{last.desc}</h6> 
 </div>
 
<small className="lastDate">{last.date}</small>

 </div>
  )
}
