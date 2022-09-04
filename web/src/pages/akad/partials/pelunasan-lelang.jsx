import React, { useState } from "react";
import { Button, Col, Nav, Row } from "reactstrap";
import { Icon, OverlineTitle, PreviewCard, ReactDataTable, RSelect } from "../../../components/Component";

const PelunasanLelang = () => {
  const [state, setState] = useState({
    headColor: "light",
    loading: false,
    columns: [
      {
        name: "Nama Pelanggan",
        selector: (row) => row.name_customer,
        sortable: true,
        field: "name_customer",
      },
      {
        name: "Jenis Barang",
        selector: (row) => row.type_item,
        sortable: true,
        field: "type_item",
      },
      {
        name: "No. telp",
        selector: (row) => row.no_telp,
        sortable: true,
        field: "no_telp",
      },
      {
        name: "ID",
        selector: (row) => row.no_id,
        sortable: true,
        field: "no_id",
      },
      {
        name: "Jaminan",
        selector: (row) => row.insurance_item,
        sortable: true,
        field: "insurance_item",
      },
      {
        name: "Pinjaman",
        selector: (row) => row.loan,
        sortable: true,
        field: "loan",
      },
      {
        name: "Biaya Titip Terbayar",
        selector: (row) => row.deposit_fee_paid,
        sortable: true,
        field: "deposit_fee_paid",
      },
      {
        name: "Tanggal Akad",
        selector: (row) => row.date_contract,
        sortable: true,
        field: "date_contract",
      },
      {
        name: "Tanggal Pelunasan",
        selector: (row) => row.payment_date,
        sortable: true,
        field: "payment_date",
      },
    ],
    types: [
      {
        value: "lunas",
        label: "Nasabah Lunas",
      },
      {
        value: "lelang",
        label: "Nasabah Lelang",
      },
      {
        value: "refund",
        label: "Nasabah Refund",
      },
    ],
  });

  const onFilter = () => {
    setState({
      ...state,
      loading: true,
    });

    setTimeout(() => {
      setState({
        ...state,
        loading: false,
      });
    }, 1000);
  };

  return (
    <>
      <React.Fragment>
        <PreviewCard>
          <Row className="gy-4">
            <Col sm="3">
              <div className="form-group">
                {/* <label className="form-label">Pilih Jenis Jatuh Tempo</label> */}
                <RSelect options={state.types} placeholder="Pilih Jenis Pelunasan dan Lelang" />
              </div>
            </Col>
            <Col sm="2">
              <Button color="primary" onClick={() => onFilter()}>
                <span>Pilih</span>
                {state.loading && <Icon name="loader" />}
              </Button>
            </Col>
          </Row>
          <br />
          <ReactDataTable
            columns={state.columns}
            keyColumns={state.columns.map((item) => item.field)}
            nameTable="pelunasanLelang"
            expandableRows
            pagination
          />
        </PreviewCard>
      </React.Fragment>
    </>
  );
};

export default PelunasanLelang;
