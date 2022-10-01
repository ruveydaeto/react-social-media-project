import "./topbar.css"

export default function Topbar() {
  return (
   <div className="topbarContainer">
    <div className="topbarLeft">
      <span className="logo">Lamasocial</span>
    </div>
    <div className="topbarCenter">
      <div className="searchbar">
<div className="searchIcon">
      <i style={{color: ' #676a79', fontSize: '1.171875rem !important'}} class='fa fa-search' ></i>
      </div>
      <input placeholder="Search for friend, post or video" className="searchInput" />
      </div>
    </div>
    <div className="topbarRight">
      <span className="topbarLink">Homepage</span>
      <span className="topbarLink">Timeline</span>
      
     <div className="topbarIcons">
      <div className="topbarIconItem">
      <i  style= {{color: '#676a79'}} class='fa fa-user'></i>
      <span className="topbarIconBadge">1</span>
      </div>
      <div className="topbarIconItem">
      <i style= {{color: '#676a79'}} class='fa fa-comment'></i>

      <span className="topbarIconBadge">2</span>
      </div>
      <div className="topbarIconItem">
      <i style= {{color: '#676a79'}} class='fa fa-bell'></i>
      <span className="topbarIconBadge">3</span>
      </div>
      </div> 
      <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
   </div>  
   </div>
  )
}
