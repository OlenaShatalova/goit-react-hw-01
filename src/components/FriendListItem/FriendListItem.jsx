import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img className={css.friendImg} src={avatar} alt={name} width={48} />
      <p className={css.friendName}>{name}</p>
      {isOnline ? (
        <p style={{ color: "green" }}>Online</p>
      ) : (
        <p style={{ color: "red" }}>Offline</p>
      )}
    </>
  );
}
