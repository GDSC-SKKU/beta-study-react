import "./friendListItem.css";

function FriendListItem(props) {
  return (
    <div className="profile-item">
      <img
        className="profile-image"
        src={props.imageSource}
        alt="profile"
        height="40px"
        width="40px"
      />
      <div className="profile-text">
        <p className="profile-name">{props.name}</p>
        <p className="profile-message">{props.message}</p>
      </div>
    </div>
  );
}

export default FriendListItem;
