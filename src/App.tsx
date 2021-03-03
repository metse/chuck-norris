import React from 'react';
import styled from 'styled-components';
import Card from './components/Card';

const AppSection = styled.section`
  margin: 4em;
`;

const Header = styled.section`
  height: 200px;
  background: papayawhip;
  padding: 2em;
`;

const Main = styled.section`
  padding: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppSection>
      <Header>
        <h2>Welcome to the Chuck Norris API</h2>
        <h3>This app is powered by GraphQL</h3>
      </Header>
      <h3>Select a category below</h3>
      <Main>
        <Card title={'Career'} />
        <Card title={'Animal'} />
        <Card title={'Movie'} />
        <Card title={'Music'} />
        <Card title={'Politcial'} />
      </Main>
    </AppSection>
  );
}

export default App;
