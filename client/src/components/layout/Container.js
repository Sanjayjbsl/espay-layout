import React from 'react';
import FrontContainer from './FrontContainer';
import AdminContainer from './AdminContainer';
import { Route, Switch } from 'react-router-dom';

export default () => {
  return (
    // TODO:: BASED ON ADMIN BIT CONDITION WE WILL RENDER CONTAINER ACCORDINGLY
    <div>
    <FrontContainer />
    
    </div>
  )

};