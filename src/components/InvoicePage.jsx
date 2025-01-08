// InvoicePage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, File } from 'lucide-react';

const InvoicePage = () => {
  const { type, customerName, invoiceNumber } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    fetch('/api/b5d701a4-1bf9-44a7-a60e-d46683264f02')
      .then(response => response.json())
      .then(data => {
        const customer = data.pdf_management.customers.find(
          c => c.customer_name === customerName
        );
        const invoiceData = customer.invoices.find(
          inv => inv.invoice_number.includes(invoiceNumber)
        );
        setInvoice(invoiceData);
      });
  }, [customerName, invoiceNumber]);

  if (!invoice) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => navigate(`/${type}/customer/${customerName}`)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <h2 className="text-xl font-semibold">Invoice: {invoiceNumber}</h2>
      </div>

      <div className="flex flex-col gap-4">
        {invoice.pdfs.map((pdf, index) => (
          <div
            key={index}
            className="border rounded-lg p-3 hover:bg-gray-50"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <File className="w-5 h-5 text-gray-500" />
                <span className="font-medium">{pdf.file_name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoicePage;