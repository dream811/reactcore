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

import CommissionList from '../CommissionList';
import CommissionDetail from '../CommissionDetail';

class Commission extends Component {
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
            <Row className="float-right">
              <Button size="sm" className="btn-linkedin btn-brand mr-1 mb-1"><span>Commission Account View</span></Button>
              <Button size="sm" className="btn-linkedin btn-brand mr-1 mb-1"><span>Commission Statement</span></Button>
              <Button size="sm" className="btn-linkedin btn-brand mr-1 mb-1"><span>Commission Due</span></Button>
            </Row>
          </CardHeader>
          <CardBody>
            <Table hover bordered striped responsive size="sm">
              <thead>
              <tr>
                <th>ACC DT.</th>
                <th>TRAN TYPE</th>
                <th>TRAN REF</th>
                <th>UNALLOCATED</th>
                <th>DEBIT</th>
                <th>CREDIT</th>
                <th>BALANCE</th>
                <th>SYSTEM DT.</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>06-30-2013</td>
                  <td>Agent Stmt</td>
                  <td><a href="">AGST1000033</a></td>
                  <td>$(473.90)</td>
                  <td>$0.00</td>
                  <td>$(304.70)</td>
                  <td>$(304.70)</td>
                  <td>07-12-2013 08:30:02</td>
                </tr>
                <tr>
                  <td>06-30-2013</td>
                  <td>Agent Stmt</td>
                  <td><a href="">AGST1000033</a></td>
                  <td>$(473.90)</td>
                  <td>$0.00</td>
                  <td>$(304.70)</td>
                  <td>$(304.70)</td>
                  <td>07-12-2013 08:30:02</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
          &nbsp;
          </CardHeader>
          <CardBody>
            <Table hover bordered striped responsive size="sm">
              <thead>
              <tr>
                <th>TRANS SUB TYPE</th>
                <th>UNALLOCATED</th>
                <th>DEBIT</th>
                <th>CREDIT</th>
                <th>CONTRA ACCOUNT</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Commission;
