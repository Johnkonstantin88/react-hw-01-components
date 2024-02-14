import styled from 'styled-components';

export const ListOfFriends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 0;
  margin-bottom: 0;
  width: 300px;
  list-style: none;
  padding-left: 0;
`;

export const Status = styled.span`
  display: block;
  height: 25px;
  width: 25px;
  background-color: ${(props) => (props.$status ? 'green' : 'red')};
  border-radius: 50%;
`
    ;

export const FriendListItem = styled.li`
  display: flex;
  gap: 10px;
  width: auto;
  height: auto;
  padding: 14px;
  justify-content: start;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
  color: #24242a;
  text-shadow: 2px 2px 7px rgba(81, 81, 102, 0.56);
  box-shadow: 2px 3px 7px 0px rgba(0, 0, 0, 0.47);
`;
