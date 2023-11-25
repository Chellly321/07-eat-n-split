import FormAddFriend from "./FormAddFriend";
import FriendsList from "./FriendsList";
import { initialFriends } from "./initialFriends";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

function App() {
  const friends = initialFriends;
  const [showAddFriend, setShowAddFriend] = useState(false);

  function showForm() {
    setShowAddFriend((show) => !show);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList friends={friends} />
          {showAddFriend && <FormAddFriend friends={friends} />}
          <Button onClick={showForm}>
            {showAddFriend ? "Close" : "Add friend"}
          </Button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

export default App;
