import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import InvoiceForm from "./components/Invoice/InvoiceForm";
import moment from "moment";

import "./App.css";

function App() {
  const [saveForm, setSaveForm] = useState(false);

  const invoiceName = `INVOICE${moment().format("DDMMYYYY")}${
    Math.floor(Math.random() * 100) + 10
  }`;

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input, {
      allowTaint: true,
      taintTest: false,
      useCORS: true,
      scale: 1,
    }).then((canvas) => {
      sessionStorage.clear();
      // window.location.assign(
      //   "https://thabisoddx.github.io/taevo-invoice-generator"
      // );
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save(`${invoiceName}.pdf`);
    });
  };

  const toggleSaveForm = () => {
    setSaveForm(!saveForm);
  };

  return (
    <div className="App">
      <div className="mb5 btn">
        {saveForm && (
          <>
            <button onClick={toggleSaveForm}>Edit</button>
            <button onClick={printDocument}>Print</button>
          </>
        )}
      </div>
      <div
        id="divToPrint"
        style={{
          position: "relative",
          width: "210mm",
          minHeight: "297mm",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#f2f6f3",
          // border: "2px solid black",
        }}
      >
        <InvoiceForm toggleSaveForm={toggleSaveForm} saveForm={saveForm} />
      </div>
    </div>
  );
}

export default App;
