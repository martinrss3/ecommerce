import React from 'react'
import { connect } from "react-redux";
import { enviarCompra } from '../../actions/actionProduct'
import { NavLink } from 'react-router-dom';

function OrdenDetails({ carrito, enviarCompra, usuarioLogueado }) {

  let cantidadDeProductos = carrito.length
  const reducer = (accumulator, currentValue) => accumulator + currentValue.price
  let totalAPagar = carrito.reduce(reducer, 0)

  return (
    <div class="container">
      <table class="table table-sm">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Cantidad de Productos</th>
            <th scope="col">Total</th>
          </tr>
          <tr>
            <td> {cantidadDeProductos} </td>
            <td> $ {totalAPagar}</td>
            <td>
              {(usuarioLogueado.user !== undefined) ? (
                <NavLink class="btn btn-success btn-md" onClick={() => enviarCompra(carrito, usuarioLogueado.user.id)} exact to='/carrito/envio'>Iniciar Compra</NavLink>
              ) : (
                  <button class="btn btn-success btn-md" >Logueate para poder comprar</button>)
              }
            </td>
          </tr>
        </thead>
      </table>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    ...state,
    usuarioLogueado: state.usuarioLogueado,
    carrito: state.carrito
  };
};

export default connect(mapStateToProps, { enviarCompra })(OrdenDetails);
