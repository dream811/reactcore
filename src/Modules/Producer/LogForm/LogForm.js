import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CustomInput,
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

class LogForm extends Component {
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
            <i className="fa fa-align-justify"></i><strong>Add Log Detail</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" >
              <Row>
                <Col md="2">
                  <Label>Log Type</Label>
                </Col>
                <Col md="10">
                  <FormGroup check inline>
                    <CustomInput
                      type="radio"
                      id="accept1"
                      name="log_type"
                      label="Internal"
                      className="pr-5"
                      required
                      >
                    </CustomInput>

                    <CustomInput
                      type="radio"
                      id="accept2"
                      name="log_type"
                      label="External"
                      required
                      >
                    </CustomInput>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <Label size="sm" htmlFor="description" className="pr-1">Description</Label>
                </Col>
                <Col xs="12" md="10">
                    <Input type="textarea" name="description" id="description" rows="9"
                      placeholder="Content..." />
                </Col>
              </Row>

             
              <Row >
                <Col>
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

export default LogForm;
