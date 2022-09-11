import React, { useState } from "react";
import { Button, Col, Nav, Row } from "reactstrap";
import { OverlineTitle, PreviewCard, ReactDataTable, RSelect } from "../../../components/Component";

const AkadJatuhTempo = () => {
  const [state, setstate] = useState({
    headColor: "light",
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
        width: "100px",
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
        width: "200px",
      },
      {
        name: "Tunggakan",
        selector: (row) => row.arrears,
        sortable: true,
        field: "arrears",
      },
      {
        name: "Tanggal Akad",
        selector: (row) => row.date_contract,
        sortable: true,
        field: "date_contract",
      },
      {
        name: "Tanggal Jatuh Tempo",
        selector: (row) => row.due_date,
        sortable: true,
        field: "due_date",
        width: "200px",
      },
    ],
    types: [
      {
        value: "7",
        label: "Jatuh Tempo 7 Hari",
      },
      {
        value: "15",
        label: "Jatuh Tempo 15 Hari",
      },
      {
        value: "30",
        label: "Jatuh Tempo 30 Hari",
      },
      {
        value: "60",
        label: "Jatuh Tempo 60 Hari",
      },
      {
        value: "tertunggak",
        label: "Nasabah Tertunggak",
      },
      {
        value: "mendekati_tempo_lelang",
        label: "Nasabah Mendekati Jatuh Tempo Lelang",
      },
      {
        value: "tempo_lelang",
        label: "Nasabah Jatuh Tempo Lelang",
      },
      {
        value: "tunda_lelang",
        label: "Nasabah Tunda Lelang",
      },
    ],
  });

  const onFilter = () => {
    console.info("on filter");
  };

  return (
    <>
      <React.Fragment>
        <PreviewCard>
          <Row className="gy-4">
            <Col sm="3">
              <div className="form-group">
                {/* <label className="form-label">Pilih Jenis Jatuh Tempo</label> */}
                <RSelect options={state.types} placeholder="Pilih Jenis Jatuh Tempo" />
              </div>
            </Col>
            <Col sm="2">
              <Button color="primary" onClick={onFilter}>
                Pilih
              </Button>
            </Col>
          </Row>
          <br />
          <ReactDataTable
            columns={state.columns}
            keyColumns={state.columns.map((item) => item.field)}
            nameTable="akadJatuhTempo"
            expandableRows
            pagination
          />
        </PreviewCard>
      </React.Fragment>
    </>
  );
};

export default AkadJatuhTempo;
