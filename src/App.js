import "./App.css";
import "./FriendListItem.js";
import FriendListItem from "./FriendListItem.js";
// 여기에 내가 만든 FriendListItem 을 불러와보세요!

function App() {
  const friendsList = {
    frineds: [
      {
        name: "이민수",
        message: "아 집에가고 싶다",
        id: 1,
      },
      {
        name: "김현수",
        message: "",
        id: 2,
      },
      {
        name: "한솔지",
        message: "한결같은 마음",
        id: 3,
      },
      {
        name: "김다은",
        message: "",
        id: 4,
      },
    ],
  };
  return (
    <div className="iphone-container">
      <div className="center-container">
        <h1 className="section-title">친구</h1>

        {friendsList.frineds.map((frined) => (
          <FriendListItem
            name={frined.name}
            message={frined.message}
            id={frined.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
