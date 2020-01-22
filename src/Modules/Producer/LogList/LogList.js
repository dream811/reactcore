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

class LogList extends Component {
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
        <Row>
        <Col sm={{ size: 4, order: 1, offset: 8 }} className="float-right">
          <InputGroup>
            <Input type="text" id="input1-group2" name="input1-group2" placeholder="Username" />
            <InputGroupAddon addonType="append">
              <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        </Row>  
        <Table hover bordered striped responsive size="sm">
          <thead>
          <tr>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>INSERTED BY</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>2012/01/01</td>
              <td>Description1</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>2012/02/01</td>
              <td>Description1</td>
              <td>Staff</td>
            </tr>
            <tr>
              <td>2012/02/01</td>
              <td>Description1</td>
              <td>Admin</td>
            </tr>
            <tr>
              <td>2012/03/01</td>
              <td>Description1</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>2012/01/21</td>
              <td>Description1</td>
              <td>Staff</td>
            </tr>
          </tbody>
        </Table>
        <Pagination>
          <PaginationItem>
            <PaginationLink previous tag="button"></PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink tag="button">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink tag="button">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink tag="button">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink tag="button">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next tag="button"></PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

export default LogList;
