import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import DefaultHeaderDropdown from './DefaultHeaderDropdown'
import logo from '../../../assets/img/brand/logo.png'
import sygnet from '../../../assets/img/brand/sygnet.svg'

// Added Dropdown -- Santosh
import DefaultPolicyDropdown from './DefaultPolicyDropdown';
import ClientServiceDropdown from './ClientServiceDropdown';
import ClaimServiceDropdown from './ClaimServiceDropdown';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
        <React.Fragment>
          <AppSidebarToggler className="d-lg-none" display="md" mobile />
          <AppNavbarBrand
            full={{ src: logo, width: 100,  alt: 'Avatar Insurance Logo' }}
            minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
          />
          <AppSidebarToggler className="d-md-down-none" display="lg" />
          <Nav className="d-md-down-none" navbar>
            <NavItem className="px-3">
              <NavLink to="/dashboard" className="nav-link trbg nav-bt" >Dashboard</NavLink>
            </NavItem>
            <NavItem className="dd-wrapper">
              <DefaultPolicyDropdown />
            </NavItem>
            <NavItem className="dd-wrapper">
              <ClientServiceDropdown/>
            </NavItem>
            <NavItem className="dd-wrapper">
              <ClaimServiceDropdown/>
            </NavItem>
            <NavItem className="px-3">
              <NavLink to="/producer" className="nav-link trbg nav-bt">Producer</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink to="#" className="nav-link trbg nav-bt">Accounting</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink to="#" className="nav-link">Report</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink to="#" className="nav-link">Activity Log&nbsp;<sup className="bg-danger"></sup></NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink to="#" className="nav-link">Administraction</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
          <i className="icon-user"></i>&nbsp;<strong>Your Underwriter</strong>&nbsp;&nbsp;{' '}
          <strong className="badge badge-success">Patrick Brennan</strong>&nbsp;<strong>- (813) 514-0333</strong>
          <DefaultHeaderDropdown onLogout={this.props.onLogout} accnt />
        </Nav>
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
