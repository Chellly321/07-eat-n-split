import Friend from "./Friend";

function FriendsList({ friends }) {
  return (
    <div>
      <div>
        <ul>
          {friends.map((friend) => (
            <Friend friend={friend} key={friend.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FriendsList;
