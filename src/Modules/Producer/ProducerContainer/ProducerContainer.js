import React, { Component } from 'react';
import { 
  Button, 
  Card, 
  CardBody, 
  CardHeader, 
  Dropdown, 
  DropdownItem,
  DropdownMenu, 
  DropdownToggle, 
  Nav, NavItem, 
  NavLink, 
  Table, 
  Badge, 
  Pagination, 
  PaginationItem, 
  PaginationLink 
} from 'reactstrap';


import ProducerNavs from '../ProducerNavs';
import './ProducerContainer.css';


class ProducerContainer extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: [false, false],
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Producer</strong>
            <div className="float-right">
              <Button size="sm" color="primary" className="btn-brand mr-1 mb-1"><i className="cui-user-follow icons"></i><span>New Agency</span></Button>
              <Button size="sm" color="success" className="btn-brand mr-1 mb-1"><i className="cui-magnifying-glass icons"></i><span>Search Agency</span></Button>
            </div>
          </CardHeader>
          <CardBody>
            <ProducerNavs>
            </ProducerNavs>
            {/*<Nav tabs>
              <NavItem>
                <NavLink href="#" active>Agency</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" >Agency Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Documents</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Commission</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Logs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Updated Logs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Agency visit Review</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Association</NavLink>
              </NavItem>
            </Nav>
            <div className="tab-body">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Main</strong>
                  <Button size="sm" className="btn-linkedin btn-brand mr-1 mb-1 float-right"><span>Add Row</span></Button>
                </CardHeader>
                <CardBody>
                  <ProducerMain>
                  </ProducerMain>
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
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Vishnu Serghei</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Zbyněk Phoibos</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="danger">Banned</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Einar Randall</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <Badge color="secondary">Inactive</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Félix Troels</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Aulus Agmundr</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                    </tbody>
                  </Table>
                  <nav>
                    <Pagination>
                      <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                      <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                    </Pagination>
                  </nav>
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
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Vishnu Serghei</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Zbyněk Phoibos</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="danger">Banned</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Einar Randall</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <Badge color="secondary">Inactive</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Félix Troels</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Aulus Agmundr</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                    </tbody>
                  </Table>
                  <nav>
                    <Pagination>
                      <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                      <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                      <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                    </Pagination>
                  </nav>

                </CardBody>
              </Card>
              <div className="text-center">
                <Button className="btn-xing btn-brand mr-1 mb-1"><span>Save Agency</span></Button>
                <Button className="btn-xing btn-brand mr-1 mb-1"><span>New Agency</span></Button>
              </div>
            </div>*/}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ProducerContainer;