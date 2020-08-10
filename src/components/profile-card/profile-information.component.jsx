import React from "react";
import "./profile-information.styles.scss";
import { Table } from "react-bootstrap";
import { ReactComponent as NameIcon } from "../../assets/name.svg";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";
import { ReactComponent as AddressIcon } from "../../assets/address.svg";
//components

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <div className="row">
        <NameIcon />
        <span className="detail" style={{ fontSize: "16px" }}>
          Rawanul Momen
        </span>
      </div>
      <div className="row">
        <EmailIcon />
        <span className="detail">rusaf93@gmail.com</span>
      </div>
      <div className="row">
        <PhoneIcon />
        <span className="detail">+1-(647)-9276871</span>
      </div>
      <div className="row">
        <AddressIcon />
        <span className="detail" style={{ fontSize: "12px" }}>
          North York, Ontario
        </span>
      </div>
    </div>
  );
};

export default ProfileInfo;
