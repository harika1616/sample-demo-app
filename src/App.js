import { Col, Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import CarouselSection from './components/CarouselSection';
import CompanyServices from './components/CompanyServices';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import TwoColumnSection from './components/TwoColumnSection';
import CompanyPage from './components/pages/CompanyPage';
import ContactPage from './components/pages/ContactPage';
import ProductPage from './components/pages/ProductPage';
import { LIST_IMAGES } from './constants/IMAGES_DATA';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Container>
            <Row className="justify-content-left">
              <Col xs="auto">{/* <CompanyLogo /> */}</Col>
            </Row>
            <Row className="justify-content-center mt-2">
              <Menu />
            </Row>
          </Container>
        </header>

        <main>
          <Route path="/" exact>
            <Container className="px-0">
              <CarouselSection />
              <CompanyServices />
              <TwoColumnSection />
              <Gallery images={LIST_IMAGES} />
            </Container>
          </Route>
          <Route path="/product" exact component={ProductPage} />
          <Route path="/company" exact component={CompanyPage} />
          <Route path="/contact" exact component={ContactPage} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
