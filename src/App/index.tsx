import React, { useState } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import { Element, scroller } from 'react-scroll';
import Card from '../components/Card';
import { AppSection, Header, Text, Main } from './styles';

export const FETCH_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export const FETCH_RANDOM_JOKE = gql`
  query($category: String!) {
    random(category: $category) {
      value
    }
  }
`;

interface Category {
  name: string
}

interface Categories {
  categories: Category[];
}

interface Random {
  url: string;
  value: string
}

interface Joke {
  random: Random
}

interface JokeVars {
  category: string;
}

function App() {
  const [category, setCategory] = useState('');
  const { loading, data } = useQuery<Categories>(FETCH_CATEGORIES, { fetchPolicy: 'network-only' });
  const [fetchJoke, { data: fact, loading: fetching }] = useLazyQuery<Joke, JokeVars>(FETCH_RANDOM_JOKE);

  const handleFetchJoke = (category: string) => {
    setCategory(category);
    fetchJoke({ variables: { category } });
    scroller.scrollTo('fact', { duration: 1000, smooth: true });
  };

  return (
    <AppSection>
      <Header>
        <h2>Chuck Norris Facts API</h2>
        <h4>powered by Apollo GraphQL</h4>
      </Header>
      <Element name='fact' />
      <Text>
        <h3>{category || 'Select a category below'}</h3>
        {fetching && <p>Loading random fact...</p>}
        {fact && <p>{fact.random.value}</p>}
        {loading && <h3>Loading...</h3>}
      </Text>
      <Main>
        {data && data.categories.map((category: Category, key: number) =>
          <Card key={key} title={category.name} onClick={handleFetchJoke} />)}
      </Main>
    </AppSection>
  );
}

export default App;
