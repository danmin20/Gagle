import React from 'react';

interface mintBkTextProps {
  style?: React.CSSProperties;
  className?: string;
}

const backgroundStyle: React.CSSProperties = {
  padding: '5px 9px',
  backgroundColor: '#a5ffae',
  fontSize: '13px',
  color: '#373cff',
  borderRadius: '8px',
  fontStyle: 'bold',
};

const mintBkText: React.FC<mintBkTextProps> = (props) => {
  const { style, className, children } = props;
  return (
    <div className={className} style={{ ...backgroundStyle, ...style }}>
      {children}
    </div>
  );
};

export default mintBkText;