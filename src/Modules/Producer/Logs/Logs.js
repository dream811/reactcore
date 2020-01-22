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

import LogList from '../LogList';
import LogForm from '../LogForm';
// import AgencyDetail from '../AgencyDetail';

class Logs extends Component {
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
              <Col xs="12" sm="12">
               <LogForm>
               </LogForm>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Row>
              <Col xs="12" sm="12">
               <LogList>
               </LogList>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Logs;
