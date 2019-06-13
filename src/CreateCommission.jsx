import React, { Component } from 'react';
import { MDBInput } from "mdbreact";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from "react-datepicker";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { MDBDataTable } from 'mdbreact';
import FormControl from '@material-ui/core/FormControl';
import * as myConst from './helper/Constant';

class CreateCommission extends Component {
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className="container">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="form_bg">
                            <div className="header_part">
                                <h2>Create Commission</h2>
                            </div>
                            <div className="form_body">
                                <div className="px-lg-5 pt-0">
                                    <div className="form-row px-5">
                                        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 offset-lg-2">
                                            <div className="md-form">
                                            <InputLabel htmlFor="age-simple">Level </InputLabel>
                                                <Select>
                                                    <MenuItem value={'1'}>1</MenuItem>
                                                    <MenuItem value={'2'}>2</MenuItem>
                                                    <MenuItem value={'3'}>3</MenuItem>
                                                    <MenuItem value={'4'}>4</MenuItem>
                                                    <MenuItem value={'5'}>5</MenuItem>
                                                    <MenuItem value={'6'}>6</MenuItem>
                                                    <MenuItem value={'7'}>7</MenuItem>
                                                    <MenuItem value={'8'}>8</MenuItem>
                                                    <MenuItem value={'9'}>9</MenuItem>
                                                    <MenuItem value={'10'}>10</MenuItem>
                                                    <MenuItem value={'11'}>11</MenuItem>
                                                    <MenuItem value={'12'}>12</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row px-5">
                                        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 offset-lg-2">
                                            <div className="md-form">
                                                <MDBInput label="FYC (First Year Commission)" name="fyc"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row px-5">
                                        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 offset-lg-2">
                                            <div className="md-form">
                                                <MDBInput label="Renewal" name="renewal"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row px-5">
                                        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 offset-lg-2">
                                            <div className="md-form">
                                                <MDBInput label="5 Years & CLM" name="clm"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="buttons text-center">
                                        <button className="btn btn-rounded my-4 waves-effect" type="submit">Cancel</button>
                                        <button className="btn btn-rounded my-4 waves-effect" type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCommission;