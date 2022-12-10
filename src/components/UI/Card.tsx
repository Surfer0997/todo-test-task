import { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  children: ReactNode;
}
const CardContainer = styled.div`
margin: 0rem;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 5px;
border: solid white 1px;
width: max(30%, 300px);
display: inline-block;
`;

export const Card = (props:CardProps) => {
  return <CardContainer>{props.children}</CardContainer>;
};
