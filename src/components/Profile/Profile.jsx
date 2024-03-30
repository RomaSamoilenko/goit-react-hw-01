import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.user}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.statList}>
        <li className={css.statItem}>
          <span>Followers</span>
          <span className={css.statItemSpan}>{stats.followers}</span>
        </li>
        <li className={css.statItem}>
          <span>Views</span>
          <span className={css.statItemSpan}>{stats.views}</span>
        </li>
        <li className={css.statItem}>
          <span>Likes</span>
          <span className={css.statItemSpan}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;