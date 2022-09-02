import React, { useState } from "react";
import { Button, Col, Nav, Row } from "reactstrap";
import { Icon, OverlineTitle, PreviewCard, ReactDataTable, RSelect } from "../../../components/Component";

const PelunasanLelang = () => {
  const [state, setState] = useState({
    headColor: "light",
    loading: false,
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
        name: "Tanggal Akad",
        selector: (row) => row.tanggal_akad,
        sortable: true,
        field: "tanggal_akad",
      },
      {
        name: "Tanggal Pelunasan",
        selector: (row) => row.tanggal_pelunasan,
        sortable: true,
        field: "tanggal_pelunasan",
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
              <Button outline color="info" onClick={() => onFilter()}>
                <span>Pilih</span>
                {state.loading && <Icon name="loader" />}
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

export default PelunasanLelang;
