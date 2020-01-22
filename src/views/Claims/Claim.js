import React from 'react';
import { useHttp } from '../../services/dataService';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const Claim = props => {
  
  const [isLoading, fetchedData] = useHttp(process.env.REACT_APP_API_URL+'api/v1/claims/'+props.match.params.id,[]);

  let content = <p>Loading claim details ...</p>;

  if (!isLoading && fetchedData && fetchedData.data) {

    const claim = fetchedData.data;

    content = (
      <tbody>
      {
        <>
        <tr>
          <td>Claim No:</td>
          <td><strong>{claim.Claim_No}</strong></td>
        </tr>
        <tr>
          <td>Police No:</td>
          <td><strong>{claim.Risk_Id}</strong></td>
        </tr>
        <tr>
          <td>Insured Person:</td>
          <td><strong>{claim.Insured_Name}</strong></td>
        </tr>
        <tr>
          <td>Agency Name:</td>
          <td><strong>{claim.Agency_Name}</strong></td>
        </tr>
        <tr>
          <td>Inserted Date:</td>
          <td><strong>{claim.Inserted_Date}</strong></td>
        </tr>
        </>
      }
      </tbody>
    )
  } else if ( !isLoading ) {
    content = <p>Could not fetch any data.</p>;
  }
      
  return (
    <div className="animated fadeIn">
      <Row>
        <Col lg={6}>
          <Card>
            <CardHeader>
              <strong><i className="icon-info pr-1"></i>Claim ID: {props.match.params.id}</strong>
            </CardHeader>
            <CardBody>
                <Table responsive striped hover>
                  {content}
                </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Claim;
