import FormAddFriend from "./FormAddFriend";
import FriendsList from "./FriendsList";
import { initialFriends } from "./initialFriends";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

function App() {
  const friends = initialFriends;

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        <FormAddFriend friends={friends} />
        <Button>Add friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
