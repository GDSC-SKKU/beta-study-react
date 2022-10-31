import "./App.css";
import FriendListItem from "./FriendListItem";

const FRIENDS_LIST = [
  {
    id: 1,
    imageSource: "images/profile/profile_1.jpg",
    name: "이민수",
    message: "아 집에가고 싶다",
  },
  {
    id: 2,
    imageSource: "images/profile/profile_2.jpg",
    name: "김현수",
  },
  {
    id: 3,
    imageSource: "images/profile/profile_3.jpg",
    name: "한솔지",
    message: "한결같은 마음",
  },
  {
    id: 4,
    imageSource: "images/profile/profile_4.jpg",
    name: "김다은",
  },
];

function App() {
  return (
    <div className="iphone-container">
      <div className="center-container">
        <h1 className="section-title">친구</h1>
        {FRIENDS_LIST.map((friend) => (
          <FriendListItem
            key={friend.id}
            imageSource={friend.imageSource}
            name={friend.name}
            message={friend.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
