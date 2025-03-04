import React from 'react';
import Card from './components/Card';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div>
      <Card title={'Título do Card'} description={'Descrição do Card'} />
      <Counter />
    </div>
  );
};

export default App;
