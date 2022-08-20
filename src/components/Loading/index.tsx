import React from 'react';

// Styled
import './LoadingStyled.css';

const Loading: React.FC = () => {
  return (
	<div className="loading">
	<img src="logo.svg" alt="logo" />
	<p> Loading ...</p>
	</div> 
 
  );
};

export default Loading;
