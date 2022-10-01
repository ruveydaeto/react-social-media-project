import CloseFriend from '../closeFriend/CloseFriend';
import './sidebar.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Users } from '../../dummyData';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarImg">
        <img src="./assets/post/1 (1).jpeg" className="profile-pic" />
      </div>
      <div className="card">
        <div className="sidebarTop">
          <div className="profile-card">
            <img src="./assets/person/1.jpeg" className="cover-pic" />
          </div>
          <h5 className="card-text">Rüveyda Eto</h5>
          <small className="textMini"> Software Developer </small>
          <p class="textP">
            I'd love to change the world, but they won’t give me the source
            code.
          </p>
<div className="contentCenter">
  <div className="firstCenter">
    <h6 className='centerNumer'>256</h6>
    <small className='centerText'>Post</small>
  </div>
  <div className="divider"></div>
  <div className="firstCenter">
    <h6 className='centerNumer'>256K</h6>
    <small className='centerText'>Followers</small>
  </div>
  <div className="divider"></div>
  <div className="firstCenter">
    <h6 className='centerNumer' >256</h6>
    <small className='centerText'>Following</small>
  </div>

</div>
<div className='centerDivider'></div> 

          <div className="sidebarBottom">
            <ul className="cardColumn">
            <i style={{color: 'rgb(116, 56, 56)' }} class="fa-sharp fa-solid fa-house-chimneyfa-sharp fa-solid fa-house-chimney"></i>
<a>Feed</a>
</ul>
<ul className="cardColumn">
            <i  style={{color: 'rgb(62, 98, 149'}} class="fa-solid fa-user"></i>
<a>Conections</a>
</ul>
<ul className="cardColumn">
            <i style={{color: 'rgb(65, 153, 71)' }} class="fa-solid fa-newspaper"></i>
<a>Latest News</a>
</ul>
<ul className="cardColumn">
            <i  style={{color: 'rgb(208, 16, 16)' }} class="fa-solid fa-calendar-days"></i>
<a>Events</a>
</ul>
<ul className="cardColumn">
            <i style={{color: 'orange' }} class="fa-brands fa-rocketchat"></i>
<a>Groups</a>
</ul>
<ul className="cardColumn">
            <i  style={{color: 'rgb(255, 234, 4)' }} class="fa-solid fa-bell"></i>
<a>Notifications</a>
</ul>
<ul className="cardColumn">
            <i  class="fa-solid fa-gears"></i>
<a>Settings</a>
</ul>
<div className="viewProfile">
  <div className="viewProfileDivider"></div>
  <Router>
  <Link  to="/a" className='viewProfileDividerSpan'>View Profile</Link></Router>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
