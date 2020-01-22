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

class AgencyMain extends Component {
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
            <Row className="float-center">
              <Col className="pr-1">
                <Label size="sm" htmlFor="agency_code" className="pr-1">Agency Code</Label>
                <Input bsSize="sm" type="text" id="agency_code" name="agency_code" value={this.props.agencyInfo.s_PersonUniqueId} className="input-sm" placeholder="" required />
              </Col>
              <Col className="pr-1">
                <Label size="sm" htmlFor="agency_name" className="pr-1">Agency Name</Label>
                <Input bsSize="sm" type="text" id="agency_name" name="agency_name" value={this.props.agencyInfo.s_LastOrganizationName} className="input-sm" placeholder="" required />
              </Col>
              <Col className="pr-1">
                <Label size="sm" htmlFor="dba_name" className="pr-1">DBA Name</Label>
                <Input bsSize="sm" type="text" id="dba_name" name="dba_name" value={this.props.agencyInfo.s_DBAName} className="input-sm" placeholder="" required />
              </Col>
              
              <Col className="pr-1">
                <Label size="sm" htmlFor="agency_status" className="pr-1">Agency Status</Label>
                <Input bsSize="sm" type="text" id="agency_status" name="agency_status" value={this.props.agencyInfo.s_PersonStatusCode} className="input-sm" placeholder="" required />
              </Col>
              <Col className="pr-1">
                <Label size="sm" htmlFor="eft_payee_name" className="pr-1">EFT Payee Name</Label>
                <Input bsSize="sm" type="text" id="eft_payee_name" name="eft_payee_name" value={this.props.agencyInfo.s_PayeeName} className="input-sm" placeholder="" required />
              </Col>
            
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AgencyMain;
