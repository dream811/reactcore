import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
  Dropdown, 
  Nav, NavItem, 
  NavLink, 
  Table, 
  Pagination, 
  PaginationItem, 
  PaginationLink 
} from 'reactstrap';

class AgencyMailingAddress extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardBody>
            <strong>Agency Mailing Address</strong>
            <hr/> 
            <Form action="" method="post" >
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="address1">Address 1</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input bsSize="sm" type="text" id="address1" name="address1" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="address2">Address 2</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input bsSize="sm" type="text" id="address2" name="address2" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="address3">Address 3</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input bsSize="sm" type="text" id="address3" name="address3" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="zip">Zip</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input bsSize="sm" type="text" id="zip" name="zip" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="city">City</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input bsSize="sm" type="text" id="city" name="city" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="state">State</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input bsSize="sm" type="text" id="state" name="state" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="country">Country</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input bsSize="sm" type="text" id="country" name="country" className="input-sm" placeholder="" required />
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AgencyMailingAddress;
