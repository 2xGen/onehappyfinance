
import React from 'react';

const Logo = ({ color = '#0070BA' }) => {
  return (
    <div className="flex items-center gap-2" style={{ color }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14L16 4L28 14V28H20V18H12V28H4V14Z" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 8C24.2091 8 26 6.20914 26 4C26 1.79086 24.2091 0 22 0C19.7909 0 18 1.79086 18 4C18 6.20914 19.7909 8 22 8Z" transform="translate(2,2)" fill={color} stroke={color} strokeWidth="1.5" />
      </svg>
      <span className="font-heading text-2xl font-bold" style={{ color }}>
        OneHappyFinance
      </span>
    </div>
  );
};

export default Logo;
