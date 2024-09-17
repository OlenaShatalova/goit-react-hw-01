import "./Profile.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img src={image} alt={name} />
        <p className="avatar-name">{name}</p>
        <p className="avatar-info">@{tag}</p>
        <p className="avatar-info">{location}</p>
      </div>

      <ul className="status-container">
        <li>
          <span className="status-name">Followers</span>
          <span className="status-number">{stats.followers}</span>
        </li>
        <li>
          <span className="status-name">Views</span>
          <span className="status-number">{stats.views}</span>
        </li>
        <li>
          <span className="status-name">Likes</span>
          <span className="status-number">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
