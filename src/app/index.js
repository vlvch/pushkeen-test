import {memo} from 'react';
import list from '../fixtures';
import Layout from '../components/layout';
import Cards from '../components/cards';

function App() {
  return (
    <Layout>
      <Cards list={list}/>
    </Layout>
  );
}

export default memo(App);
