import styled from 'styled-components'
import {Mic, Headset, Settings} from '@styled-icons/material'

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 10px;
  
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 90%;
  }
`;

export const Icons = styled.div`
  display: flex;
  color: var(--gray);

`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white);
  font-size: 80%;
  margin-left: 8px;
  cursor: pointer;
  >span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: color 0.2s;
  margin-right: 5px;
  &:hover {
    color: #FFF;
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: color 0.2s;
  margin-right: 5px;
  &:hover {
    color: #FFF;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #FFF;
  }
`;
