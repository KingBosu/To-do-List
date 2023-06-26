import { useState } from 'react';

const FontChange = () => {
  const [fontFamily, setFontFamily] = useState('');

  const handleButtonClick = () => {
    const fonts = ['Roboto', 'Dancing Script', 'Kablammo'];
    const currentIndex = fonts.indexOf(fontFamily);
    const newIndex = (currentIndex + 1) % fonts.length;
    const newFontFamily = fonts[newIndex];

    setFontFamily(newFontFamily);
    document.getElementById('root').style.fontFamily = newFontFamily;
  };

  return (
    <nav style={{ position: 'absolute', top: 0, right: 0 }}>
      <button onClick={handleButtonClick}>Font Style</button>
    </nav>
  );
};

export default FontChange;
