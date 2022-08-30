import React, { useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

import { BlockHead, BlockHeadContent, BlockTitle, BlockBetween } from "../../components/Component";

const AkadForm = () => {
  return (
    <React.Fragment>
      <Head title="Form Akad"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Form Akad
              </BlockTitle>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
      </Content>
    </React.Fragment>
  );
};
export default AkadForm;
