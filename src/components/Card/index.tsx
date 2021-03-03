import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 200px;
  height: 200px;
  cursor: pointer;
  border: 0.25px solid papayawhip;
  padding: 3em;
  margin: 2em;

  :hover {
    -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
`;

function Card(props: { title: string }) {
  const { title } = props;
  return (
    <CardWrapper>
      <h2>{title}</h2>
    </CardWrapper>
  );
}



export default Card;