import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { FormGroup, Col, Input, Card, CardHeader, CardBody, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist//react-bootstrap-table-all.min.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import AccountService from '../../../services/accounting';

const AccountTypeList = props => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    useEffect(() => {
        props.getList({ page });
    }, []);
    /************* Handle page change **************/
    const handlePageChange = (page, sizePerPage) => {
        //this.fetchData(page, sizePerPage);
        props.getList({ page, search });
        setPage(page);
    }
    /*********** Action buttons ************/
    const actions = (cell, row) => {
        const id = `/manage-account-type/edit-account-type/${row.Account_Type_ID}`
        return (
            <>
                <NavLink strict to={id} className="btn btn-success"> Edit </NavLink>
                <Button className="btn btn-danger" onClick={() => handleDelete(row.Account_Type_ID)}> Delete </Button>
            </>
        );
    };
    /**************Search account name or number ***************/
    const handleSearch = () => {
        if (search.trim().length) {
            props.getList({ page: 1, search });
            setPage(1);
        }
    }
    /************** Reset Search ***************/
    const handleResetSearch = () => {
        props.getList({ page: 1 });
        setPage(1);
        setSearch("")
    }
    /*********** delete account type ***********/
    const handleDelete = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (<div className='custom-ui'>
                    <h1>Are you sure?</h1>
                    <p>You want to delete this account type.</p>
                    <button className="badge badge-blue" onClick={onClose}>No</button>
                    <button className="badge badge-red" onClick={() => {
                        props.accountTypeDelete(id).then(() => props.getList({ page }));
                        onClose();
                    }}>
                        Yes, Delete it!
                    </button>
                </div>);
            }
        });
    };
    // Customization Function 
    const rowClassNameFormat = (row, rowIdx) => {
        return { backgroundColor: rowIdx % 2 !== 0 ? '#f0f3f5' : '#20a8d8', color: rowIdx % 2 === 0 ? "#fff" : "#23282c" };
    }
    const { accounting, isLoading } = props;
    const options = {
        sortIndicator: true,
        page,
        onPageChange: handlePageChange,
        hideSizePerPage: true,
        paginationSize: 10,
        hidePageListOnlyOnePage: true,
        clearSearch: true,
        alwaysShowAllBtns: false,
        withFirstAndLast: false,
        sizePerPage: props.size
    };

    return (
        <div className="animated">
            <Card>
                <CardHeader>
                    <i className="icon-menu"></i>Account Types{' '}
                </CardHeader>
                <CardBody>
                    <FormGroup row>
                        <Col md="3"><Input type="text" name="search" id="search" value={search} placeholder="Look for account name or number" onChange={e => setSearch(e.target.value)} /></Col>
                        <Col md="1"> <Button className="btn btn-success" onClick={() => handleSearch()} disabled={isLoading}>Search</Button> </Col>
                        <Col md="1"> <Button onClick={() => handleResetSearch()}>Reset</Button> </Col>
                    </FormGroup>

                    {isLoading ? <div className="animated fadeIn pt-1 text-center">Loading...</div> :
                        <BootstrapTable
                            data={accounting}
                            version="4"
                            remote
                            condensed
                            striped hover pagination
                            options={{ ...options, page }}
                            fetchInfo={{ dataTotalSize: props.total_rows }}
                            trStyle={rowClassNameFormat}
                        >
                            <TableHeaderColumn isKey dataField="Account_Type_Name" dataSort >Account Type</TableHeaderColumn>
                            <TableHeaderColumn dataField="Account_Type_Class">Class</TableHeaderColumn>
                            <TableHeaderColumn dataField="Account_Type_Status" dataSort>Status</TableHeaderColumn>
                            <TableHeaderColumn dataField="" dataFormat={actions}>Action</TableHeaderColumn>
                        </BootstrapTable>
                    }
                </CardBody>
            </Card>
        </div>
    );
};

AccountTypeList.propTypes = {
    getList: PropTypes.func.isRequired,
    accounting: PropTypes.array.isRequired,
    total_rows: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    accountTypeDelete: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    accounting: state.accounting.accountTypes,
    total_rows: state.accounting.total_rows,
    size: state.accounting.size,
    isLoading: state.loader.isLoading
});

const mapDispatchToProps = dispatch => ({
    getList: bindActionCreators(AccountService.accountTypeList, dispatch),
    accountTypeDelete: bindActionCreators(AccountService.accountTypeDelete, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountTypeList);
