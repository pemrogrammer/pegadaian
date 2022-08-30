import React, { useEffect, useState } from "react";

import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { PreviewCard, ReactDataTable } from "../../../components/Component";
import { insertData } from "../../../store/datatable";

const NasabahAkad = () => {
  const stateAkad = useSelector((state) => state.akad);
  const dispatch = useDispatch();

  const [activeAltTab, setActiveAltTab] = useState("1");
  const [state, setstate] = useState({
    headColor: "light",
    columns: [
      {
        name: "Nama",
        selector: (row) => row.name,
        sortable: true,
        field: "name",
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
      {
        name: "Prosedur",
        selector: (row) => row.prosedur,
        sortable: true,
        field: "prosedur",
      },
    ],
  });

  useEffect(() => {
    // dispatch(insertData({ data: stateAkad.allData, nameTable: "nasabahAkadAllData" }));
    dispatch(insertData({ data: [], nameTable: "nasabahAkadAllData" }));
  }, []);

  const toggleAltTab = (alttab) => {
    if (activeAltTab !== alttab) setActiveAltTab(alttab);
  };

  return (
    <>
      <React.Fragment>
        <PreviewCard>
          <Nav tabs className="mt-n3">
            <NavItem>
              <NavLink
                tag="a"
                href="#tab"
                className={classnames({ active: activeAltTab === "1" })}
                onClick={(ev) => {
                  ev.preventDefault();
                  toggleAltTab("1");
                }}
              >
                Seluruh Data
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag="a"
                href="#tab"
                className={classnames({ active: activeAltTab === "2" })}
                onClick={(ev) => {
                  ev.preventDefault();
                  toggleAltTab("2");
                }}
              >
                Harian
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag="a"
                href="#tab"
                className={classnames({ active: activeAltTab === "3" })}
                onClick={(ev) => {
                  ev.preventDefault();
                  toggleAltTab("3");
                }}
              >
                7 Hari
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag="a"
                href="#tab"
                className={classnames({ active: activeAltTab === "4" })}
                onClick={(ev) => {
                  ev.preventDefault();
                  toggleAltTab("4");
                }}
              >
                15 Hari
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeAltTab}>
            <TabPane tabId="1">
              <h4>Seluruh Data :</h4>
              <ul>
                {/* {stateDatatable.tableData["nasabahAkadAllData"].map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))} */}
              </ul>
              <ReactDataTable
                columns={state.columns}
                keyColumns={state.columns.map((item) => item.field)}
                nameTable="nasabahAkadAllData"
                expandableRows
                pagination
              />
              <hr />
              <h4 className="mt-5">1 Bulan Terakhir :</h4>
              <ReactDataTable
                columns={state.columns}
                keyColumns={state.columns.map((item) => item.field)}
                nameTable="nasabahAkadOneMonthLastData"
                expandableRows
                pagination
              />
              <hr />
              <h4 className="mt-5">2 Bulan Terakhir :</h4>
              <ReactDataTable
                columns={state.columns}
                keyColumns={state.columns.map((item) => item.field)}
                nameTable="nasabahAkadtwoMonthLastData"
                expandableRows
                pagination
              />
              <hr />
              <h4 className="mt-5">3 Bulan Terakhir :</h4>
              <ReactDataTable
                columns={state.columns}
                keyColumns={state.columns.map((item) => item.field)}
                nameTable="nasabahAkadthreeMonthLastData"
                expandableRows
                pagination
              />
            </TabPane>
            <TabPane tabId="2">
              <ReactDataTable
                columns={state.columns}
                keyColumns={state.columns.map((item) => item.field)}
                nameTable="nasabahAkaddailyMonthLastData"
                expandableRows
                pagination
              />
            </TabPane>
            <TabPane tabId="3">
              <ReactDataTable
                columns={state.columns}
                keyColumns={state.columns.map((item) => item.field)}
                nameTable="nasabahAkadsevenDayMonthLastData"
                expandableRows
                pagination
              />
            </TabPane>
            <TabPane tabId="4">
              <ReactDataTable
                columns={state.columns}
                keyColumns={state.columns.map((item) => item.field)}
                nameTable="nasabahAkadfifteenDayLastData"
                expandableRows
                pagination
              />
            </TabPane>
          </TabContent>
        </PreviewCard>
      </React.Fragment>
    </>
  );
};

export default NasabahAkad;
