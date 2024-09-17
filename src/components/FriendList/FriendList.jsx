import FriendListItem from "./FriendListItem";
import "./FriendList.css";

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => {
        return (
          <li key={friend.id} className="friend-item">
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
