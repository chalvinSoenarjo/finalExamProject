import React, { useState } from 'react';
import Menu from './Menu.tsx';
import menuData from './menuData.tsx';

const App: React.FC = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter menu items..."
        value={filter}
        onChange={handleFilterChange}
      />
      <Menu items={menuData} filter={filter} />
    </div>
  );
};

export default App;
