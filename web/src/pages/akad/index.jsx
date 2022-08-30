import React, { useEffect, useState } from "react";

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Block, BlockHead, BlockHeadContent } from "../../components/block/Block";

import classnames from "classnames";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import NasabahAkad from "./partials/nasabah-akad";
import { PreviewCard } from "../../components/Component";
import { getCoba } from "../../store/datatable";
import { useDispatch, useSelector } from "react-redux";

const Akad = () => {
  const [activeAltTab, setActiveAltTab] = useState("1");
  const dispatch = useDispatch();
  const coba = useSelector(getCoba);

  const toggleAltTab = (alttab) => {
    if (activeAltTab !== alttab) setActiveAltTab(alttab);
  };

  useEffect(() => {
    console.info(coba);
  }, []);

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
                      <NasabahAkad />
                    </TabPane>
                    <TabPane tabId="2">
                      <p>
                        Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit
                        aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis
                        laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et
                        elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui
                        esse anim eiusmod do sint minim consectetur qui.
                      </p>
                    </TabPane>
                    <TabPane tabId="3">
                      <p>
                        Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad
                        proident laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud
                        magna nulla. Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip
                        labore est magna commodo est ea veniam consectetur.
                      </p>
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
