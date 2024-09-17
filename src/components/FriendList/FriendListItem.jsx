export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img className="friend-img" src={avatar} alt={name} width={48} />
      <p className="friend-name">{name}</p>
      {isOnline ? (
        <p style={{ color: "green" }}>Online</p>
      ) : (
        <p style={{ color: "red" }}>Offline</p>
      )}
    </>
  );
}
