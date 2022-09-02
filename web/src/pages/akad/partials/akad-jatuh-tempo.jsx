import React, { useState } from "react";
import { Button, Col, Nav, Row } from "reactstrap";
import { OverlineTitle, PreviewCard, ReactDataTable, RSelect } from "../../../components/Component";

const AkadJatuhTempo = () => {
  const [state, setstate] = useState({
    headColor: "light",
    columns: [
      {
        name: "Nama",
        selector: (row) => row.name_item,
        sortable: true,
        field: "name_item",
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
        selector: (row) => row.nama_barang,
        sortable: true,
        field: "nama_barang",
      },
      {
        name: "Pinjaman",
        selector: (row) => row.pinjaman,
        sortable: true,
        field: "pinjaman",
      },
      {
        name: "Biaya Titip Terbayar",
        selector: (row) => row.biaya_titip_terbayar,
        sortable: true,
        field: "biaya_titip_terbayar",
      },
      {
        name: "Tunggakan",
        selector: (row) => row.tunggakan,
        sortable: true,
        field: "tunggakan",
      },
      {
        name: "Tanggal Akad",
        selector: (row) => row.tanggal_akad,
        sortable: true,
        field: "tanggal_akad",
      },
      {
        name: "Jatuh Tempo",
        selector: (row) => row.jatuh_tempo,
        sortable: true,
        field: "jatuh_tempo",
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
              <Button outline color="info" onClick={onFilter}>
                Pilih
              </Button>
            </Col>
          </Row>
          <br />
          <ReactDataTable
            columns={state.columns}
            keyColumns={state.columns.map((item) => item.field)}
            nameTable="nasabahAkadJatuhTempo"
            expandableRows
            pagination
          />
        </PreviewCard>
      </React.Fragment>
    </>
  );
};

export default AkadJatuhTempo;
