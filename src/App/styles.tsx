import styled from 'styled-components';

export const AppSection = styled.section`
  margin: 0;
`;

export const Header = styled.section`
  height: 200px;
  background: papayawhip;
  padding: 2em;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-top: 2em;
  padding: 2em;
`;

export const Main = styled.section`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  ${props => props.theme.breakpoints.maxPhone} {
    flex-direction: row;
  }
`;