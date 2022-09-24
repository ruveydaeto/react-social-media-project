import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
export default function Profile() {
  return (
       <>
<Topbar/>
<div className="profile">
<Sidebar/>
<div className="profileRight">
  <div className="profileRightTop">
    <div className="profileCover">
    <img src="assets/post/3 (2).jpeg" className="profileCoverImg" alt=""/>
    <img src="assets/person/5.jpeg" className="profileUserImg" alt=""/>
  </div>

  <div className="profileInfo">
    <h4 className="profileInfoName">Rüveyda Eto</h4>
    <span className="profileInfoDesc">Software Developer</span>
  </div>
  </div>
  <div className="profileRightBottom">

  <Feed/>
<Rightbar profile />
  </div>
</div>

</div>

</>
  )
}
