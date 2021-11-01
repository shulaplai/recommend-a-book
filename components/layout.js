import Nav from "./nav/nav"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Layout = ({ children, categories, seo }) => (
  <Container>
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <Row>
      <Col>
        <Nav categories={categories} />
        {children}
      </Col>
    </Row>
  </Container>
)

export default Layout
