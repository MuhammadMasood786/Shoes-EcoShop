import React from 'react';
import '../App.css';
import Shoes from '../Shoes.json';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function ProductItem() {

  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe) {
    return (<h1 className=" row justify-content-center mt-5 logoHeading">Product Not Found!</h1>)
  }
  return (
    <div className="mainStyle">
      <Grid container spacing={3} className='row justify-content-center mt-1' >
        <Grid item xs={6}  >
          <Card>
            <div className="cardStyle">
              <CardImg top width="100%" className="styleImg" src={shoe.img} alt={shoe.name} />
              <CardBody>
                <CardTitle className="styleTitle1">{shoe.name}</CardTitle>
                <div className="beside1">
                  <CardSubtitle className="colorPrice1">{shoe.price}</CardSubtitle>
                  <CardText><i class="fa fa-plus-circle" aria-hidden="true"></i></CardText>
                </div>
              </CardBody>
            </div>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
}

export default ProductItem;

