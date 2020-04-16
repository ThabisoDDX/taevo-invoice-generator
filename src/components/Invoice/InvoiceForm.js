import React, { useState, useEffect } from "react";
import useForm from "../customHooks";
import moment from "moment";
import Invoice from "./Invoice";
import AddInvoiceItem from "./AddInvoiceItem";

import "./Invoice.css";

import arroWRight from "./assets/arrow-right-icon.svg";
import trashIcon from "./assets/trash.svg";

const invoiceItems = [
  // {
  //   id: 1,
  //   description: "Logo Design",
  //   rate: 500,
  //   units: 1,
  // },
  // {
  //   id: 2,
  //   description: "Web Design",
  //   rate: "2500",
  //   units: 1,
  //   subtotal: 2500,
  // },
];

export default function InvoiceForm({ toggleSaveForm, saveForm }) {
  const [items, setItems] = useState([]);
  const [fileUpload, setFileUpload] = useState(null);

  const handleFileUpload = (event) => {
    setFileUpload({ fileUpload: URL.createObjectURL(event.target.files[0]) });
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: (items.length += 1),
        description: inputs.description,
        rate: Number(inputs.rate).toFixed(2),
        units: Number(inputs.units).toFixed(0),
      },
    ]);
    inputs.description = "";
    inputs.rate = 0;
    inputs.units = 1;
  };

  const handleRemoveItem = (id) => {
    setItems(() => {
      return items.filter((i) => i.id !== id);
    });
  };

  const submitInvoice = () => {
    toggleSaveForm();
  };

  useEffect(() => {
    setItems(invoiceItems);
  }, []);

  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      clientName: "",
      dateIssued: "",
      invoiceNo: `#${moment().format("DDMMYYYY")}${
        Math.floor(Math.random() * 1000) + 100
      }`,
      yourName: "",
      yourAddress: "",
      yourTown: "",
      yourCity: "",
      postalCode: "",
      taxNumber: "",
      accountNumber: "",
      branchCode: "",
      dateDue: null,
      description: "",
      email: "",
      phone: "",
      website: "",
      vatAmount: 0,
      discountAmount: 0,
      rate: 0,
      units: 1,
      message: "success",
    },
    submitInvoice
  );

  const totalAmountDue = items.reduce((total, item) => {
    let totalAmount = item.rate * item.units;
    return total + totalAmount;
  }, 0);

  const storedVat = sessionStorage.getItem("vat");

  let totalAmountVatInclusive = totalAmountDue + totalAmountDue * storedVat;

  const discountAmountZero = () => {
    inputs.discountAmount = 0;
  };

  return (
    <>
      {!saveForm ? (
        <form onSubmit={handleSubmit} method="POST" className="Invoice">
          <header>
            <h1>
              <span>
                <input
                  type="file"
                  name="file"
                  // defaultValue={fileUpload}
                  onChange={handleFileUpload}
                />
              </span>
              <input type="submit" name="submit" value="Save" />
            </h1>
            <div>
              <ul>
                <li>
                  <input
                    type="text"
                    name="clientName"
                    placeholder="Client Name"
                    defaultValue={inputs.clientName}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  {" "}
                  <span>Date Issued:</span>{" "}
                  <span>
                    <input
                      type="date"
                      name="dateIssued"
                      defaultValue={inputs.dateIssued}
                      onChange={handleInputChange}
                    />
                  </span>
                </li>

                <li>
                  {" "}
                  <span>Invoice Number:</span> <span>{inputs.invoiceNo}</span>
                </li>
              </ul>
              <ul>
                <li>
                  <input
                    type="text"
                    name="yourName"
                    placeholder="Your Name"
                    defaultValue={inputs.yourName}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  {" "}
                  <input
                    type="text"
                    name="yourAddress"
                    placeholder="Your Address"
                    defaultValue={inputs.yourAddress}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="yourTown"
                    placeholder="Your Town"
                    defaultValue={inputs.yourTown}
                    onChange={handleInputChange}
                  />

                  <input
                    type="text"
                    name="yourCity"
                    placeholder="Your City"
                    defaultValue={inputs.yourCity}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    defaultValue={inputs.postalCode}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="taxNumber"
                    placeholder="VAT Reg. no"
                    defaultValue={inputs.taxNumber}
                    onChange={handleInputChange}
                  />
                </li>
              </ul>
            </div>
          </header>
          <div className="details">
            <ul>
              <li>Description</li>
              <li>Price</li>
              <li>Units/Hours</li>
              <li>Subtotal</li>
            </ul>

            {items.map((item, i) => {
              return (
                item.description !== "" &&
                item.rate !== 0 &&
                item.units !== 0 && (
                  <ul key={i}>
                    <li>
                      <img
                        src={trashIcon}
                        alt="delete"
                        onClick={() => handleRemoveItem(item.id)}
                      />
                      {item.description}
                    </li>
                    <li>
                      <span>R</span> {item.rate}
                    </li>
                    <li>{item.units}</li>
                    <li>
                      {" "}
                      <span>R</span> {(item.rate * item.units).toFixed(2)}
                    </li>
                  </ul>
                )
              );
            })}
            <AddInvoiceItem
              addItem={handleAddItem}
              description={inputs.description}
              rate={inputs.rate}
              units={inputs.units}
              vatAmount={inputs.vatAmount}
              discountAmountZero={discountAmountZero}
              discountAmount={inputs.discountAmount}
              totalAmountDue={totalAmountDue}
              handleInputChange={handleInputChange}
            />
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
                    <input
                      type="text"
                      name="accountNumber"
                      placeholder="Account Number"
                      defaultValue={inputs.accountNumber}
                      onChange={handleInputChange}
                    />
                  </span>
                  <span>
                    Branch Code:{" "}
                    <input
                      type="text"
                      name="branchCode"
                      placeholder="Branch Code"
                      defaultValue={inputs.branchCode}
                      onChange={handleInputChange}
                    />
                  </span>
                </li>
                <li>
                  <input
                    type="date"
                    name="dateDue"
                    defaultValue={inputs.dateDue}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  R{" "}
                  {(totalAmountVatInclusive - inputs.discountAmount).toFixed(2)}
                </li>
              </ul>
            </div>

            <div className="contacts">
              <h2>Thank you!</h2>
              <ul>
                <li>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    defaultValue={inputs.email}
                    onChange={handleInputChange}
                  />{" "}
                  <img src={arroWRight} alt="icon" />
                </li>
                <li>
                  <input
                    type="text"
                    name="phone"
                    placeholder="phone"
                    defaultValue={inputs.phone}
                    onChange={handleInputChange}
                  />{" "}
                  <img src={arroWRight} alt="icon" />
                </li>
                <li>
                  <input
                    type="text"
                    name="website"
                    placeholder="website"
                    defaultValue={inputs.website}
                    onChange={handleInputChange}
                  />{" "}
                </li>
              </ul>
            </div>
          </footer>
        </form>
      ) : (
        <Invoice
          clientName={inputs.clientName}
          dateIssued={inputs.dateIssued}
          invoiceNo={inputs.invoiceNo}
          yourName={inputs.yourName}
          yourAddress={inputs.yourAddress}
          yourTown={inputs.yourTown}
          yourCity={inputs.yourCity}
          taxNumber={inputs.taxNumber}
          accountNumber={inputs.accountNumber}
          branchCode={inputs.branchCode}
          dateDue={inputs.dateDue}
          email={inputs.email}
          phone={inputs.phone}
          website={inputs.website}
          postalCode={inputs.postalCode}
          avatar={fileUpload && fileUpload.fileUpload}
          discountAmount={inputs.discountAmount}
          items={items}
          totalAmountVatInclusive={totalAmountVatInclusive}
          totalAmountDue={totalAmountDue}
          toggleSaveForm={toggleSaveForm}
        />
      )}
    </>
  );
}
