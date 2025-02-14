import { useState } from 'react';
import { tempWatchedData } from '../assets/data';
import WatchedSummary from './WatchedSummary';
import WatchedList from './WatchedList';

const WatchedBox = () => {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? '–' : '+'}
      </button>
      {isOpen2 && <></>}
    </div>
  );
};

export default WatchedBox;
