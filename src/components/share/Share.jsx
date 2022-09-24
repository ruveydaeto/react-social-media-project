import "../share/share.css";

export default function Share() {
  return (
 <div className="share">
  <div className="shareWrapper">
    <div className="shareTop">
     <img className="  shareProfileImg" src="/assets/person/1.jpeg" alt="" />
     <input
     placeholder="Share something.."
     className="shareInput"
     />
    </div>
    <hr className="shareHr" />
    <div className="shareBottom">
      <div className="shareDivider">
        <div className="shareDividers">
          <div className="shareIcon">
        <i style={{color: 'rgb(27, 113, 174)'}} class="fa-regular fa-image"></i></div>
          <span className="shareDividersText">Image</span>
          </div>
          <div className="shareDividers">
          <div className="shareIcon">
          <i style={{color: 'rgb(70, 141, 105)'}} class="fa-solid fa-camera"></i></div>
          <span className="shareDividersText">Video</span>
          </div>
          <div className="shareDividers">
          <div className="shareIcon">
          <i style={{color: 'orange'}} class="fa-solid fa-paperclip"></i></div>
          <span className="shareDividersText">Attachment</span>
          </div>
          <div className="shareDividers">
          <div className="shareIcon">
          <i style={{color: 'rgb(143, 41, 41)'}} class="fa-solid fa-hashtag"></i></div>
          <span className="shareDividersText">Tag</span>
          </div>
          <div className="shareDividers">
          <div className="shareIcon">
          <i style={{color: 'gray'}} class="fa-solid fa-quote-left"></i></div>
          <span className="shareDividersText">Mention</span>
          </div>
          </div>
          
          <button className="shareButton">Share</button>
          </div></div></div> 

  )
}
