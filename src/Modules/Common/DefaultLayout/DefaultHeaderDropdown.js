import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Badge, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Progress } from 'reactstrap';

const propTypes = {
  accnt: PropTypes.bool,
};
const defaultProps = {
  accnt: false,
};

class DefaultHeaderDropdown extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  dropAccnt() {
    return (

      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
          <DropdownItem onClick={this.props.onLogout}><i className="fa fa-lock"></i> Logout</DropdownItem>
          {/*<DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>*/}
        </DropdownMenu>
      </Dropdown>
    );
  }

  render() {
    const { accnt } = this.props;
    return (
      accnt ? this.dropAccnt() : null
    );
  }
}

DefaultHeaderDropdown.propTypes = propTypes;
DefaultHeaderDropdown.defaultProps = defaultProps;

export default DefaultHeaderDropdown;
