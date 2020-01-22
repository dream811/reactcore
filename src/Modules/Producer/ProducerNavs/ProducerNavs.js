import React, {Component} from 'react';
import {Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import ProducerMain from '../ProducerMain';
import Agency from '../Agency';
import AUsers from '../AUsers';
import Documents from '../Documents';
import Commission from '../Commission';
import Logs from '../Logs';
import ULogs from '../ULogs';
import AVReview from '../AVReview';
import Association from '../Association';

class ProducerNavs extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  lorem() {
    return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <React.Fragment>
        <TabPane tabId="1">
          <Agency/>
        </TabPane>
        <TabPane tabId="2">
          <AUsers/>
        </TabPane>
        <TabPane tabId="3">
          <Documents/>
        </TabPane>
        <TabPane tabId="4">
          <Commission/>
        </TabPane>
        <TabPane tabId="5">
          <Logs/>
        </TabPane>
        <TabPane tabId="6">
          <ULogs/>
        </TabPane>
        <TabPane tabId="7">
          <AVReview/>
        </TabPane>
        <TabPane tabId="8">
          <Association/>
        </TabPane>
        {/*<TabPane tabId="9">
          <ProducerMain/>
        </TabPane>*/}
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  Agency
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Agency Users
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Documents
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '4'}
                  onClick={() => { this.toggle(0, '4'); }}
                >
                  Commission
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '5'}
                  onClick={() => { this.toggle(0, '5'); }}
                >
                  Logs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '6'}
                  onClick={() => { this.toggle(0, '6'); }}
                >
                  Updated Logs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '7'}
                  onClick={() => { this.toggle(0, '7'); }}
                >
                  Agency Visit Review
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '8'}
                  onClick={() => { this.toggle(0, '8'); }}
                >
                  Association
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>

        </Row>
      </div>
    );
  }
}

export default ProducerNavs;
