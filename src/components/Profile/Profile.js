import {
  ProfileDiv,
  ProfileImg,
  ProfileDescr,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatsItem,
  ProfileQuantity,
  ProfileLabel,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;

  return (
    <ProfileDiv>
      <ProfileDescr>
        <ProfileImg src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescr>

      <ProfileStats>
        <ProfileStatsItem>
          <ProfileLabel>Followers </ProfileLabel>
          <ProfileQuantity>{followers}</ProfileQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileLabel>Views </ProfileLabel>
          <ProfileQuantity>{views}</ProfileQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileLabel>Likes </ProfileLabel>
          <ProfileQuantity>{likes}</ProfileQuantity>
        </ProfileStatsItem>
      </ProfileStats>
    </ProfileDiv>
  );
};


// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.exact({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }).isRequired,
// };
