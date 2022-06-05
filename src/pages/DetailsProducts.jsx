import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

export const DetailsProducts = () => {

  const [detProduct, setdetProduct] = useState([]);
  //Se define use navigate para poder redirigirnos a la pagina  de home
  const navigate = useNavigate();

  //Se  implementa el Hook useLocation para obtener los dato enviados desde la pagina de home.
  const location = useLocation();


  useEffect(() => {
    getDetailProducts();
  }, [])

  const getDetailProducts = () => {
    setdetProduct(location);
    console.log(location);
  }

  return (
    <div>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>Product Title</th>
            <th>Product Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>{location.state.detail.title}</td>
            <td>
              <img 
                src={location.state.detail.image}
                className='img-thumbnail'
                style={{width: 220}}/>
              </td>
            <td>{location.state.detail.description}</td>
            <td>{location.state.detail.price}</td>
            <td><Button variant="primary" onClick={() => navigate(-1)}>Home</Button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DetailsProducts;
