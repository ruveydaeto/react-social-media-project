import CloseFriend from "../closeFriend/CloseFriend";
import "./sidebar.css";
import { Users } from "../../dummyData";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
        <div className="sidebarIcon">
        <i class='fa fa-feed'></i> </div>
        <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
        <div className="sidebarIcon">
        <i class='fa fa-comment'></i> </div>
        <span className="sidebarListItemText">Chats</span>
        </li>
        <li className="sidebarListItem">
        <div className="sidebarIcon">
        <i class='fas fa-video'></i> </div>
        <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
        <div className="sidebarIcon">
        <i class='fa fa-groups'></i> </div>
        <span className="sidebarListItemText">Groups</span>
        </li>
        <li className="sidebarListItem">
        <div className="sidebarIcon">
        <i class='fa fa-book'></i> </div>
        <span className="sidebarListItemText">Bookmarks</span>
        </li>
        <li className="sidebarListItem">
        <div className="sidebarIcon">
        <i class='fa fa-question'></i> </div>
        <span className="sidebarListItemText">Questions</span>
        </li>
        <li className="sidebarListItem">
        <div className="sidebarIcon">
        <i class='fa fa-tasks'></i> </div>
        <span className="sidebarListItemText">Jobs</span>
        </li>
        <li className="sidebarListItem">
        <div className="sidebarIcon">
        <i class='fa fa-check'></i> </div>
        <span className="sidebarListItemText">Events</span>
        </li>
        <li className="sidebarListItem">
          <div className="sidebarIcon">
        <i class='fa fa-address-book'></i> </div>
        <span className="sidebarListItemText">Courses</span>
        </li>
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr"/>
      <ul className="sidebarFriendList">
       
  {Users.map(u=>(
    <CloseFriend user={u} key={u.id}/>
  ))}
      </ul>
    </div>
    </div>
  )
}
