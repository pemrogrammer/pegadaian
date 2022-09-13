import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, FormGroup, Label, Row } from "reactstrap";
import {
  onChangeEndContract,
  onInsertInitialState,
  onInsertForm,
  onChangeDepositFeePaid,
  onChangeDepositFee,
  onChangeMentionedMarhunBih,
  onChangePaymentMethod,
} from "../../../store/akad";
import { formatCurrency } from "../../../utils/Utils";

const FormDataGadai = (props) => {
  const dispatch = useDispatch();
  const { errors, handleSubmit, register } = useForm();

  const stateAkad = useSelector((state) => state.akad);
  const formData = stateAkad.forms;

  const [state, setState] = useState({
    is_input_etc: false,
  });

  const onInput = (e) => {
    dispatch(onInsertForm({ name: e.target.name, value: e.target.value }));

    if (e.target.name == "time_period") {
      dispatch(onChangeEndContract({ time_period: e.target.value }));
    } else if (e.target.name == "type_item") {
      dispatch(onChangeDepositFee());
    }
  };

  const onInputNumberCurrency = (e) => {
    const value = formatCurrency(e.target.value, "Rp. ");
    e.target.value = value;

    dispatch(onInsertForm({ name: e.target.name, value: value }));

    if (e.target.name == "marhun_bih") {
      dispatch(onChangeDepositFee());
      dispatch(onChangeMentionedMarhunBih());
    }
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

  useEffect(() => {
    dispatch(onChangeDepositFee());
  }, [formData.payment_method]);

  useEffect(() => {
    dispatch(onChangePaymentMethod());
  }, [formData.time_period]);

  useEffect(() => {
    dispatch(onChangeDepositFeePaid());
  }, [formData.payment_method, formData.time_period]);

  return (
    <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
      <br />
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
                onChange={(e) => onInput(e)}
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
                onChange={(e) => onInput(e)}
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
                onChange={(e) => onInput(e)}
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
              onChange={(e) => onInput(e)}
              defaultValue="electronic"
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
              onChange={(e) => onInput(e)}
              defaultValue="vehicle"
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
                  defaultValue={item.value}
                  onChange={(e) => onChangeTypeSubItem(e)}
                  className="custom-control-input form-control"
                />
                <label className="custom-control-label" htmlFor={`${stateAkad.forms.type_item}_${index}`}>
                  {item.label}
                </label>
              </div>
              {state.is_input_etc && item.value == "etc" && (
                <div className="custom-control custom-radio ">
                  <input type="text" className="form-control" name="value_etc" onChange={(e) => onInput(e)} />
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
            <textarea
              className="no-resize form-control"
              type="textarea"
              id="good_accessories"
              name="good_accessories"
              defaultValue={formData.good_accessories}
              onChange={(e) => onInput(e)}
            />
          </div>
        </Col>
        <Col md="3">
          <Label htmlFor="shortage_goods" className="form-label">
            Kekurangan / Kerusakan Barang
          </Label>
          <div className="form-control-wrap">
            <textarea
              className="no-resize form-control"
              type="textarea"
              id="shortage_goods"
              name="shortage_goods"
              defaultValue={formData.shortage_goods}
              onChange={(e) => onInput(e)}
            />
          </div>
        </Col>
        <Col md="3">
          <Label htmlFor="note_item" className="form-label">
            Catatan Barang
          </Label>
          <div className="form-control-wrap">
            <textarea
              className="no-resize form-control"
              type="textarea"
              id="note_item"
              name="note_item"
              defaultValue=""
            />
          </div>
        </Col>
      </Row>
      <br />
      <Row className="gy-4">
        <Col md="3">
          <FormGroup>
            <label className="form-label" htmlFor="taksiran_marhun">
              Taksiran Marhun
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                id="taksiran_marhun"
                className="form-control"
                name="taksiran_marhun"
                ref={register({ required: true })}
                onChange={(e) => onInputNumberCurrency(e)}
                defaultValue={formData.taksiran_marhun}
              />
              {errors.taksiran_marhun && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <label className="form-label" htmlFor="marhun_bih">
              Marhun Bih
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                id="marhun_bih"
                className="form-control"
                name="marhun_bih"
                ref={register({ required: true })}
                onChange={(e) => onInputNumberCurrency(e)}
                defaultValue={formData.marhun_bih}
              />
              {errors.marhun_bih && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <label className="form-label" htmlFor="payment_method">
              Opsi Pembayaran
            </label>
            <div className="form-control-wrap">
              <select
                ref={register({ required: true })}
                onChange={(e) => onInput(e)}
                defaultValue={formData.payment_method}
                className="form-control"
                name="payment_method"
                id="payment_method"
              >
                {stateAkad.lists.payment_methods.map((item, index) => (
                  <option value={item.value} key={index}>
                    {item.label}
                  </option>
                ))}
              </select>
              {errors.payment_method && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <label className="form-label" htmlFor="deposit_fee">
              Biaya Titip
            </label>
            <div className="form-control-wrap">
              <input
                readOnly
                type="text"
                id="deposit_fee"
                className="form-control"
                name="deposit_fee"
                ref={register({ required: true })}
                onChange={(e) => onInputNumberCurrency(e)}
                defaultValue={formData.deposit_fee}
              />
              {errors.deposit_fee && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <label className="form-label" htmlFor="deposit_fee_paid">
              Biaya Titip yang Dibayar
            </label>
            <div className="form-control-wrap">
              <select
                ref={register({ required: true })}
                onChange={(e) => onInput(e)}
                defaultValue={formData.deposit_fee_paid}
                className="form-control"
                name="deposit_fee_paid"
                id="deposit_fee_paid"
              >
                {stateAkad.lists.deposit_fee_paids.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.deposit_fee_paid && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <label className="form-label" htmlFor="deposit_fee_paid_total">
              Jumlah Biaya Titip yang Dibayar
            </label>
            <div className="form-control-wrap">
              <input
                readOnly
                type="text"
                id="deposit_fee_paid_total"
                className="form-control"
                name="deposit_fee_paid_total"
                ref={register({ required: true })}
                onChange={(e) => onInput(e)}
                defaultValue={formData.deposit_fee_paid_total}
              />
              {errors.deposit_fee_paid_total && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <label className="form-label" htmlFor="admin_fee">
              Biaya Admin
            </label>
            <div className="form-control-wrap">
              <input
                readOnly
                type="text"
                id="admin_fee"
                className="form-control"
                name="admin_fee"
                ref={register({ required: true })}
                onChange={(e) => onInput(e)}
                defaultValue={formData.admin_fee}
              />
              {errors.admin_fee && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <label className="form-label" htmlFor="mentioned_marhun_bih">
              Terbilang
            </label>
            <div className="form-control-wrap">
              <input
                readOnly
                type="text"
                id="mentioned_marhun_bih"
                className="form-control"
                name="mentioned_marhun_bih"
                ref={register({ required: true })}
                onChange={(e) => onInput(e)}
                defaultValue={formData.mentioned_marhun_bih}
              />
              {errors.mentioned_marhun_bih && <span className="invalid">This field is required</span>}
            </div>
          </FormGroup>
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
