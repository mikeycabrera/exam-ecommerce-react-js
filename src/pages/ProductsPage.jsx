import React, { useEffect, useState } from 'react'
import { userApi } from '../api/userApi';
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import './ProductsPage.css';
import ReactPaginate from "react-paginate";
import { useNavigate } from 'react-router-dom';

export const ProductsPage = () => {

    //Se define use navigate para poder redirigirnos a la pagina del detalle del producto
    const navigate = useNavigate();

    //Se define las variables de useState , que guardara la data del Api.
    const [products, setProducts] = useState([]);

    const localProduct = localStorage.getItem('productDetails');
    const productDetal = JSON.parse(localProduct);

    //Variables que manejan el tamaño de nuestra barra de paginado
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 4;
    const pagesVisited = pageNumber * productsPerPage;

    //Se implementa UseEffect para poder realizar la peticion a la Api Asincrona
    useEffect(() => {
        if (productDetal === null) {
            getProducts();
        } else {
            setProducts(productDetal);
        }
    }, [])

    //Se implementa la funcion que consume la api.
    const getProducts = async () => {
        const res = await userApi.get("https://fakestoreapi.com/products");
        setProducts(res.data)
        localStorage.setItem("productDetails", JSON.stringify(res.data))
    }

    const pageCount = Math.ceil(products.length / productsPerPage);

    //Funcion que pasa el valor sobre la pestaña seleccionada y mostrar los datos.
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    //Funcion que contiene la navegacion a la pagina detalle de los productos.
    const fnDetail = (id, data) => {
        navigate("/detail-Product", { state: { id: id, detail: data } })
    }


    return (
        <div>
            {
                products
                    .slice(pagesVisited, pagesVisited + productsPerPage)
                    .map(product => (
                        <Container className="justify-content-md-center">
                            <Row>
                                <Col>
                                    <Card style={{ width: '14rem' }}>
                                        <Card.Img className="img*thumnail" src={product.image} style={{ width: 70 }} />
                                        <Card.Body>
                                            <Card.Title className='card__title'>{product.title}</Card.Title>
                                            <p className="card-text text-secondary">${product.price}</p>
                                            <Button variant="primary" onClick={() => fnDetail(product.id, product)}>Details</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    ))
            }
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div >
    )
}
export default ProductsPage;
