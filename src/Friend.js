import Button from "./Button";

function Friend({ friend }) {
  return (
    <>
      <li>
        <img alt={friend.name} src={friend.image} />
        <h3>{friend.name}</h3>

        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
        {/* // ? `You owe ${friend.name} $${friend.balance}`
        // : `${friend.name} owes you $${friend.balance}`] */}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you ${friend.balance}
          </p>
        )}
        {friend.balance === 0 && <p>{friend.name} and you are even.</p>}

        <Button>Select</Button>
      </li>
    </>
  );
}

export default Friend;
