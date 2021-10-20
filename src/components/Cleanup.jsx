import React, { useState } from 'react';
import Pic from './Pic';

const Cleanup = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {/* By clicking this button we are toggling our show state between true and false */}
      <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>

      {/* We only display (render, mount) our Pic component if the state toggle show is true */}
      {show && <Pic />}
    </div>
  );
};

export default Cleanup;
