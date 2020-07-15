import React from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import imgBanner from '../Images/banner.png';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="setDiv">
            <h1 className="logoHeading">New Arrival</h1>
            <h4 className='styleHeading'><i>Your dream Shoes is here. Shop the <br />collection and make part of your life.</i></h4>
            <button type="button" className="btn btn-outline-dark"><Link to="/product" id="colorLess">Shop Now</Link></button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img src={imgBanner} className="imgBanner" alt='banner' />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
