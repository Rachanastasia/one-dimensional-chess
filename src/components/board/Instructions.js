import React, { Fragment, useContext, useEffect, useState } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { useGetPieceInstructions } from '../../hooks/useGetPieceInstructions';
import '../../css/Instructions.css';

function Instructions() {
  const [toggle, setToggle] = useState(true)
  const { active } = useContext(GameContext);
  const instructions = useGetPieceInstructions(active)
  useEffect(() => {

  }, [active])

  return (
    < div className='instructions-wrapper' >
      {toggle
        ? <div className='instructions-inner-wrapper'>
          {instructions}
          <button className='instructions-button' onClick={() => setToggle(!toggle)}>Hide</button>
        </div>
        : <button className='instructions-button show-button' onClick={() => setToggle(!toggle)}>Show</button>}
    </div>
  )
}

export default Instructions
