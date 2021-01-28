import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import BookingId from './components/views/BookingId/BookingId';
import BookingNew from './components/views/BookingNew/BookingNew';
import EventsId from './components/views/EventsId/EventsId';
import EventsNew from './components/views/EventsNew/EventsNew';
import Ordering from './components/views/Ordering/Ordering';
import OrderNew from './components/views/OrderNew/OrderNew';
import OrderId from './components/views/OrderId/OrderId';
import Kitchen from './components/views/Kitchen/Kitchen';


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}component={Homepage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/login`}component={Login}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables`}component={Tables}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:tableId`}component={BookingId}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`}component={BookingNew}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:eventId`}component={EventsId}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`}component={EventsNew}/>
          <Route exact path={`${process.env.PUBLIC_URL}/ordering`}component={Ordering}/>
          <Route exact path={`${process.env.PUBLIC_URL}/ordering/new`}component={OrderNew}/>
          <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/:orderId`}component={OrderId}/>
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`}component={Kitchen}/>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
