import React from 'react';

import {myBackground, otherBackground} from '../colors';

export default function MessagesCorner({mine=false}) {
  const line = mine ? {
    x1:0, y1:10, x2:10, y2:0
  } : {
    x1:0, x2:0, y1:10, y2:10
  };
  const polygon = mine ? [
    [-2,0], [10,0], [-2,12]
  ] : [
    [0,0], [12,0], [12,12]
  ];
  const points = polygon.map(point => point.join(',')).join(' ');
  const polygonColor = mine ? myBackground : otherBackground;

  return (
    <svg width={10} height={10}>
      <line
        {...line}
        stroke='rgba(0, 0, 0, 0.3)'
        strokeWidth={2}
      />
      <polygon points={points} fill={polygonColor} />
    </svg>
  );
}
