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

class DocumentForm extends Component {
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
            <i className="fa fa-align-justify"></i><strong>Document Form</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" >
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="file_name" className="pr-1">File Name</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input bsSize="sm" type="text" id="file_name" name="file_name" className="input-sm" placeholder="" required />
                </Col>
              </Row>
              
              <Row>
                <Col md="4">
                  <Label size="sm" htmlFor="status" className="pr-1">Select File Type</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input type="select" name="status" id="status" bsSize="sm">
                    <option value="">Select File Type</option>
                    <option value="111">Active</option>
                    <option value="112" selected="selected">Closed</option>
                  </Input>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Label htmlFor="file-input">File input</Label>
                </Col>
                <Col xs="12" md="8">
                  <Input type="file" id="file-input" name="file-input" />
                </Col>
              </Row>
              <Row >
                <Col className="text-center">
                  <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DocumentForm;
