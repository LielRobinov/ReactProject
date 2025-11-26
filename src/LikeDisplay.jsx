export default function LikeDisplay(props) {
  return (
    <div>
      <p>Likes: {props.likeCount}</p>
      <p>Status: {props.isLiked ? "You liked this post" : "you haven't liked this post yet"}</p>
    </div>
  );
}
