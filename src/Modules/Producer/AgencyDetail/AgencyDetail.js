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

class AgencyDetail extends Component {
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
            <Form action="" method="post" >
            <Row>
            <Col md="6">
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="web">Web</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="web" name="web" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="agency_phone">Agency Phone</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="agency_phone" name="agency_phone" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="agency_fax">Agency Fax</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="agency_fax" name="agency_fax" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="manager_name">Manager Name</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="manager_name" name="manager_name" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="manager_phone">Manager Phone</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="manager_phone" name="manager_phone" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="manager_email">Manager Email</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="manager_email" name="manager_email" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="principal_name">Principal Name</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="principal_name" name="country" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="principal_phone">Principal Phone</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="principal_phone" name="principal_phone" className="input-sm" placeholder="" required />
                </Col>             
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="principal_email">Principal Email</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="principal_email" name="principal_email" className="input-sm" placeholder="" required />
                </Col>
              </Row>
            </Col>
            <Col md="6">  
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="select_group">Select Group</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="select_group" name="select_group" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="fein_number">FEIN Number</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="fein_number" name="fein_number" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="direct_deposit">Direct Deposit</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="direct_deposit" name="direct_deposit" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="bank_account_no">Bank Account No</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="bank_account_no" name="bank_account_no" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="bank_name">Bank Name</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="bank_name" name="bank_name" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="routing_no">Routing No</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="routing_no" name="routing_no" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="uw_assign">U/W Assign</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="uw_assign" name="uw_assign" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="service_rep">Service Rep</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="service_rep" name="service_rep" className="input-sm" placeholder="" required />
                </Col>
              </Row>
            </Col>
            </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AgencyDetail;
