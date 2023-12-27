import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/selectors';

const Profile = () => {
  const { t } = useTranslation();
  const userName = useSelector(selectUserName);
  return (
    <>
      <h2>
        {t('profile.welcome')} {userName}
      </h2>
    </>
  );
};
export default Profile;
