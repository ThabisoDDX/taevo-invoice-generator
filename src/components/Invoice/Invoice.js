import React from "react";
import moment from "moment";

import "./Invoice.css";

import arroWRight from "./assets/arrow-right-icon.svg";

export default function Invoice({
  clientName,
  dateIssued,
  invoiceNo,
  yourName,
  yourAddress,
  yourTown,
  yourCity,
  postalCode,
  taxNumber,
  accountNumber,
  branchCode,
  dateDue,
  email,
  phone,
  website,
  discountAmount,
  items,
  avatar,
  totalAmountVatInclusive,
  totalAmountDue,
}) {
  const storedVat = sessionStorage.getItem("vat");
  return (
    <div className="Invoice">
      <header>
        <h1>
          <span>
            <img
              src={avatar}
              alt=""
              syle={{ color: "blue", backgroundColor: "blue" }}
            />
          </span>
          <span>Tax Invoice</span>
        </h1>

        <div>
          <ul>
            <li>{clientName}</li>
            <li>
              {" "}
              <span>Date Issued:</span>{" "}
              <span style={{ color: "#323742" }}>
                {" "}
                {moment(dateIssued).format("DD MMM YYYY")}
              </span>
            </li>

            <li>
              {" "}
              <span>Invoice No:</span>{" "}
              <span style={{ color: "#323742" }}>{invoiceNo}</span>
            </li>
            {taxNumber !== "" && (
              <li>
                {" "}
                <span>Tax Reg. No:</span>{" "}
                <span style={{ color: "#323742" }}>{taxNumber}</span>
              </li>
            )}
          </ul>
          <ul>
            <li>{yourName}</li>
            <li>{yourAddress}</li>
            <li>
              {yourTown}, {yourCity}
            </li>
            <li>{postalCode}</li>
          </ul>
        </div>
      </header>
      <div className="details">
        <ul>
          <li>Description</li>
          <li>Rate</li>
          <li>Units/Hours</li>
          <li>Subtotal</li>
        </ul>
        {items.map((item, i) => {
          return (
            item.description !== "" &&
            item.rate !== 0 &&
            item.units !== 0 && (
              <ul key={i}>
                <li>{item.description}</li>
                <li>
                  <span>R</span> {item.rate}
                </li>
                <li>{item.units}</li>
                <li>
                  {" "}
                  <span>R</span> {item.rate * item.units}
                </li>
              </ul>
            )
          );
        })}
        {discountAmount >= 1 && (
          <ul className="vat">
            <li></li>
            <li></li>
            <li>DISCOUNT</li>
            <li>{discountAmount}</li>
          </ul>
        )}
        {storedVat > 0 && (
          <ul className="vat">
            <li></li>
            <li></li>
            <li> VAT @ 15%</li>
            <li>{(totalAmountDue * storedVat).toFixed(2)}</li>
          </ul>
        )}
      </div>
      <footer>
        <div className="total">
          <ul>
            <li>Bank Info</li>
            <li>DUE BY</li>
            <li>TOTAL DUE</li>
          </ul>
          <ul>
            <li>
              <span>
                Account No:{" "}
                <strong style={{ color: "#323742" }}>{accountNumber}</strong>
              </span>
              <span>
                Branch Code:{" "}
                <strong style={{ color: "#323742" }}>{branchCode}</strong>
              </span>
            </li>
            <li>{dateDue}</li>
            <li>R{(totalAmountVatInclusive - discountAmount).toFixed(2)}</li>
          </ul>
        </div>

        <div className="contacts">
          <h2>Thank you!</h2>
          <ul>
            {email !== "" && <li>{email}</li>}
            {phone !== "" && (
              <li>
                <img src={arroWRight} alt="icon" />
                {phone}
              </li>
            )}
            {website !== "" && (
              <li>
                <img src={arroWRight} alt="icon" />
                {website}
              </li>
            )}
          </ul>
        </div>
      </footer>
    </div>
  );
}
