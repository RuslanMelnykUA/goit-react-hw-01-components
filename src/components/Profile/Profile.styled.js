import styled from 'styled-components';

export const ProfileDiv = styled.div`
  width: 800px;
  margin: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #DFDFDF;
  border-radius: 15px;
`;

export const ProfileImg = styled.img`
  width: 350px;
  border-radius: 50%;
  margin-top: 40px;
  margin-bottom: 20px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const ProfileDescr = styled.div``;
export const ProfileName = styled.p`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 18px;
`;

export const ProfileTag = styled.p`
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 600;
`;

export const ProfileLocation = styled.p`
  margin-bottom: 26px;
  font-size: 16px;
  font-weight: 600;
  color: #363697;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 20px;
  border: 1px solid lightgrey;
  padding: 10px;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ProfileQuantity = styled.span`
  margin-top: 6px;
  font-size: 18px;
  font-weight: 600;
`;

export const ProfileLabel = styled.span`
  color: #0505057e;
  font-weight: 600;
`;
