import React , { Component } from 'react';
import { Container, Row, Col, Card, CardBody,  Mask, Fa, View, Button} from 'mdbreact';

class TeamPage extends Component {

render() {


    return(
      <Container>
        <section>
          <h2 className="h1-responsive font-weight-bold my-5">Our amazing team</h2>
          <p className="orange-text w-responsive mx-auto mb-5">We sincerely care for the needs of the customers.</p>
          <Row>
            <Col md="4" className="mb-md-0 mb-5">
              <img src="https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/20882598_1470155259743459_1115400890781853088_n.jpg?_nc_cat=0&oh=61c856076af0e2e57b397c692bdfa29b&oe=5BE7BAD5" className="rounded z-depth-1-half img-fluid" alt="Sample avatar"/>
              <h4 className="font-weight-bold dark-grey-text my-4">Prajnyasis Biswal</h4>
              <h6 className="text-uppercase grey-text mb-3">CEO</h6>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                <Fa icon="facebook"/>
              </Button>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-dribbble">
                <Fa icon="dribbble"/>
              </Button>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                <Fa icon="twitter"/>
              </Button>
            </Col>

            <Col md="4" className="mb-md-0 mb-5">
              <img src="https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/14355686_743701275767846_3897649387591039582_n.jpg?_nc_cat=0&oh=68ec0e518d661bf8f56958680a358da9&oe=5BE73A92" className="rounded z-depth-1-half img-fluid" alt="Sample avatar"/>
              <h4 className="font-weight-bold dark-grey-text my-4">Vivek Jha</h4>
              <h6 className="text-uppercase grey-text mb-3">CEO</h6>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-email">
                <Fa icon="envelope"/>
              </Button>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                <Fa icon="facebook"/>
              </Button>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-git">
                <Fa icon="github"/>
              </Button>
            </Col>

            <Col md="4" className="mb-md-0 mb-5">
              <img src="https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/20882931_851668238322684_2941901889506986132_n.jpg?_nc_cat=0&oh=5b42be74054302f943c0e83449e94043&oe=5B9EA322" className="rounded z-depth-1-half img-fluid" alt="Sample avatar"/>
              <h4 className="font-weight-bold dark-grey-text my-4">Nigam Jyoti Sahu</h4>
              <h6 className="text-uppercase black-text mb-3">CEO</h6>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-li">
                <Fa icon="linkedin"/>
              </Button>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                <Fa icon="twitter"/>
              </Button>
              <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-pin">
                <Fa icon="pinterest"/>
              </Button>
            </Col>

          </Row>
        </section>
      </Container>
    )
    }
  }

  export default TeamPage;
