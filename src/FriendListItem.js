import { useState } from "react";
import FriendDetailView from "./FriendDetailView";
import "./friendListItem.css";

function FriendListItem(props) {
  // 친구 자세히 보기 창 띄우기
  const [showDetailView, setShowDetailView] = useState(false);

  return (
    <div className="profile-item">
      {showDetailView && <FriendDetailView {...props} />}
      <img
        className="profile-image"
        src={props.imageSource}
        alt="profile"
        height="40px"
        width="40px"
        onClick={() => {
          setShowDetailView(true);
        }}
      />
      <div className="profile-text">
        <p className="profile-name">{props.name}</p>
        <p className="profile-message">{props.message}</p>
      </div>
    </div>
  );
}

export default FriendListItem;
