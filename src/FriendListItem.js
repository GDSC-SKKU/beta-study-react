import "./friendListItem.css";

function FriendListItem(props) {
  return (
    <div className="profile-item">
      {/* 이미지를 넣어보세요, 이미지의 스타일된 class 는 profile-image 입니다! */}
      {/* 이미지의 가로 세로 크기는 모두 40px 로 하면 가장 이뻐요! */}
      {/* <img...
        className="profile-image"
        ...
      /> */}
      <div className="profile-text">
        <p className="profile-name">{/* 여기를 수정 */}</p>
        <p className="profile-message">{/* 여기를 수정 */}</p>
        <p>아무 글자</p>
      </div>
    </div>
  );
}

export default FriendListItem;
