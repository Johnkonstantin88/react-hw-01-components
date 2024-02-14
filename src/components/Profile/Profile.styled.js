import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 60px;
  box-shadow: 2px 3px 7px 0px rgba(0, 0, 0, 0.47);
  justify-content: center;
  align-items: center;
  background: rgb(249, 249, 249);
  background: radial-gradient(
    circle,
    rgba(249, 249, 249, 1) 0%,
    rgba(222, 224, 227, 1) 100%
  );
`;

export const Avatar = styled.img`
  width: 400px;
  padding-top: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: auto;
  justify-content: center;
  text-align: center;
  color: #717199;
`;

export const Name = styled.p`
  font-size: 50px;
  font-weight: 500;
  text-shadow: 2px 4px 3px rgba(81, 81, 102, 0.81);
  color: #24242a;
`;

export const Tag = styled.p`
  font-size: 36px;
  font-weight: 500;
`;

export const Location = styled.p`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const Stats = styled.ul`
  display: flex;
  gap: 4px;
  margin-top: 20px;
  margin-bottom: 0;
  padding-left: 0;
  width: 600px;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  font-size: 40px;
  background: rgb(249, 249, 249);
  background: linear-gradient(
    90deg,
    rgba(249, 249, 249, 1) 0%,
    rgba(175, 175, 200, 0.6699054621848739) 100%
  );
  border: 1px solid #afafc8;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 196px;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 36px;
`;

export const Label = styled.span`
  font-size: 32px;
  color: #717199;
  text-shadow: 2px 2px 7px rgba(81, 81, 102, 0.56);
`;

export const Quantity = styled.span`
  font-weight: 600;
  text-shadow: 2px 2px 7px rgba(81, 81, 102, 0.56);
`;
