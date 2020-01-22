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

import AUserList from '../AUserList';
import AUserForm from '../AUserForm';
// import AgencyDetail from '../AgencyDetail';

class AUsers extends Component {
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
            <Row>
              <Col xs="12" sm="6">
               <AUserList>
               </AUserList>
              </Col>
              <Col xs="12" sm="6">
               <AUserForm>
               </AUserForm>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>License Information</strong>
            <Button size="sm" className="btn-linkedin btn-brand mr-1 mb-1 float-right"><span>Add Row</span></Button>
          </CardHeader>
          <CardBody>
            <Table hover bordered striped responsive size="sm">
              <thead>
              <tr>
                <th>PRODUCT</th>
                <th>RULE</th>
                <th>STATE</th>
                <th>REPRESENTATIVE</th>
                <th>U/W ASSIGNED</th>
                <th>LICENSE #</th>
                <th>AUTHERIZATION</th>
                <th>ACTIONS</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <Input type="select" name="product" id="product" bsSize="sm">
                    <option value="">Select Product</option>
                    <option value="1">HO3 (Homeowners)</option>
                    <option value="2">HO6 (Homeowners)</option>
                    <option value="3" selected="selected">MH HO3</option>
                    <option value="4">MH Dwelling Program</option>
                    <option value="5">MHO Direct</option>
                    <option value="6">MDP Direct</option>
                    <option value="7">HO3 (Citizens)</option>
                    <option value="8">HO6 (Citizens)</option>
                    <option value="9">HO3 (Clearing House)</option>
                    <option value="10">Flood Program</option>
                    <option value="11">Commercial Program</option>
                    <option value="12">Commercial Non Residential</option>
                    <option value="13">HO3 Diamond</option>
                    <option value="14">Elements DP 3 Diamond</option>
                    <option value="15">Elements HO3 Select</option>
                    <option value="16">Elements HO6 Select</option>
                    <option value="17">Elements DP1 Select</option>
                    <option value="18">Elements DP3 Select</option>
                  </Input>
                </td>
                <td>
                  <Input type="select" name="product" id="product" bsSize="sm">
                    <option value="">Select Product</option>
                    <option value="1">HO3 (Homeowners)</option>
                    <option value="2">HO6 (Homeowners)</option>
                    <option value="3" selected="selected">MH HO3</option>
                    <option value="4">MH Dwelling Program</option>
                    <option value="5">MHO Direct</option>
                    <option value="6">MDP Direct</option>
                    <option value="7">HO3 (Citizens)</option>
                    <option value="8">HO6 (Citizens)</option>
                    <option value="9">HO3 (Clearing House)</option>
                    <option value="10">Flood Program</option>
                    <option value="11">Commercial Program</option>
                    <option value="12">Commercial Non Residential</option>
                    <option value="13">HO3 Diamond</option>
                    <option value="14">Elements DP 3 Diamond</option>
                    <option value="15">Elements HO3 Select</option>
                    <option value="16">Elements HO6 Select</option>
                    <option value="17">Elements DP1 Select</option>
                    <option value="18">Elements DP3 Select</option>
                  </Input>
                </td>
                <td>
                  <Input type="select" name="product" id="product" bsSize="sm">
                    <option value="">Select Product</option>
                    <option value="1">HO3 (Homeowners)</option>
                    <option value="2">HO6 (Homeowners)</option>
                    <option value="3" selected="selected">MH HO3</option>
                    <option value="4">MH Dwelling Program</option>
                    <option value="5">MHO Direct</option>
                    <option value="6">MDP Direct</option>
                    <option value="7">HO3 (Citizens)</option>
                    <option value="8">HO6 (Citizens)</option>
                    <option value="9">HO3 (Clearing House)</option>
                    <option value="10">Flood Program</option>
                    <option value="11">Commercial Program</option>
                    <option value="12">Commercial Non Residential</option>
                    <option value="13">HO3 Diamond</option>
                    <option value="14">Elements DP 3 Diamond</option>
                    <option value="15">Elements HO3 Select</option>
                    <option value="16">Elements HO6 Select</option>
                    <option value="17">Elements DP1 Select</option>
                    <option value="18">Elements DP3 Select</option>
                  </Input>
                </td>
                <td>
                  <Input type="select" name="product" id="product" bsSize="sm">
                    <option value="">Select Product</option>
                    <option value="1">HO3 (Homeowners)</option>
                    <option value="2">HO6 (Homeowners)</option>
                    <option value="3" selected="selected">MH HO3</option>
                    <option value="4">MH Dwelling Program</option>
                    <option value="5">MHO Direct</option>
                    <option value="6">MDP Direct</option>
                    <option value="7">HO3 (Citizens)</option>
                    <option value="8">HO6 (Citizens)</option>
                    <option value="9">HO3 (Clearing House)</option>
                    <option value="10">Flood Program</option>
                    <option value="11">Commercial Program</option>
                    <option value="12">Commercial Non Residential</option>
                    <option value="13">HO3 Diamond</option>
                    <option value="14">Elements DP 3 Diamond</option>
                    <option value="15">Elements HO3 Select</option>
                    <option value="16">Elements HO6 Select</option>
                    <option value="17">Elements DP1 Select</option>
                    <option value="18">Elements DP3 Select</option>
                  </Input>
                </td>
                <td>
                  <Input type="select" name="product" id="product" bsSize="sm">
                    <option value="">Select Product</option>
                    <option value="1">HO3 (Homeowners)</option>
                    <option value="2">HO6 (Homeowners)</option>
                    <option value="3" selected="selected">MH HO3</option>
                    <option value="4">MH Dwelling Program</option>
                    <option value="5">MHO Direct</option>
                    <option value="6">MDP Direct</option>
                    <option value="7">HO3 (Citizens)</option>
                    <option value="8">HO6 (Citizens)</option>
                    <option value="9">HO3 (Clearing House)</option>
                    <option value="10">Flood Program</option>
                    <option value="11">Commercial Program</option>
                    <option value="12">Commercial Non Residential</option>
                    <option value="13">HO3 Diamond</option>
                    <option value="14">Elements DP 3 Diamond</option>
                    <option value="15">Elements HO3 Select</option>
                    <option value="16">Elements HO6 Select</option>
                    <option value="17">Elements DP1 Select</option>
                    <option value="18">Elements DP3 Select</option>
                  </Input>
                </td>
                <td>
                  <Input bsSize="sm" type="text" id="license" name="license" placeholder="" />
                </td>
                <td>
                  <Input type="select" name="product" id="product" bsSize="sm">
                    <option value="">Select Product</option>
                    <option value="1">HO3 (Homeowners)</option>
                    <option value="2">HO6 (Homeowners)</option>
                    <option value="3" selected="selected">MH HO3</option>
                    <option value="4">MH Dwelling Program</option>
                    <option value="5">MHO Direct</option>
                    <option value="6">MDP Direct</option>
                    <option value="7">HO3 (Citizens)</option>
                    <option value="8">HO6 (Citizens)</option>
                    <option value="9">HO3 (Clearing House)</option>
                    <option value="10">Flood Program</option>
                    <option value="11">Commercial Program</option>
                    <option value="12">Commercial Non Residential</option>
                    <option value="13">HO3 Diamond</option>
                    <option value="14">Elements DP 3 Diamond</option>
                    <option value="15">Elements HO3 Select</option>
                    <option value="16">Elements HO6 Select</option>
                    <option value="17">Elements DP1 Select</option>
                    <option value="18">Elements DP3 Select</option>
                  </Input>
                </td>
                <td>
                  <Button size="sm" color="danger" className="btn-pill">
                    <i className="icon-close icons d-block pt-1"></i>
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
        <div className="text-center">
          <Button className="btn-xing btn-brand mr-1 mb-1"><span>Save Agency User</span></Button>
          <Button className="btn-xing btn-brand mr-1 mb-1"><span>New Agency User</span></Button>
        </div>
      </div>
    );
  }
}

export default AUsers;
