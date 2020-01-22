import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import ReeValidate from 'ree-validate';
// import AuthService from '../../../services';
import Http from '../../../Http';

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


import AgencyMain from '../AgencyMain';
import AgencyMailingAddress from '../AgencyMailingAddress';
import AgencyLocationAddress from '../AgencyLocationAddress';
import AgencyDetail from '../AgencyDetail';

class Agency extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      agency: null,
      data: [],
      error: false,
    };
    //rest api endpoint
    this.api = process.env.REACT_APP_API_URL+'/api/v1/agency';

  }

  componentDidMount() {
    Http.get(`${this.api}/1`)
      .then((response) => {
        const { data } = response.data;
        console.log(data);
        this.setState({
          data, error: false,
        });
      })
      .catch(() => {
        this.setState({
          error: 'Unable to fetch data.',
        });
      });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { agencyInfo } = this.state;
    this.addAgency(agencyInfo);
  }

  // addAgency = (agencyInfo) => {
  //   Http.post(this.api, { value: agencyInfo })
  //     .then(({ data }) => {
  //       const newItem = {
  //         id: data.admin_id,
  //         value: agencyInfo,
  //       };
  //       const allAgencies = [newItem, ...this.state.data];
  //       this.setState({ data: allAgencies, agencyInfo: null });
  //       this.agencyForm.reset();
  //     })
  //     .catch(() => {
  //       this.setState({
  //         error: 'Sorry, there was an error saving your to do.',
  //       });
  //     });
  // }
  render() {
    const {
      data, error,
    } = this.state;

    return (
      <div className="animated fadeIn">
      <Form action="" method="post" onSubmit={this.handleSubmit} ref={(el) => { this.agencyForm = el; }} >
        <Card>
          <CardBody>
            <Row>
              <Col xs="12">
                
                <AgencyMain agencyInfo = { data }/>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="3">
               <AgencyMailingAddress>
               </AgencyMailingAddress>
              </Col>
              <Col xs="12" sm="3">
               <AgencyLocationAddress>
               </AgencyLocationAddress>
              </Col>
              <Col xs="12" sm="6">
                <AgencyDetail>
                </AgencyDetail>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Products and Commission Rates</strong>
            <Button size="sm" className="btn-linkedin btn-brand mr-1 mb-1 float-right"><span>Add Row</span></Button>
          </CardHeader>
          <CardBody>
            <Table hover bordered striped responsive size="sm">
              <thead>
              <tr>
                <th>POLICY PRODUCT</th>
                <th>COMM.GROUP</th>
                <th>ACTIONS</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <Input type="select" name="policy_product" id="policy_product" bsSize="sm">
                    <option value="">Select Product</option>
                    <option value="1">HO3 (Homeowners)</option>
                    <option value="2">HO6 (Homeowners)</option>
                    <option value="3" select="selected">MH HO3</option>
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
                  <Input type="select" name="com_group" id="com_group" bsSize="sm">
                    <option value="">Select Group</option>
                    <option value="3" select="selected">HO3</option>
                  </Input>
                </td>
                <td>
                  <Button size="sm" color="danger" className="btn-pill">
                    <i className="icon-close icons d-block pt-1"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Input type="select" name="policy_product" id="policy_product" bsSize="sm">
                    <option value="">Select Product</option>
                    <option value="1" select="selected">HO3 (Homeowners)</option>
                    <option value="2">HO6 (Homeowners)</option>
                    <option value="3">MH HO3</option>
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
                  <Input type="select" name="com_group" id="com_group" bsSize="sm">
                    <option value="">Select Group</option>
                    <option value="3" selected="selected">HO3</option>
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
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>License Information</strong>
            <Button size="sm" className="btn-linkedin btn-brand mr-1 mb-1 float-right"><span>Add Row</span></Button>
          </CardHeader>
          <CardBody>
            <Table hover bordered striped responsive size="sm">
              <thead>
              <tr>
                <th>LICENSE TYPE</th>
                <th>LICENSE NO.</th>
                <th>STATE</th>
                <th>APPOINTED</th>
                <th>ISSUE DATE</th>
                <th>EXP.DATE</th>
                <th>APP.DATE</th>
                <th>ACTIONS</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <Input type="select" name="policy_product" id="policy_product" bsSize="sm">
                    <option value="">Select Type</option>
                    <option value="111">Active</option>
                    <option value="112" selected="selected">Closed</option>
                  </Input>
                </td>
                <td>
                  <Input bsSize="sm" type="text" id="agencycode" name="agencycode" className="input-sm" placeholder="" required />
                </td>
                <td>
                  <Input type="select" name="policy_product" id="policy_product" bsSize="sm">
                    <option value="">Select State</option>
                    <option value="125"></option>
                    <option value="115"></option>
                    <option value="153">ABU DHABI</option>
                    <option value="1">ALABAMA</option>
                    <option value="2">ALASKA</option>
                    <option value="68">ALBERTA</option>
                    <option value="178">ALGARVE</option>
                    <option value="159">ALPES COTE DAZUR</option>
                    <option value="3">ARIZONA</option>
                    <option value="4">ARKANSAS</option>
                    <option value="108">ARMED FORCES AMERICA</option>
                    <option value="103">ARMED FORCES EUROPE</option>
                    <option value="126">ARMED FORCES SPECIFIC</option>
                    <option value="171">AYRSHIRE</option>
                    <option value="110">BADAJOZ</option>
                    <option value="134"></option>
                    <option value="148">BANGKOK</option>
                    <option value="155">BAVARIA</option>
                    <option value="87">BAYERN</option>
                    <option value="97">BOGOTA</option>
                    <option value="145">BRASILIA</option>
                    <option value="70">British Columbia</option>
                    <option value="143">BRUSSELS</option>
                    <option value="117">BUCKINGHAMSHIRE</option>
                    <option value="177">CALABARZON</option>
                    <option value="66">CALEDONIA</option>
                    <option value="5">CALIFORNIA</option>
                    <option value="69">CAMBRIDGE</option>
                    <option value="129">cambridgeshire</option>
                    <option value="76">CANTERBURY</option>
                    <option value="102">CAPITAL FEDERAL</option>
                    <option value="170">CENTRAL</option>
                    <option value="167">CENTRE VAL DE LOIRE</option>
                    <option value="59">CHESHIRE</option>
                    <option value="160">CIUDAD</option>
                    <option value="78">CLEVELAND</option>
                    <option value="6">COLORADO</option>
                    <option value="144">COMARCA</option>
                    <option value="7">CONNECTICUT</option>
                    <option value="124">DALARNA</option>
                    <option value="8">DELAWARE</option>
                    <option value="58">DEVON</option>
                    <option value="154">DUNDEE</option>
                    <option value="106">EAST ENGLAND</option>
                    <option value="112">ENGLAND</option>
                    <option value="49" selected="selected">FLORIDA</option>
                    <option value="113">GENEVA</option>
                    <option value="10">GEORGIA</option>
                    <option value="83">GREATER LONDON</option>
                    <option value="127">GUAYAS</option>
                    <option value="123">HAMBURG</option>
                    <option value="11">HAWAII</option>
                    <option value="135">Hesse</option>
                    <option value="116">HORDALAND</option>
                    <option value="12">IDAHO</option>
                    <option value="140">ILE DE FRANCE</option>
                    <option value="13">ILLINOIS</option>
                    <option value="14">INDIANA</option>
                    <option value="168">INDRE ET LOIRE</option>
                    <option value="15">IOWA</option>
                    <option value="162">ISLE OF MAN</option>
                    <option value="16">KANSAS</option>
                    <option value="99">KAUNIAINEN</option>
                    <option value="17">KENTUCKY</option>
                    <option value="176">KINGSTON</option>
                    <option value="65">LEICESTER</option>
                    <option value="114">LEINSTER</option>
                    <option value="100">LIMA</option>
                    <option value="120">LLE-DE-FRANCE</option>
                    <option value="151">LOMBARDY</option>
                    <option value="118">LONDON</option>
                    <option value="18">LOUISIANA</option>
                    <option value="101">LUBUSKIE</option>
                    <option value="179">MADRID</option>
                    <option value="19">MAINE</option>
                    <option value="138"></option>
                    <option value="63">MALLORCA</option>
                    <option value="72">MANITOBA</option>
                    <option value="20">MARYLAND</option>
                    <option value="165">MASOVIA</option>
                    <option value="21">MASSACHUSETTS</option>
                    <option value="22">MICHIGAN</option>
                    <option value="23">MINNESOTA</option>
                    <option value="111">MIRANDA</option>
                    <option value="24">MISSISSIPPI</option>
                    <option value="25">MISSOURI</option>
                    <option value="181">MONACO</option>
                    <option value="26">MONTANA</option>
                    <option value="109">MUNSTER</option>
                    <option value="27">NEBRASKA</option>
                    <option value="28">NEVADA</option>
                    <option value="52">NEW BRUNSWICK</option>
                    <option value="164">NEW HAMPSHIR</option>
                    <option value="29">NEW HAMPSHIRE</option>
                    <option value="30">NEW JERSEY</option>
                    <option value="31">NEW MEXICO</option>
                    <option value="169">NEW SOUTH WALES</option>
                    <option value="32">NEW YORK</option>
                    <option value="57">NEWFOUNDLAND</option>
                    <option value="55">NL</option>
                    <option value="131">NO NAME</option>
                    <option value="132">NO NAME</option>
                    <option value="86">NORRBOTTEN</option>
                    <option value="33">NORTH CAROLINA</option>
                    <option value="34">NORTH DAKOTA</option>
                    <option value="152">NORTH RHINE WESTPHALIA</option>
                    <option value="71">Northwest Territories</option>
                    <option value="61">NOTTINGHAM</option>
                    <option value="56">NOVA SCOTIA</option>
                    <option value="73">NUNAVUT</option>
                    <option value="35">OHIO</option>
                    <option value="36">OKLAHOMA</option>
                    <option value="51">ONTARIO</option>
                    <option value="37">OREGON</option>
                    <option value="130">Paijanne Tavastia</option>
                    <option value="150">PARIS</option>
                    <option value="163">PEMBROKE</option>
                    <option value="38">PENNSYLVANIA</option>
                    <option value="121">PICARDIE</option>
                    <option value="180">PIEDMONT</option>
                    <option value="74">Prince Edward Island</option>
                    <option value="60">Puerto Rico</option>
                    <option value="53">QUEBEC</option>
                    <option value="54">QUEBEC CITY</option>
                    <option value="149">QUITO</option>
                    <option value="39">RHODE ISLAND</option>
                    <option value="147">RIO DE JANEIRO</option>
                    <option value="133">Rodenbach</option>
                    <option value="107">ROGALAND</option>
                    <option value="172">SAO PAULO</option>
                    <option value="67">SASKATCHEWAN</option>
                    <option value="161">SAXONY</option>
                    <option value="62">SCOTLAND</option>
                    <option value="136">Selangor</option>
                    <option value="64">Sodermanland</option>
                    <option value="175">SOUTH AUSTRALIA</option>
                    <option value="40">SOUTH CAROLINA</option>
                    <option value="41">SOUTH DAKOTA</option>
                    <option value="182">SOUTH EAST</option>
                    <option value="105">SOUTH EAST ENGLAND</option>
                    <option value="183">SOUTH RIBBLE</option>
                    <option value="146">SOUTHAMPTON</option>
                    <option value="173">SOUTHERN</option>
                    <option value="139">Staffordshire</option>
                    <option value="128">STATECOLOMBIA</option>
                    <option value="93">STOCKHOLM</option>
                    <option value="137">Surrey</option>
                    <option value="158">SURREY</option>
                    <option value="92">TELEMARK</option>
                    <option value="42">TENNESSEE</option>
                    <option value="43">TEXAS</option>
                    <option value="122">TROMS</option>
                    <option value="142">U.S. Virgin Islands</option>
                    <option value="141">UNITED KINGDOM</option>
                    <option value="44">UTAH</option>
                    <option value="98">UUSIMAA</option>
                    <option value="79">VASTRA GOTALAND</option>
                    <option value="156">VAUD</option>
                    <option value="45">VERMONT</option>
                    <option value="46">VIRGINIA</option>
                    <option value="47">WASHINGTON</option>
                    <option value="77">WASHINGTON</option>
                    <option value="48">WEST VIRGINIA</option>
                    <option value="157">WESTERN AUSTRALIA</option>
                    <option value="9">WISCONSIN</option>
                    <option value="166">WURTTEMBERG</option>
                    <option value="50">WYOMING</option>
                    <option value="82">XX</option>
                    <option value="81">XX</option>
                    <option value="84">XX</option>
                    <option value="88">XX</option>
                    <option value="80">XX</option>
                    <option value="85">XX</option>
                    <option value="89">XX</option>
                    <option value="94">XX</option>
                    <option value="95">XX</option>
                    <option value="96">XX</option>
                    <option value="90">XX</option>
                    <option value="104">XX</option>
                    <option value="91">XX</option>
                    <option value="75">YUKON</option>
                  </Input>
                </td>
                <td>
                  <Input type="select" name="policy_product" id="policy_product" bsSize="sm">
                    <option value="">Select Appointed</option>
                    <option value="769" selected="selected">AVATAR APPOINTED</option>
                    <option value="770">LSA</option>
                    <option value="771">NOT APPOINTED</option>
                  </Input>
                </td>
                <td>
                  <Input bsSize="sm" type="date" id="date-input" name="date-input" placeholder="date" />
                </td>
                <td>
                  <Input bsSize="sm" type="date" id="date-input" name="date-input" placeholder="date" />
                </td>
                <td>
                  <Input bsSize="sm" type="date" id="date-input" name="date-input" placeholder="date" />
                </td>
                <td>
                  <Button size="sm" color="danger" className="btn-pill">
                    <i className="icon-close icons d-block pt-1"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Input type="select" name="policy_product" id="policy_product" bsSize="sm">
                    <option value="">Select Type</option>
                    <option value="111">Active</option>
                    <option value="112" selected="selected">Closed</option>
                  </Input>
                </td>
                <td>
                  <Input bsSize="sm" type="text" id="agencycode" name="agencycode" className="input-sm" placeholder="" required />
                </td>
                <td>
                  <Input type="select" name="policy_product" id="policy_product" bsSize="sm">
                    <option value="">Select State</option>
                    <option value="125"></option>
                    <option value="115"></option>
                    <option value="153">ABU DHABI</option>
                    <option value="1">ALABAMA</option>
                    <option value="2">ALASKA</option>
                    <option value="68">ALBERTA</option>
                    <option value="178">ALGARVE</option>
                    <option value="159">ALPES COTE DAZUR</option>
                    <option value="3">ARIZONA</option>
                    <option value="4">ARKANSAS</option>
                    <option value="108">ARMED FORCES AMERICA</option>
                    <option value="103">ARMED FORCES EUROPE</option>
                    <option value="126">ARMED FORCES SPECIFIC</option>
                    <option value="171">AYRSHIRE</option>
                    <option value="110">BADAJOZ</option>
                    <option value="134"></option>
                    <option value="148">BANGKOK</option>
                    <option value="155">BAVARIA</option>
                    <option value="87">BAYERN</option>
                    <option value="97">BOGOTA</option>
                    <option value="145">BRASILIA</option>
                    <option value="70">British Columbia</option>
                    <option value="143">BRUSSELS</option>
                    <option value="117">BUCKINGHAMSHIRE</option>
                    <option value="177">CALABARZON</option>
                    <option value="66">CALEDONIA</option>
                    <option value="5">CALIFORNIA</option>
                    <option value="69">CAMBRIDGE</option>
                    <option value="129">cambridgeshire</option>
                    <option value="76">CANTERBURY</option>
                    <option value="102">CAPITAL FEDERAL</option>
                    <option value="170">CENTRAL</option>
                    <option value="167">CENTRE VAL DE LOIRE</option>
                    <option value="59">CHESHIRE</option>
                    <option value="160">CIUDAD</option>
                    <option value="78">CLEVELAND</option>
                    <option value="6">COLORADO</option>
                    <option value="144">COMARCA</option>
                    <option value="7">CONNECTICUT</option>
                    <option value="124">DALARNA</option>
                    <option value="8">DELAWARE</option>
                    <option value="58">DEVON</option>
                    <option value="154">DUNDEE</option>
                    <option value="106">EAST ENGLAND</option>
                    <option value="112">ENGLAND</option>
                    <option value="49" selected="selected">FLORIDA</option>
                    <option value="113">GENEVA</option>
                    <option value="10">GEORGIA</option>
                    <option value="83">GREATER LONDON</option>
                    <option value="127">GUAYAS</option>
                    <option value="123">HAMBURG</option>
                    <option value="11">HAWAII</option>
                    <option value="135">Hesse</option>
                    <option value="116">HORDALAND</option>
                    <option value="12">IDAHO</option>
                    <option value="140">ILE DE FRANCE</option>
                    <option value="13">ILLINOIS</option>
                    <option value="14">INDIANA</option>
                    <option value="168">INDRE ET LOIRE</option>
                    <option value="15">IOWA</option>
                    <option value="162">ISLE OF MAN</option>
                    <option value="16">KANSAS</option>
                    <option value="99">KAUNIAINEN</option>
                    <option value="17">KENTUCKY</option>
                    <option value="176">KINGSTON</option>
                    <option value="65">LEICESTER</option>
                    <option value="114">LEINSTER</option>
                    <option value="100">LIMA</option>
                    <option value="120">LLE-DE-FRANCE</option>
                    <option value="151">LOMBARDY</option>
                    <option value="118">LONDON</option>
                    <option value="18">LOUISIANA</option>
                    <option value="101">LUBUSKIE</option>
                    <option value="179">MADRID</option>
                    <option value="19">MAINE</option>
                    <option value="138"></option>
                    <option value="63">MALLORCA</option>
                    <option value="72">MANITOBA</option>
                    <option value="20">MARYLAND</option>
                    <option value="165">MASOVIA</option>
                    <option value="21">MASSACHUSETTS</option>
                    <option value="22">MICHIGAN</option>
                    <option value="23">MINNESOTA</option>
                    <option value="111">MIRANDA</option>
                    <option value="24">MISSISSIPPI</option>
                    <option value="25">MISSOURI</option>
                    <option value="181">MONACO</option>
                    <option value="26">MONTANA</option>
                    <option value="109">MUNSTER</option>
                    <option value="27">NEBRASKA</option>
                    <option value="28">NEVADA</option>
                    <option value="52">NEW BRUNSWICK</option>
                    <option value="164">NEW HAMPSHIR</option>
                    <option value="29">NEW HAMPSHIRE</option>
                    <option value="30">NEW JERSEY</option>
                    <option value="31">NEW MEXICO</option>
                    <option value="169">NEW SOUTH WALES</option>
                    <option value="32">NEW YORK</option>
                    <option value="57">NEWFOUNDLAND</option>
                    <option value="55">NL</option>
                    <option value="131">NO NAME</option>
                    <option value="132">NO NAME</option>
                    <option value="86">NORRBOTTEN</option>
                    <option value="33">NORTH CAROLINA</option>
                    <option value="34">NORTH DAKOTA</option>
                    <option value="152">NORTH RHINE WESTPHALIA</option>
                    <option value="71">Northwest Territories</option>
                    <option value="61">NOTTINGHAM</option>
                    <option value="56">NOVA SCOTIA</option>
                    <option value="73">NUNAVUT</option>
                    <option value="35">OHIO</option>
                    <option value="36">OKLAHOMA</option>
                    <option value="51">ONTARIO</option>
                    <option value="37">OREGON</option>
                    <option value="130">Paijanne Tavastia</option>
                    <option value="150">PARIS</option>
                    <option value="163">PEMBROKE</option>
                    <option value="38">PENNSYLVANIA</option>
                    <option value="121">PICARDIE</option>
                    <option value="180">PIEDMONT</option>
                    <option value="74">Prince Edward Island</option>
                    <option value="60">Puerto Rico</option>
                    <option value="53">QUEBEC</option>
                    <option value="54">QUEBEC CITY</option>
                    <option value="149">QUITO</option>
                    <option value="39">RHODE ISLAND</option>
                    <option value="147">RIO DE JANEIRO</option>
                    <option value="133">Rodenbach</option>
                    <option value="107">ROGALAND</option>
                    <option value="172">SAO PAULO</option>
                    <option value="67">SASKATCHEWAN</option>
                    <option value="161">SAXONY</option>
                    <option value="62">SCOTLAND</option>
                    <option value="136">Selangor</option>
                    <option value="64">Sodermanland</option>
                    <option value="175">SOUTH AUSTRALIA</option>
                    <option value="40">SOUTH CAROLINA</option>
                    <option value="41">SOUTH DAKOTA</option>
                    <option value="182">SOUTH EAST</option>
                    <option value="105">SOUTH EAST ENGLAND</option>
                    <option value="183">SOUTH RIBBLE</option>
                    <option value="146">SOUTHAMPTON</option>
                    <option value="173">SOUTHERN</option>
                    <option value="139">Staffordshire</option>
                    <option value="128">STATECOLOMBIA</option>
                    <option value="93">STOCKHOLM</option>
                    <option value="137">Surrey</option>
                    <option value="158">SURREY</option>
                    <option value="92">TELEMARK</option>
                    <option value="42">TENNESSEE</option>
                    <option value="43">TEXAS</option>
                    <option value="122">TROMS</option>
                    <option value="142">U.S. Virgin Islands</option>
                    <option value="141">UNITED KINGDOM</option>
                    <option value="44">UTAH</option>
                    <option value="98">UUSIMAA</option>
                    <option value="79">VASTRA GOTALAND</option>
                    <option value="156">VAUD</option>
                    <option value="45">VERMONT</option>
                    <option value="46">VIRGINIA</option>
                    <option value="47">WASHINGTON</option>
                    <option value="77">WASHINGTON</option>
                    <option value="48">WEST VIRGINIA</option>
                    <option value="157">WESTERN AUSTRALIA</option>
                    <option value="9">WISCONSIN</option>
                    <option value="166">WURTTEMBERG</option>
                    <option value="50">WYOMING</option>
                    <option value="82">XX</option>
                    <option value="81">XX</option>
                    <option value="84">XX</option>
                    <option value="88">XX</option>
                    <option value="80">XX</option>
                    <option value="85">XX</option>
                    <option value="89">XX</option>
                    <option value="94">XX</option>
                    <option value="95">XX</option>
                    <option value="96">XX</option>
                    <option value="90">XX</option>
                    <option value="104">XX</option>
                    <option value="91">XX</option>
                    <option value="75">YUKON</option>
                  </Input>
                </td>
                <td>
                  <Input type="select" name="policy_product" id="policy_product" bsSize="sm">
                    <option value="">Select Appointed</option>
                    <option value="769" selected="selected">AVATAR APPOINTED</option>
                    <option value="770">LSA</option>
                    <option value="771">NOT APPOINTED</option>
                  </Input>
                </td>
                <td>
                  <Input bsSize="sm" type="date" id="date-input" name="date-input" placeholder="date" />
                </td>
                <td>
                  <Input bsSize="sm" type="date" id="date-input" name="date-input" placeholder="date" />
                </td>
                <td>
                  <Input bsSize="sm" type="date" id="date-input" name="date-input" placeholder="date" />
                </td>
                <td>
                  <Button size="sm" color="danger" className="btn-pill">
                    <i className="icon-close icons d-block pt-1"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Input type="select" name="policy_product" id="policy_product" bsSize="sm">
                    <option value="">Select Type</option>
                    <option value="111">Active</option>
                    <option value="112" selected="selected">Closed</option>
                  </Input>
                </td>
                <td>
                  <Input bsSize="sm" type="text" id="agencycode" name="agencycode" className="input-sm" placeholder="" required />
                </td>
                <td>
                  <Input type="select" name="policy_product" id="policy_product" bsSize="sm">
                    <option value="">Select State</option>
                    <option value="125"></option>
                    <option value="115"></option>
                    <option value="153">ABU DHABI</option>
                    <option value="1">ALABAMA</option>
                    <option value="2">ALASKA</option>
                    <option value="68">ALBERTA</option>
                    <option value="178">ALGARVE</option>
                    <option value="159">ALPES COTE DAZUR</option>
                    <option value="3">ARIZONA</option>
                    <option value="4">ARKANSAS</option>
                    <option value="108">ARMED FORCES AMERICA</option>
                    <option value="103">ARMED FORCES EUROPE</option>
                    <option value="126">ARMED FORCES SPECIFIC</option>
                    <option value="171">AYRSHIRE</option>
                    <option value="110">BADAJOZ</option>
                    <option value="134"></option>
                    <option value="148">BANGKOK</option>
                    <option value="155">BAVARIA</option>
                    <option value="87">BAYERN</option>
                    <option value="97">BOGOTA</option>
                    <option value="145">BRASILIA</option>
                    <option value="70">British Columbia</option>
                    <option value="143">BRUSSELS</option>
                    <option value="117">BUCKINGHAMSHIRE</option>
                    <option value="177">CALABARZON</option>
                    <option value="66">CALEDONIA</option>
                    <option value="5">CALIFORNIA</option>
                    <option value="69">CAMBRIDGE</option>
                    <option value="129">cambridgeshire</option>
                    <option value="76">CANTERBURY</option>
                    <option value="102">CAPITAL FEDERAL</option>
                    <option value="170">CENTRAL</option>
                    <option value="167">CENTRE VAL DE LOIRE</option>
                    <option value="59">CHESHIRE</option>
                    <option value="160">CIUDAD</option>
                    <option value="78">CLEVELAND</option>
                    <option value="6">COLORADO</option>
                    <option value="144">COMARCA</option>
                    <option value="7">CONNECTICUT</option>
                    <option value="124">DALARNA</option>
                    <option value="8">DELAWARE</option>
                    <option value="58">DEVON</option>
                    <option value="154">DUNDEE</option>
                    <option value="106">EAST ENGLAND</option>
                    <option value="112">ENGLAND</option>
                    <option value="49" selected="selected">FLORIDA</option>
                    <option value="113">GENEVA</option>
                    <option value="10">GEORGIA</option>
                    <option value="83">GREATER LONDON</option>
                    <option value="127">GUAYAS</option>
                    <option value="123">HAMBURG</option>
                    <option value="11">HAWAII</option>
                    <option value="135">Hesse</option>
                    <option value="116">HORDALAND</option>
                    <option value="12">IDAHO</option>
                    <option value="140">ILE DE FRANCE</option>
                    <option value="13">ILLINOIS</option>
                    <option value="14">INDIANA</option>
                    <option value="168">INDRE ET LOIRE</option>
                    <option value="15">IOWA</option>
                    <option value="162">ISLE OF MAN</option>
                    <option value="16">KANSAS</option>
                    <option value="99">KAUNIAINEN</option>
                    <option value="17">KENTUCKY</option>
                    <option value="176">KINGSTON</option>
                    <option value="65">LEICESTER</option>
                    <option value="114">LEINSTER</option>
                    <option value="100">LIMA</option>
                    <option value="120">LLE-DE-FRANCE</option>
                    <option value="151">LOMBARDY</option>
                    <option value="118">LONDON</option>
                    <option value="18">LOUISIANA</option>
                    <option value="101">LUBUSKIE</option>
                    <option value="179">MADRID</option>
                    <option value="19">MAINE</option>
                    <option value="138"></option>
                    <option value="63">MALLORCA</option>
                    <option value="72">MANITOBA</option>
                    <option value="20">MARYLAND</option>
                    <option value="165">MASOVIA</option>
                    <option value="21">MASSACHUSETTS</option>
                    <option value="22">MICHIGAN</option>
                    <option value="23">MINNESOTA</option>
                    <option value="111">MIRANDA</option>
                    <option value="24">MISSISSIPPI</option>
                    <option value="25">MISSOURI</option>
                    <option value="181">MONACO</option>
                    <option value="26">MONTANA</option>
                    <option value="109">MUNSTER</option>
                    <option value="27">NEBRASKA</option>
                    <option value="28">NEVADA</option>
                    <option value="52">NEW BRUNSWICK</option>
                    <option value="164">NEW HAMPSHIR</option>
                    <option value="29">NEW HAMPSHIRE</option>
                    <option value="30">NEW JERSEY</option>
                    <option value="31">NEW MEXICO</option>
                    <option value="169">NEW SOUTH WALES</option>
                    <option value="32">NEW YORK</option>
                    <option value="57">NEWFOUNDLAND</option>
                    <option value="55">NL</option>
                    <option value="131">NO NAME</option>
                    <option value="132">NO NAME</option>
                    <option value="86">NORRBOTTEN</option>
                    <option value="33">NORTH CAROLINA</option>
                    <option value="34">NORTH DAKOTA</option>
                    <option value="152">NORTH RHINE WESTPHALIA</option>
                    <option value="71">Northwest Territories</option>
                    <option value="61">NOTTINGHAM</option>
                    <option value="56">NOVA SCOTIA</option>
                    <option value="73">NUNAVUT</option>
                    <option value="35">OHIO</option>
                    <option value="36">OKLAHOMA</option>
                    <option value="51">ONTARIO</option>
                    <option value="37">OREGON</option>
                    <option value="130">Paijanne Tavastia</option>
                    <option value="150">PARIS</option>
                    <option value="163">PEMBROKE</option>
                    <option value="38">PENNSYLVANIA</option>
                    <option value="121">PICARDIE</option>
                    <option value="180">PIEDMONT</option>
                    <option value="74">Prince Edward Island</option>
                    <option value="60">Puerto Rico</option>
                    <option value="53">QUEBEC</option>
                    <option value="54">QUEBEC CITY</option>
                    <option value="149">QUITO</option>
                    <option value="39">RHODE ISLAND</option>
                    <option value="147">RIO DE JANEIRO</option>
                    <option value="133">Rodenbach</option>
                    <option value="107">ROGALAND</option>
                    <option value="172">SAO PAULO</option>
                    <option value="67">SASKATCHEWAN</option>
                    <option value="161">SAXONY</option>
                    <option value="62">SCOTLAND</option>
                    <option value="136">Selangor</option>
                    <option value="64">Sodermanland</option>
                    <option value="175">SOUTH AUSTRALIA</option>
                    <option value="40">SOUTH CAROLINA</option>
                    <option value="41">SOUTH DAKOTA</option>
                    <option value="182">SOUTH EAST</option>
                    <option value="105">SOUTH EAST ENGLAND</option>
                    <option value="183">SOUTH RIBBLE</option>
                    <option value="146">SOUTHAMPTON</option>
                    <option value="173">SOUTHERN</option>
                    <option value="139">Staffordshire</option>
                    <option value="128">STATECOLOMBIA</option>
                    <option value="93">STOCKHOLM</option>
                    <option value="137">Surrey</option>
                    <option value="158">SURREY</option>
                    <option value="92">TELEMARK</option>
                    <option value="42">TENNESSEE</option>
                    <option value="43">TEXAS</option>
                    <option value="122">TROMS</option>
                    <option value="142">U.S. Virgin Islands</option>
                    <option value="141">UNITED KINGDOM</option>
                    <option value="44">UTAH</option>
                    <option value="98">UUSIMAA</option>
                    <option value="79">VASTRA GOTALAND</option>
                    <option value="156">VAUD</option>
                    <option value="45">VERMONT</option>
                    <option value="46">VIRGINIA</option>
                    <option value="47">WASHINGTON</option>
                    <option value="77">WASHINGTON</option>
                    <option value="48">WEST VIRGINIA</option>
                    <option value="157">WESTERN AUSTRALIA</option>
                    <option value="9">WISCONSIN</option>
                    <option value="166">WURTTEMBERG</option>
                    <option value="50">WYOMING</option>
                    <option value="82">XX</option>
                    <option value="81">XX</option>
                    <option value="84">XX</option>
                    <option value="88">XX</option>
                    <option value="80">XX</option>
                    <option value="85">XX</option>
                    <option value="89">XX</option>
                    <option value="94">XX</option>
                    <option value="95">XX</option>
                    <option value="96">XX</option>
                    <option value="90">XX</option>
                    <option value="104">XX</option>
                    <option value="91">XX</option>
                    <option value="75">YUKON</option>
                  </Input>
                </td>
                <td>
                  <Input type="select" name="policy_product" id="policy_product" bsSize="sm">
                    <option value="">Select Appointed</option>
                    <option value="769" selected="selected">AVATAR APPOINTED</option>
                    <option value="770">LSA</option>
                    <option value="771">NOT APPOINTED</option>
                  </Input>
                </td>
                <td>
                  <Input bsSize="sm" type="date" id="date-input" name="date-input" placeholder="date" />
                </td>
                <td>
                  <Input bsSize="sm" type="date" id="date-input" name="date-input" placeholder="date" />
                </td>
                <td>
                  <Input bsSize="sm" type="date" id="date-input" name="date-input" placeholder="date" />
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
          <Button className="btn-xing btn-brand mr-1 mb-1" onClick={this.addAgency}><span>Save Agency / Update Agency</span></Button>
          <Button className="btn-xing btn-brand mr-1 mb-1"><span>New Agency</span></Button>
        </div>
      </Form>
      </div>
    );
  }
}

// export default Agency;

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  data: state.data,
  // user: state.Auth.user,
});

// Agency.defaultProps = {
//   agency: 'Default header',
//   agencyInfo: 'Default contentTitle',
//   agencyDetail: 'Default contentBody'
// };

export default connect(mapStateToProps)(Agency);