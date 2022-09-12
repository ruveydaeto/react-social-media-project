import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
        <i class='fa fa-feed'></i>
        <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
        <i class='fa fa-comment'></i>
        <span className="sidebarListItemText">Chats</span>
        </li>
        <li className="sidebarListItem">
        <i class='fas fa-video'></i>
        <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
        <i class='fa fa-groups'></i>
        <span className="sidebarListItemText">Groups</span>
        </li>
        <li className="sidebarListItem">
        <i class='fa fa-book'></i>
        <span className="sidebarListItemText">Bookmarks</span>
        </li>
        <li className="sidebarListItem">
        <i class='fa fa-question'></i>
        <span className="sidebarListItemText">Questions</span>
        </li>
        <li className="sidebarListItem">
        <i class='fa fa-tasks'></i>
        <span className="sidebarListItemText">Jobs</span>
        </li>
        <li className="sidebarListItem">
        <i class='fa fa-check'></i>
        <span className="sidebarListItemText">Events</span>
        </li>
        <li className="sidebarListItem">
        <i class='fa fa-address-book'></i>
        <span className="sidebarListItemText">Courses</span>
        </li>
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr"/>
      <ul className="sidebarFriendList">
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
        </li>
      </ul>
    </div>
    </div>
  )
}
