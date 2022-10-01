import "./post.css";
import { Users } from "../../dummyData";
import {useState} from "react";
export default function Post({post}) {
 const [like, setLike] = useState(post.like);
 const [isLiked, setIsLiked] = useState(false);
 const likeHandler =()=>{
  setLike(isLiked ? like-1 : like+1)
  setIsLiked(!isLiked)
 }

  return (
<div className="post">
  <div className="postWrapper">
    <div className="postTop">
      <div className="postTopLeft">
        <img className="postProfileImg" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt=""/>
        <div className="postArea">
        <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
        <span className="postDate">{post.date}</span>
      </div>
      </div>
      <div className="postTopRight">
      <i class="fa-solid fa-ellipsis-stroke-vertical"></i>
      </div>
    </div>
    <div className="postCenter">
      <span className="postText">{post?.desc}</span>
      <img src={post.photo} alt="" className="postImg" />
    </div>
    <div className="postBottom">
      <div className="postBottomLeft">
      <img src="assets/heart.png" alt="" className="likeIcon" onClick={likeHandler} />
      <span className="postLikeCounter">{like} </span>
      <i style={{color: 'rgb(84, 83, 83)', marginRight: '5px'}} class="fa-regular fa-comment"></i>
      <span className="postCommentText">{post.comment} </span>
      </div>
      
      
    
    </div>
  </div>
</div>
  )
}
