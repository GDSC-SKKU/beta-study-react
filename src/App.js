import "./App.css";
// 여기에 내가 만든 FriendListItem 을 불러와보세요!
import FriendListItem from "./FriendListItem";
function App() {
  return (
    <div className="iphone-container">
      <div className="center-container">
        <h1 className="section-title">친구</h1>
        {/* 여기서부터 코드를 수정해보세요! */}
        <FriendListItem
          name="홍길동"
          message="성균관대학교"
          imgSource="images/profile/profile_1.jpg"
        />
        <FriendListItem
          name="홍다온"
          message="성균관대학교"
          imgSource="images/profile/profile_2.jpg"
        />
        <FriendListItem
          name="최영준"
          message="성균관대학교"
          imgSource="images/profile/profile_3.jpg"
        />
        <FriendListItem
          name="최여진"
          message="성균관대학교"
          imgSource="images/profile/profile_4.jpg"
        />

        {/* 여기까지 코드를 수정해보세요! */}
      </div>
    </div>
  );
}

export default App;
