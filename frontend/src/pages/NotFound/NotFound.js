import React from 'react';
import { NotFoundContainer, NotFoundTitle, NotFoundText } from './NotFoundStyles';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>Sorry, we couldn't find that page. But don't worry, you can find plenty of other things on our <a href="/">homepage</a>.</NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;
