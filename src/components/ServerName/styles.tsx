import styled from 'styled-components'
import {ExpandMore} from '@styled-icons/material'

export const Container = styled.div`
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  padding: 0 11px 0 16px;
  justify-content: space-between;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;
  color: var(--white);
  cursor: pointer;
`;