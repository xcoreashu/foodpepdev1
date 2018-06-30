
import React, { Component } from 'react';
import { Container, Row, Col, Fa, Button } from 'mdbreact';
import './Landing.css';

class Landing extends Component {
  render() {
    return(
      <Container>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
          <p className="lead blue-text  w-responsive text-center mx-auto mb-5 font-weight-bold">"FoodPeP is a food ordering and delivery company based out of Bhubaneswar,Odisha. FoodPeP was inspired by the thought of providing a complete food ordering and delivery solution from the best neighbourhood restaurants to the urban foodie. A single window for ordering from a wide range of restaurants, we have our own exclusive fleet of delivery personnel to pickup orders from restaurants and deliver it to customers . Having our own fleet gives us the flexibility to offer customers a no minimum order policy on any restaurant and accept online payments for all partner restaurants that we work with. Our delivery personnel carry one order at a time which ensures we get reliable and fast deliveries."</p>
          <img className = "img-fluid" src = "https://github.com/xcoreashu/foodpep/blob/master/restaurant%20(1)2345-01%20(1).jpg?raw=true" alt = "foodpepdelv" />
          <Row>
            <Col md="4">
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="flag-checkered" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">International</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="flask" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Experimental</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="glass" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Relaxing</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="text-name">
            
            </Col>
            <Col md="4">
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="heart" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Beloved</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="flash" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Rapid</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="magic" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Magical</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>

    );
  };
}

export default Landing;
