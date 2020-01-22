import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  CustomInput,
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

class Association extends Component {
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
            <strong>Agency Association</strong>
          </CardHeader>
          <CardBody>
            <FormGroup>
              <CustomInput
                type="checkbox"
                id="aaa"
                label="AAA"
                required
                >
              </CustomInput>
              <CustomInput
                type="checkbox"
                id="all_state"
                label="Allstate"
                required
                >
              </CustomInput>
              <CustomInput
                type="checkbox"
                id="state_farm"
                label="State Farm"
                required
                >
              </CustomInput>
              <CustomInput
                type="checkbox"
                id="farm_burea"
                label="Farm Brea"
                required
                >
              </CustomInput>
              <CustomInput
                type="checkbox"
                id="cis"
                label="CIS"
                required
                >
              </CustomInput>
              <CustomInput
                type="checkbox"
                id="usaa"
                label="USAA"
                required
                >
              </CustomInput>
              <CustomInput
                type="checkbox"
                id="faia"
                label="FAIA"
                required
                >
              </CustomInput>

            </FormGroup>
            <FormGroup>
              <Button size="sm" className="btn-linkedin btn-brand mr-1 mb-1 float-right"><span>Submit</span></Button>
            </FormGroup>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Association;
