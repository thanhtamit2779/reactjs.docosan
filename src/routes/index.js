import React, { lazy } from 'react';
import {
  Route
} from "react-router-dom";

const ListRouting = () => <React.Fragment>
  <Route path="/" exact component={ lazy(() => import('../modules/doctor/DoctorListContainer.js')) } />
</React.Fragment>
export default ListRouting;