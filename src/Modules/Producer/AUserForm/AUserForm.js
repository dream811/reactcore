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

class AUserForm extends Component {
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
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Agency User Form</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" >
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="user_id" className="pr-1">User ID:</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input bsSize="sm" type="text" id="user_id" name="user_id" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="sub_agent_id" className="pr-1">Sub Agent ID:</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input bsSize="sm" type="text" id="sub_agent_id" name="sub_agent_id" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="screen_name" className="pr-1">Screen Name</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input bsSize="sm" type="text" id="screen_name" name="screen_name" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="fml_name" className="pr-1">F/M/L Name</Label>
                </Col>
                <Col xs="4" md="3">
                  <Input bsSize="sm" type="text" id="f_name" name="f_name" className="input-sm" placeholder="" required />
                </Col>
                <Col xs="4" md="3">
                  <Input bsSize="sm" type="text" id="m_name" name="m_name" className="input-sm" placeholder="" required />
                </Col>
                <Col xs="4" md="3">
                  <Input bsSize="sm" type="text" id="l_name" name="l_name" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="email" className="pr-1">E-Mail</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input bsSize="sm" type="text" id="email" name="email" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="phone" className="pr-1">Phone</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input bsSize="sm" type="text" id="phone" name="phone" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="status" className="pr-1">Status</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="select" name="status" id="status" bsSize="sm">
                    <option value="">Select Status</option>
                    <option value="111">Active</option>
                    <option value="112" selected="selected">Closed</option>
                  </Input>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Label size="sm" htmlFor="user_level" className="pr-1">User Level</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="select" name="status" id="status" bsSize="sm">
                    <option value="" selected="selected">Select User Level</option>
                    <option value="1">Administrator</option>
                    <option value="2">Producer</option>
                    <option value="3">Principle</option>
                    <option value="4">Agent-PreAuthorize</option>
                    <option value="5">Accountant-1</option>
                    <option value="6">U/W Trainee</option>
                    <option value="7">Underwriter</option>
                    <option value="8">Read Only</option>
                    <option value="9">Marketing Representative</option>
                    <option value="10">Claims</option>
                    <option value="11">Chief Accounting Officer</option>
                    <option value="12">IT</option>
                    <option value="13">Reception</option>
                    <option value="14">PrintOnly</option>
                    <option value="15">Administration Associate</option>
                    <option value="16">Inspector</option>
                    <option value="17">TESTUSER</option>
                    <option value="19">Emergency Adjuster Profile</option>
                    <option value="20">Read Only L1</option>
                    <option value="21">Field Adjuster</option>
                    <option value="22">Producer-Elementary</option>
                    <option value="23">Marketing Manager</option>
                    <option value="24">Underwriting Manager</option>
                    <option value="25">Senior CSR</option>
                    <option value="26">Subrogation Specialist</option>
                    <option value="27">Claims Manager</option>
                    <option value="28">Legal Manager</option>
                    <option value="29">Legal Counsel</option>
                    <option value="30">Dispatch Manager</option>
                    <option value="31">Office Manager</option>
                    <option value="32">Marketing-Support</option>
                  </Input>
                </Col>             
              </Row>
              <Row>
                  <Col md="3">
                    <Label size="sm" htmlFor="eff_from" className="pr-1">Eff From</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <Input bsSize="sm" type="text" id="eff_from" name="eff_from" className="input-sm" placeholder="" required />
                  </Col>
                  <Col md="3" >
                    <Label size="sm" htmlFor="eff_to" className="pr-1">Eff To</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <Input bsSize="sm" type="text" id="eff_to" name="eff_to" className="input-sm" placeholder="" required />
                  </Col>
              </Row>
              
              
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AUserForm;
