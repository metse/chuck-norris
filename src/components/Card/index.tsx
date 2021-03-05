import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 300px;
  height: 150px;
  cursor: pointer;
  border: 0.25px solid papayawhip;
  text-align: center;
  margin: 2em;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }

  ${props => props.theme.breakpoints.maxPhone} {
    width: 100%;
  }
`;

function Card(props: { title: string, onClick: (category: string) => void }) {
  const { title, onClick } = props;
  return (
    <CardWrapper onClick={() => onClick(title)}>
      <h2>{title}</h2>
    </CardWrapper>
  );
}



export default Card;