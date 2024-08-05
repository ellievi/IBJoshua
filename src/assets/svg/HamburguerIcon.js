import React from "react";

export function HamburguerIcon({width=24, height=14, fill= '#FFFFFF'}) {
  return (
    <div style={{width, height}}>
      <svg
        style={{width: 'inherit', height: 'inherit'}}
        viewBox="0 0 24 14" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="1" x2="24" y2="1" stroke="white" stroke-width="2" fill={fill}/>
        <line y1="7" x2="24" y2="7" stroke="white" stroke-width="2" fill={fill}/>
        <line y1="13" x2="24" y2="13" stroke="white" stroke-width="2" fill={fill}/>
      </svg>

  </div>
  );
}