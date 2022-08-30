import React, { useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

import { BlockHead, BlockHeadContent, BlockTitle, BlockBetween, PreviewCard } from "../../components/Component";
import Modal from "./Modal";

const Branch = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
      <Head title="Form Akad"></Head>
      <Modal modal={modal} toggle={toggle} />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Form Akad
              </BlockTitle>
              <PreviewCard>
                <Button color="primary" onClick={toggle}>
                  Modal Default
                </Button>
              </PreviewCard>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
      </Content>
    </React.Fragment>
  );
};
export default Branch;
