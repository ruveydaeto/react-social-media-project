import "./online.css";

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <div className="rightbarInf">
        <div className="rightbarArea">
      <h6 className="rightbarUsername">{user.username}</h6>
      <small className="rightbarDesc">{user.desc}</small>
      </div>
     
      </div>
      <div className="rightbarAddArea">
      <i style = {{color: '#0f6fec'}}class="fa-solid fa-plus"></i>
      </div>
     
 
    </li>
      
  );
}