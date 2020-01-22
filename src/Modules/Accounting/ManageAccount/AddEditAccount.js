import React, { useEffect } from 'react';
import { LocalForm, Control, Errors, actions } from 'react-redux-form';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import AccountService from '../../../services/accounting';
import { required } from '../../../utilities/regex';
import Message from '../../../utilities/message';

export default ({ history, match }) => {
  const dispatch = useDispatch();
  const { accounting, loader } = useSelector(state => state);
  const data = accounting.accounts.find(account => account.Account_ID.toString() === match.params["id"]) || {};

  useEffect(() => {
    dispatch(AccountService.accountTypeList());
  }, []);

  const handleSubmit = (values) => {
    const object = {
      ...values,
      Company_Name: values.Account_No[0],
      Account_No: Object.values(values.Account_No).join(""),
      Territory: values.Account_No[1],
      LOB: values.Account_No[2],
      Bank_Account_Number: Object.values(values.Account_No).join(""),
      Currency_transaction: values["Currency_transaction"] || "USD"
    };
    if (match.params["id"]) {
      dispatch(AccountService.editAccount({ id: match.params["id"], ...object }))
        .then(() => {
          history.push("/manage-account/accounts-list")
        });
    } else {
      dispatch(AccountService.addAccount(object))
        .then(() => {
          history.push("/manage-account/accounts-list")
        });
    }

  };

  const attachDispatch = (_dispatch) => {
    _dispatch(actions.change(data));
  };

  const buttonName = match.params["id"] ? "Update" : "Submit";
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" md="8">
          <Card>
            <LocalForm
              onSubmit={(values) => handleSubmit(values)}
              model="account"
              className="form-horizontal"
              initialState={{ ...data }}
              getDispatch={(_dispatch) => attachDispatch(_dispatch)}
            >
              <CardHeader>
                <strong>ACCOUNT INFORMATION:</strong>
              </CardHeader>
              <CardBody>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Account Name:*</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Control
                      model=".Account_Name"
                      component={props => <Input {...props} type="text" id="text-input" name="text-input" />}
                      validators={{ required }}
                    />
                    <Errors
                      model=".Account_Name"
                      show={(field) => field.touched && !field.focus}
                      className="error"
                      messages={{
                        required: Message.required
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Account Name Show:*</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Control
                      model=".Account_Name_Show"
                      component={props => <Input {...props} type="text" id="Account-name-show" placeholder="Account name show" />}
                      validators={{ required }}
                    />
                    <Errors
                      model=".Account_Name_Show"
                      show={(field) => field.touched && !field.focus}
                      className="error"
                      messages={{
                        required: Message.required
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Account no</Label>
                  </Col>
                  <Col xs="12" md="2">
                    <Control
                      model=".Account_No[0]"
                      component={props => <Input {...props} type="number" max="9" id="Account-name-show" placeholder="" />}
                      validators={{ required }}
                    />

                  </Col>
                  <Col xs="12" md="2">
                    <Control
                      model=".Account_No[1]"
                      component={props => <Input {...props} type="number" max="9" id="Account-name-show" placeholder="" />}
                      validators={{ required }}
                    />
                  </Col>
                  <Col xs="12" md="2">
                    <Control
                      model=".Account_No[2]"
                      component={props => <Input {...props} type="number" max="9" id="Account-name-show" placeholder="" />}
                      validators={{ required }}
                    />
                  </Col>
                  <Col xs="12" md="2">
                    <Control
                      model=".Account_No[3]"
                      component={props => <Input {...props} type="number" max="9" id="Account-name-show" placeholder="" />}
                      validators={{ required }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">Account Type:*</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Control
                      model=".Account_Type_ID"
                      component={props => <Input {...props} type="select" name="Account_Type_ID" id="select">
                        <option value="">Select Account Type</option>
                        {accounting.accountTypes.map((row, index) =>
                          <option key={index} value={row.Account_Type_ID}>{row.Account_Type_Name}</option>)
                        }

                      </Input>}
                      validators={{ required }}
                    />
                    <Errors
                      model=".Account_Type_ID"
                      show={(field) => field.touched && !field.focus}
                      className="error"
                      messages={{
                        required: Message.required
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">Cash Account</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Control
                      model=".Cash_Account"
                      component={props => <Input {...props} type="select" name="Cash_Account" id="select">
                        <option value="">Select Cash Account</option>
                        <option value="1">Central Bank</option>
                        <option value="2">BNY Cash</option>
                      </Input>}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">Accrued Interest Account</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Control
                      model=".Accrued_Account"
                      component={props => <Input {...props} type="select" name="Accrued_Account" id="select">
                        <option value="">Select Accrued Account</option>
                        <option value="1">US Bank interst accrued</option>
                        <option value="2">BNY interst accrued</option>
                      </Input>}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">Description:*</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Control
                      model=".Account_Description"
                      component={props => <Input {...props} type="textarea" name="textarea-input" id="textarea-input" rows="5"
                        placeholder="Description..." />}
                      validators={{ required }}
                    />
                    <Errors
                      model=".Account_Description"
                      show={(field) => field.touched && !field.focus}
                      className="error"
                      messages={{
                        required: Message.required
                      }}
                    />

                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">Partner Account:* </Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Control
                      model=".Partner_Account"
                      component={props => <Input {...props} type="select" name="Partner_Account" id="select">
                        <option value="">Select Account</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </Input>}
                      validators={{ required }}
                    />
                    <Errors
                      model=".Partner_Account"
                      show={(field) => field.touched && !field.focus}
                      className="error"
                      messages={{
                        required: Message.required
                      }}
                    />

                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">165/k1 Link </Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Control
                      model=".taxfldname"
                      component={props => <Input {...props} type="select" name="taxfldname" id="select">
                        <option value="">Select Tex from field</option>
                        <option value="part 3-5, credit">Part 3-5, credit</option>
                        <option value="part 3-6, credit">Part 3-6, credit</option>
                      </Input>}
                    />

                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">Select Currency</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Control
                      model=".Currency_transaction"
                      component={props => <Input {...props} type="select" name="Currency_transaction" id="select">
                        <option value="USD">USD</option>
                        <option value="Other">Other</option>
                      </Input>}
                    />

                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">Status:*</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Control
                      model=".Account_Status"
                      component={props => <Input {...props} type="select" name="select" id="select">
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </Input>}
                      validators={{ required }}
                    />
                    <Errors
                      model=".Account_Status"
                      show={(field) => field.touched && !field.focus}
                      className="error"
                      messages={{
                        required: Message.required
                      }}
                    />

                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" disabled={loader.isLoading} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> {loader.isLoading ? `${buttonName}...` : buttonName}</Button>
                <Control.reset
                  id="reset"
                  model="account"
                  className="btn btn-cancel"
                ><Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </Control.reset>
              </CardFooter>
            </LocalForm>
          </Card>
        </Col>
      </Row>
    </div>
  )
}