import React, { useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

import { Block, BlockHead, BlockHeadContent, BlockTitle, PreviewCard } from "../../components/Component";

import { Steps, Step } from "react-step-builder";
import FormDataGadai from "./partials/form-barang-gadai";
import FormNasabah from "./partials/form-nasabah";

const Header = (props) => {
  return (
    <div className="steps clearfix">
      <ul>
        <li className={props.current >= 1 ? "first done" : "first"}>
          <a href="#wizard-01-h-0" onClick={(ev) => ev.preventDefault()}>
            <span className="number">01</span> <h5>Barang Gadai</h5>
          </a>
        </li>
        <li className={props.current >= 2 ? "done" : ""}>
          <a href="#wizard-01-h-1" onClick={(ev) => ev.preventDefault()}>
            <span className="number">02</span> <h5>Data Nasabah</h5>
          </a>
        </li>
        <li className={props.current >= 3 ? "done" : ""}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="current-info audible">current step: </span>
            <span className="number">03</span> <h5>Konfirmasi Data</h5>
          </a>
        </li>
      </ul>
    </div>
  );
};

const AkadForm = () => {
  const config = {
    before: Header,
  };

  return (
    <React.Fragment>
      <Head title="Wizard Form" />
      <Content>
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Akad - Baru</BlockTitle>
              {/* <p>A basic demonstration of wizard form basic.</p> */}
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="nk-wizard nk-wizard-simple is-alter wizard clearfix">
              <Steps config={config}>
                <Step component={FormDataGadai} />
                <Step component={FormNasabah} />
                {/* <Step component={UserSettings} />
                <Step component={PaymentInfo} />
                <Step component={Success} /> */}
              </Steps>
            </div>
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default AkadForm;
