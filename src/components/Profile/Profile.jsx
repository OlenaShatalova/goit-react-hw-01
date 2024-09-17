import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.avatarContainer}>
      <div className={css.imgContainer}>
        <img src={image} alt={name} />
        <p className={css.avatarName}>{name}</p>
        <p className={css.avatarInfo}>@{tag}</p>
        <p className={css.avatarInfo}>{location}</p>
      </div>

      <ul className={css.statusContainer}>
        <li>
          <span className={css.statusName}>Followers</span>
          <span className={css.statusNumber}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.statusName}>Views</span>
          <span className={css.statusNumber}>{stats.views}</span>
        </li>
        <li>
          <span className={css.statusName}>Likes</span>
          <span className={css.statusNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
