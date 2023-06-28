import React from 'react';

type MenuItemProps = {
  id: number;
  name: string;
  description: string;
  filter: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ name, description, filter }) => {
  const highlightedTitle = getHighlightedText(name, filter);
  const highlightedDescription = getHighlightedText(description, filter);

  return (
    <div>
      <h3>{highlightedTitle}</h3>
      <p>{highlightedDescription}</p>
    </div>
  );
};

export default MenuItem;

// Helper function to highlight the matching part of the text
function getHighlightedText(text: string, highlight: string) {
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        if (part.toLowerCase() === highlight.toLowerCase()) {
          return (
            <span key={index} className="highlighted" style={{ backgroundColor: 'yellow' }}>
              {part}
            </span>
          );
        } else {
          return <span key={index}>{part}</span>;
        }
      })}
    </>
  );
}