import React from 'react'
import './PillContainer.css'

interface Props {
    text: string;
    color: string;
    className?: string; // Change type to string
}

const PillContainer = (props: Props) => {
  // Concatenate classNames if provided
  const containerClassName = `pill-container ${props.className || ''}`;

  return (
    <div className={containerClassName}>
        <div className='custom-cursor' style={{borderBottomColor: props.color}}>
        </div>
        <div className='pill-text' style={{backgroundColor: props.color}}>{props.text}</div>
    </div>
  )
}

export default PillContainer
