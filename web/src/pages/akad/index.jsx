import React, { useEffect, useState } from "react";

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Block, BlockHead, BlockHeadContent } from "../../components/block/Block";

import classnames from "classnames";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import { PreviewCard } from "../../components/Component";
import { insertData } from "../../store/datatable";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomerContract, fetchContractDueDate, fetchKeelAuction, onInsertAllData } from "../../store/akad";
import TableNasabahAkad from "./partials/table-nasabah-akad";
import TablePelunasanLelang from "./partials/table-pelunasan-lelang";
import TableAkadJatuhTempo from "./partials/table-akad-jatuh-tempo";

const Akad = () => {
  const [activeAltTab, setActiveAltTab] = useState("1");
  const stateAkad = useSelector((state) => state.akad);
  const dispatch = useDispatch();

  const toggleAltTab = (alttab) => {
    if (activeAltTab !== alttab) setActiveAltTab(alttab);
  };

  useEffect(async () => {
    await fetchAllCustomerContract().then((responses) => {
      dispatch(onInsertAllData({ allData: responses.data }));

      dispatch(insertData({ data: responses.data, nameTable: "nasabahAkadAllData" }));
    });

    await fetchContractDueDate().then((responses) => {
      dispatch(insertData({ data: responses.data, nameTable: "akadJatuhTempo" }));
    });

    await fetchKeelAuction().then((responses) => {
      dispatch(insertData({ data: responses.data, nameTable: "pelunasanLelang" }));
    });
  }, []);

  useEffect(() => {
    // console.info(stateAkad);
  }, [stateAkad]);

  return (
    <>
      <React.Fragment>
        <Head title="Data Akad" />
        <Content>
          <Block size="lg">
            <BlockHead>
              <BlockHeadContent>
                <PreviewCard>
                  <Nav tabs className="nav-tabs-s2">
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
                        Nasabah Akad
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
                        Akad Jatuh Tempo
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
                        Pelunasan & Lelang
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeAltTab}>
                    <TabPane tabId="1">
                      <TableNasabahAkad />
                    </TabPane>
                    <TabPane tabId="2">
                      <TableAkadJatuhTempo />
                    </TabPane>
                    <TabPane tabId="3">
                      <TablePelunasanLelang />
                    </TabPane>
                  </TabContent>
                </PreviewCard>
              </BlockHeadContent>
            </BlockHead>
          </Block>
        </Content>
      </React.Fragment>
    </>
  );
};
export default Akad;
