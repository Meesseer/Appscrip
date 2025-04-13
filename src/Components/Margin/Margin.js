import React from 'react';
import topMargin from './LoremipsumTopMargin.png';
import './Margin.css';

function Margin() {
  return (
    <div>
        <div className='topMargin'>
            <div className='image-row'>
                <img alt='Lorem Ipsum Icon' src={topMargin}></img>
                <img alt='Lorem Ipsum Icon' src={topMargin}></img>
                <img alt='Lorem Ipsum Icon' src={topMargin}></img>
            </div>
        </div>
    </div>
  )
}

export default Margin