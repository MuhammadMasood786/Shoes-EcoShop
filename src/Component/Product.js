import React from 'react';
import '../App.css';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle,CardText } from 'reactstrap';
import Shoes from '../Shoes.json';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

function Product(props) {

  return (
    <div className="container">
      <div className='row justify-content-center mt-5'>
        <h1 className="logoHeading">Product</h1>
      </div>
      <div className='row justify-content-center mt-5'>
        <Grid container spacing={3}>
          {Object.keys(Shoes).map((keyName) => {
            return (
              <Grid item xs={3} >
                <Card>
                  <CardImg top width="100%" src={Shoes[keyName].img} alt={Shoes[keyName].name} />
                  <CardBody>
                    <CardTitle className="styleTitle">{Shoes[keyName].name}</CardTitle>
                    <div className="beside">
                      <CardSubtitle className="colorPrice"><b>{Shoes[keyName].price}</b></CardSubtitle>
                      <CardText><Link to={`/product/${keyName}`}><i class="fa fa-cart-plus" aria-hidden="true"></i></Link></CardText>
                    </div>
                  </CardBody>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Product;

