import React from "react";
import Icon from "../../components/icon/Icon";

const InformationBranch = () => {
  const styles = {
    p: {
      display: "inline",
      marginLeft: 10,
    },
  };

  return (
    <div className="nk-news-list">
      <a className="nk-news-item" href="#news" onClick={(ev) => ev.preventDefault()}>
        <div className="nk-news-icon">
          <Icon name="card-view" />
        </div>
        <div style={{ color: "black" }}>
          <p style={styles.p}>Cabang: 01</p>
          <p style={styles.p}>|</p>
          <p style={styles.p}>Kas Saldo: Rp.20.000.000</p>
          <p style={styles.p}>|</p>
          <p style={styles.p}>Kas Admin: Rp. 5.000.000</p>
        </div>
      </a>
    </div>
  );
};

export default InformationBranch;
