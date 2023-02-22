import React from 'react';

export default function A({ children, className, href }) {
  return (
  	<a className={className} href={href} target='_blank' rel='noopener noreferrer'>
  		{children}
		</a>
  );
}
