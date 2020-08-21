import React from 'react';
import TablaItems from './TablaItems';
import OrdenDetails from '../admin/OrdenDetails';
import { connect } from "react-redux";

function Carrito({ carrito }) {

  return (
    <div class="container">
      <TablaItems />
      {(carrito.length > 0) ? (<OrdenDetails />) : ('')}
    </div>
  )
};

function mapStateToProps(state) {
  return {
    ...state,
    carrito: state.carrito
  };
};

export default connect(mapStateToProps, {})(Carrito);
