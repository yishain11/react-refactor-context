import { useState } from 'react';
import './App.css'
import List from './components/List/LIst';

function App() {

  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List imageSize={imageSize} />
    </>
  )
}

export default App
