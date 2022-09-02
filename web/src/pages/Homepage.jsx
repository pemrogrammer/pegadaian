import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import { DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from "reactstrap";
import { BlockDes, BlockHead, BlockHeadContent, BlockTitle, Icon, Button, BlockBetween } from "../components/Component";

const Homepage = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Dashboard"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Dashboard
              </BlockTitle>
              <BlockDes className="text-soft">{/* <p>data - data grafik pencapaian </p> */}</BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v" />
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li className="nk-block-tools-opt">
                      <Button color="primary">
                        <Icon name="reports" />
                        <span>Reports</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
      </Content>
    </React.Fragment>
  );
};
export default Homepage;
