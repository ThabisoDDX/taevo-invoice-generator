import React, { useState } from "react";

export default function AddInvoiceItem({
  description,
  rate,
  units,
  handleInputChange,
  addItem,
  discountAmount,
  vatAmount,
  totalAmountDue,
  discountAmountZero,
}) {
  const [toggleVatPercentage, setVatPercentage] = useState(false);
  const [toggleDiscount, setToggleDiscount] = useState(false);

  if (totalAmountDue <= 0) {
    sessionStorage.removeItem("vat");
  }

  const onToggleVatPercentage = (event) => {
    setVatPercentage(!toggleVatPercentage);
    addItem(event);
    vatAmount = 15 / 100;
    sessionStorage.setItem("vat", vatAmount);
  };

  const storedVat = sessionStorage.getItem("vat");

  const removeVatAmount = (event) => {
    setVatPercentage(false);
    sessionStorage.removeItem("vat");
    addItem(event);
  };

  const removeDiscountAmount = (event) => {
    setToggleDiscount(false);
    // discountAmount = 0;
    discountAmountZero();
    addItem(event);
  };

  const styleRemove = {
    color: "#fff",
    backgroundColor: "#f16162",
    border: "none",
  };

  return (
    <>
      <ul>
        <li>
          <input
            type="text"
            name="description"
            placeholder="Item description"
            value={description}
            onChange={handleInputChange}
          />
        </li>
        <li>
          {" "}
          {/* <span>R</span>{" "} */}
          <input
            type="text"
            name="rate"
            placeholder="Price"
            value={rate}
            onChange={handleInputChange}
          />
        </li>
        <li>
          {" "}
          <input
            type="text"
            name="units"
            placeholder="Units"
            value={units}
            onChange={handleInputChange}
          />
        </li>
        <li>{rate * units}</li>
      </ul>
      {(toggleDiscount || discountAmount >= 1) && (
        <ul className="vat">
          <li></li>
          <li></li>
          <li>DISCOUNT</li>
          <li>
            <span>R</span>
            <input
              type="text"
              name="discountAmount"
              placeholder="Discount Amount"
              defaultValue={discountAmount}
              onChange={toggleDiscount && handleInputChange}
            />
          </li>
        </ul>
      )}
      {storedVat > 0 && (
        <ul className="vat">
          <li></li>
          <li></li>
          <li> VAT @ 15%</li>
          <li>
            <span>R</span>
            <span>{(totalAmountDue * storedVat).toFixed(2)}</span>
          </li>
        </ul>
      )}
      <div className="btns">
        <button onClick={addItem}>
          <span>+</span>
        </button>

        {!toggleDiscount && discountAmount <= 0 && (
          <button onClick={() => setToggleDiscount(!false)}>
            <span>ADD DISCOUNT</span>
          </button>
        )}
        {(toggleDiscount || discountAmount >= 1) && (
          <button style={styleRemove} onClick={removeDiscountAmount}>
            <span>REMOVE DISCOUNT</span>
          </button>
        )}
        {!toggleVatPercentage && storedVat <= 0 && (
          <button onClick={onToggleVatPercentage}>
            <span>INCLUDE VAT</span>
          </button>
        )}
        {storedVat > 0 && (
          <button style={styleRemove} onClick={removeVatAmount}>
            <span>REMOVE VAT</span>
          </button>
        )}
      </div>
    </>
  );
}
