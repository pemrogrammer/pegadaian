import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, FormGroup, Label, Row } from "reactstrap";
import { onChangeEndContract, onInsertInitialState, onInsertForm } from "../../../store/akad";

const FormDataGadai = (props) => {
  const dispatch = useDispatch();
  const { errors, handleSubmit, register } = useForm();

  const stateAkad = useSelector((state) => state.akad);
  const formData = stateAkad.forms;

  const [state, setState] = useState({
    is_input_etc: false,
  });

  const onInputChange = (e) => {
    if (e.target.name == "time_period") {
      dispatch(onChangeEndContract({ time_period: e.target.value }));
    }

    dispatch(onInsertForm({ name: e.target.name, value: e.target.value }));
  };

  const onChangeTypeSubItem = (e) => {
    if (e.target.value == "etc") {
      setState({ is_input_etc: true });
    } else {
      setState({ is_input_etc: false });
    }
  };

  const submitForm = (data) => {
    props.next();
  };

  useEffect(() => {
    dispatch(onInsertInitialState());
  }, []);

  return (
    <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
      <h5>Waktu</h5>
      <hr />
      <Row className="gy-4">
        <Col md="3">
          <FormGroup>
            <label className="form-label" htmlFor="number_id">
              Nomor ID
            </label>
            <div className="form-control-wrap">
              <input
                readOnly
                type="text"
                id="number_id"
                className="form-control"
                name="number_id"
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.number_id}
              />
              {errors.number_id && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <label className="form-label" htmlFor="time_period">
              Jangka Waktu Akad
            </label>
            <div className="form-control-wrap">
              <select
                ref={register({ required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.time_period}
                className="form-control"
                name="time_period"
                id="time_period"
              >
                {stateAkad.lists.time_periods.map((item, index) => (
                  <option value={item.value} key={index}>
                    {item.label}
                  </option>
                ))}
              </select>
              {errors.time_period && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <label className="form-label" htmlFor="start_contract">
              Tanggal Akad
            </label>
            <div className="form-control-wrap">
              <DatePicker
                name="start_contract"
                id="start_contract"
                selected={formData.start_contract}
                className="form-control date-picker"
                dateFormat="dd/MM/yyyy"
                readOnly
              />
              {errors.start_contract && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <label className="form-label" htmlFor="end_contract">
              Tanggal Akad Jatuh Tempo
            </label>
            <div className="form-control-wrap">
              <DatePicker
                name="end_contract"
                id="end_contract"
                selected={formData.end_contract}
                className="form-control date-picker"
                dateFormat="dd/MM/yyyy"
                readOnly
              />
              {errors.end_contract && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
      </Row>
      <br />
      <h5>Barang Jaminan</h5>
      <hr />
      <Row className="gy-4">
        <Col md="3">
          <FormGroup>
            <label className="form-label" htmlFor="name_item">
              Nama Barang
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                id="name_item"
                className="form-control"
                name="name_item"
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.name_item}
              />
              {errors.name_item && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="2">
          <span className="preview-title overline-title">Jenis Barang</span>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="electronic"
              name="type_item"
              onChange={(e) => onInputChange(e)}
              value="electronic"
              className="custom-control-input form-control"
              defaultChecked
            />
            <label className="custom-control-label" htmlFor="electronic">
              Elektronik
            </label>
          </div>
          <div className="custom-control custom-radio ml-2">
            <input
              type="radio"
              id="vehicle"
              name="type_item"
              onChange={(e) => onInputChange(e)}
              value="vehicle"
              className="custom-control-input form-control"
            />
            <label className="custom-control-label" htmlFor="vehicle">
              Kendaraan
            </label>
          </div>
        </Col>
        <Col md="4">
          <span className="preview-title overline-title">Detail Jenis Barang</span>
          {stateAkad.lists.type_sub_items[stateAkad.forms.type_item]?.map((item, index) => (
            <div key={index} style={{ display: "inline" }}>
              <div className="custom-control custom-radio ml-2 mb-2">
                <input
                  type="radio"
                  id={`${stateAkad.forms.type_item}_${index}`}
                  name="type_sub_item"
                  value={item.value}
                  onChange={(e) => onChangeTypeSubItem(e)}
                  className="custom-control-input form-control"
                />
                <label className="custom-control-label" htmlFor={`${stateAkad.forms.type_item}_${index}`}>
                  {item.label}
                </label>
              </div>
              {state.is_input_etc && item.value == "etc" && (
                <div className="custom-control custom-radio ">
                  <input type="text" className="form-control" name="value_etc" onChange={(e) => onInputChange(e)} />
                </div>
              )}
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col md="3">
          <Label htmlFor="good_accessories" className="form-label">
            Kelengkapan Barang
          </Label>
          <div className="form-control-wrap">
            <textarea className="no-resize form-control" type="textarea" id="good_accessories" defaultValue="" />
          </div>
        </Col>
        <Col md="3">
          <Label htmlFor="good_accessories" className="form-label">
            Kekurangan / Kerusakan Barang
          </Label>
          <div className="form-control-wrap">
            <textarea className="no-resize form-control" type="textarea" id="good_accessories" defaultValue="" />
          </div>
        </Col>
        <Col md="3">
          <Label htmlFor="good_accessories" className="form-label">
            Catatan Barang
          </Label>
          <div className="form-control-wrap">
            <textarea className="no-resize form-control" type="textarea" id="good_accessories" defaultValue="" />
          </div>
        </Col>
      </Row>

      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" type="submit">
              Selanjutnya
            </Button>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default FormDataGadai;
