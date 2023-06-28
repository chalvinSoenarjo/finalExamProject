import React from 'react';
import MenuItem from './MenuItem.tsx';

type MenuProps = {
  items: Array<{ id: number; name: string; description: string }>;
  filter: string;
};

const Menu: React.FC<MenuProps> = ({ items, filter }) => {
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredItems.map((item, index) => (
        <MenuItem
          key={index}
          id={item.id}
          name={item.name}
          description={item.description}
          filter={filter}
        />
      ))}
    </div>
  );
};

export default Menu;
