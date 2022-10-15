import "./topbar.css"

export default function Topbar() {
  return (
   <div className="topbarContainer">
    {/* <div className="topbarLeft">
      <span className="logo">Lamasocial</span>
    </div> */}
   <div className="topbararea">
    <div className="topbarCenter">
      <div className="topbarsearcharea">
      <div className="searchbar">
<div className="searchIcon">
      <i style={{color: ' #676a79', fontSize: '1.171875rem !important'}} class='fa fa-search' ></i>
      </div>
      <input placeholder="Search for friend, post or video" className="searchInput" />
      </div>
   
    <div className="topbarRight">
      <span className="topbarLink">Homepage</span>
      <span className="topbarLink">Timeline</span>
      </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
   </div>
   </div>  
   </div>
  )
}
