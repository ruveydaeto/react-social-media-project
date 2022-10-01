import './rightbar.css';
import Online from '../online/Online';
import { Users } from '../../dummyData';
import { Lasts } from '../../dummyData';
import News from '../news/News';
export default function RightBar({ profile, last }) {
  const HomeRightbar = () => {
    return (
      <>
      <div className="rightbarFollowing">
        <h4 className="rightbarTitle">Who to Follow</h4>
        <ul className=" rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
        <button  className="viewProfileButton">View More</button></div>
     
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <HomeRightbar />
      </div>
      <div className="rightbarViews">
          <div className="viewsCard">
            <div className="cardHeader">
<h5>Todays News</h5>
            </div>
            <div className="hed">
            {Lasts.map((m) => (
            <News key={m.id} last={m} />
          ))}</div>
          <a className='cardDot'>
    <div className="spinner-dot">
      <span className='spinner'></span>
      <span className='spinner'></span>
      <span className='spinner'></span>
    </div>
    View all latest news
  </a>
          </div>
        </div>
    </div>
  );
}
