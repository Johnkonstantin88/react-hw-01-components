import PropTypes from 'prop-types';
import { FriendListItem, ListOfFriends, Status } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem key={id}>
            <Status $status={isOnline}></Status>

            <img src={avatar} alt={name} width="96" />
            <p>{name}</p>
          </FriendListItem>
        );
      })}
    </ListOfFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
