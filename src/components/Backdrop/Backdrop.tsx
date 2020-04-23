import React from 'react';

export const Backdrop = (props: {onClick: () => void}) => (
  <div className="backdrop" onClick={() => props.onClick()} />
);
