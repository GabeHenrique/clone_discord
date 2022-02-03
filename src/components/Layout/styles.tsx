import styled from "styled-components";

//sl = server list
//sn = server name
//ci = channel info
//cl = channel list
//cd = channel data
//ul = user list
//ui = user info

export const Grid = styled.div`
    display: grid;
  
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  
  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';
  
  height: 100vh;
`;