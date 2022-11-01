import { useState } from "react";
import FriendDetailView from "./FriendDetailView";
import "./friendListItem.css";

function FriendListItem(props) {
  // 친구 자세히 보기 창 띄우기
  // 여기에 useState 를 이용해 보세요!

  function closeDetail() {
    // 여기에 FriendDetailView 에서 X 버튼을 눌렀을 경우 실행해야 할 함수를 정의해 보세요!
  }

  return (
    <div className="profile-item">
      {/* 여기에 프로필 사진이 눌렸을 때,  `FriendDetailView` 라는 컴포넌트가 표시될 수 있게 해 보세요! */}

      <img
        className="profile-image"
        src={props.imageSource}
        alt="profile"
        height="40px"
        width="40px"
        // 프로필 사진이 눌렀을 때 어떤 함수를 실행시켜야 할까요?
        onClick={() => {
          // 여기 실행시킬 함수(들)를 적어주세요!
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
