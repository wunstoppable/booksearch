import React from 'react';
import ControlsContainer from './controls';
import BooksContainer from './books';
import StateViewerContainer from './stateviewer';

const titleStyle = {
  fontFamily: 'tahoma',
  fontSize: '24px',
  textAlign: 'center',
};

const Title = () => (
  <div style={titleStyle}>
    Book Search
  </div>
);

export default () => (
  <div>
    <Title />
    <hr />
    <ControlsContainer />
    <BooksContainer />// 这里就是books
    <StateViewerContainer />
  </div>
);
