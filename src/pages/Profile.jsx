import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/selectors';

const Profile = () => {
  const userName = useSelector(selectUserName);
  return (
    <>
      <h2>Welcome to your profile, {userName}</h2>
    </>
  );
};
export default Profile;
