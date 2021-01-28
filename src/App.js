import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import BookingDetails from './components/views/BookingDetails/BookingDetails';
import BookingNew from './components/views/BookingNew/BookingNew';
import EventsDetails from './components/views/EventsDetails/EventsDetails';
import EventsNew from './components/views/EventsNew/EventsNew';
import Ordering from './components/views/Ordering/Ordering';
import OrderNew from './components/views/OrderNew/OrderNew';
import OrderDetails from './components/views/OrderDetails/OrderDetails';
import Kitchen from './components/views/Kitchen/Kitchen';


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}component={Homepage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/login`}component={Login}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables`}component={Tables}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`}component={BookingDetails}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`}component={BookingNew}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`}component={EventsDetails}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`}component={EventsNew}/>
          <Route exact path={`${process.env.PUBLIC_URL}/ordering`}component={Ordering}/>
          <Route exact path={`${process.env.PUBLIC_URL}/ordering/new`}component={OrderNew}/>
          <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/:id`}component={OrderDetails}/>
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`}component={Kitchen}/>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
