import React, {useState} from 'react';
import { useHttp } from '../../services/dataService';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Input, Label, Form, FormGroup, Button, Table } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist//react-bootstrap-table-all.min.css';

const ClaimsSearchPanel = props => (
  <Form inline>
    <FormGroup className="search-form-group" style={ { padding: '5px' } }>
      <Label >Policy No</Label>
      <Input onChange={props.filterHandler} value={props.filter.Risk_Id} type="text" name="Risk_Id" placeholder="Policy No"/>
    </FormGroup>
    <FormGroup className="search-form-group" style={ { padding: '5px' } }>
      <Label >Last Name</Label>
      <Input onChange={props.filterHandler} value={props.filter.last_name} type="text" name="last_name" placeholder="Last Name"/>
    </FormGroup>
    <FormGroup className="search-form-group" style={ { padding: '5px' } }>
      <Label >First Name</Label>
      <Input onChange={props.filterHandler} value={props.filter.first_name} type="text" name="first_name" placeholder="First Name"/>
    </FormGroup>
    <FormGroup className="search-form-group" style={ { padding: '5px' } }>
      <Label>Status</Label>
      <Input onChange={props.filterHandler} value={props.filter.claim_status_code} type="select" name="claim_status_code">
        <option value="">Select...</option>
        <option value="Open">Open</option>
        <option value="Close">Close</option>
        <option value="Re-Open">Re-Open</option>
      </Input>
    </FormGroup>
    <FormGroup className="search-form-group" style={ { padding: '5px' } }>
      <Label >Agency Name</Label>
      <Input onChange={props.filterHandler} value={props.filter.agency_name} type="text" name="agency_name" placeholder="Agency Name"/>
    </FormGroup>
    <FormGroup className="search-form-group" style={ { padding: '5px' } }>
      <Label >Claim No</Label>
      <Input onChange={props.filterHandler} value={props.filter.Claim_No} type="text" name="Claim_No" placeholder="Claim No"/>
    </FormGroup>
  </Form>
);

const Claims = props => {

  const [filter, setFilter] = useState({});

  const filterHandler = event => { 
    const newFilter = {...filter};
    newFilter[event.target.name] = event.target.value;
    setFilter(newFilter);
  }

  const [isLoading, fetchedData] = useHttp(process.env.REACT_APP_API_URL+'api/v1/claims?filter='+JSON.stringify(filter), [filter]);
  const claims = fetchedData ? fetchedData.data : [];

  const options = {
    exportCSVBtn: false,
    clearSearch: true,
    alwaysShowAllBtns: false,
    withFirstAndLast: false
  }

  const claimFormat = (cell, row) => {
    return <Link to={`/claims/${row.ClaimId_PK}`}>{cell}</Link>
  }

  const claimTypeFormat = (cell, row) => {
    return row.claim_type.Description;
  }

  const policyFormat = (cell, row) => {
    return <Link to={`/policy/${row.n_PolicyNoId_FK}`}>{cell}</Link>
  }

  console.log(claims);
  let content = <p>Loading claims...</p>;

  if (!isLoading && claims ) {
    content = (
      <BootstrapTable data={claims} version="4" striped hover pagination search_ options={options} >
          <TableHeaderColumn dataField="Risk_Id" dataSort={true} dataFormat={policyFormat} >Policy No</TableHeaderColumn>
          <TableHeaderColumn dataField="Insured_Name" dataSort={true}>Insured Person</TableHeaderColumn>
          <TableHeaderColumn dataField="Claim_No" isKey={true} dataSort={true} dataFormat={claimFormat} >Claim_No</TableHeaderColumn>
          <TableHeaderColumn dataField="Claim_Status_Code" dataSort={true}>Status</TableHeaderColumn>
          <TableHeaderColumn dataField="Agency_Name" dataSort={true}>Agency Name</TableHeaderColumn>
          <TableHeaderColumn dataField="claim_type" dataSort={true} dataFormat={claimTypeFormat}>Loss Type</TableHeaderColumn>
          <TableHeaderColumn dataField="Inserted_Date" dataSort={true}>Created</TableHeaderColumn>
      </BootstrapTable>
    )
  } else if ( !isLoading ) {
    content = <p>Could not fetch any data.</p>;
  }

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader>
              <ClaimsSearchPanel filter={filter} filterHandler={filterHandler}/>
            </CardHeader>
            <CardBody>
              {content}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>

  )
}
export default Claims;