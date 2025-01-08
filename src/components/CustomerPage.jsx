// CustomerPage.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Folder, ArrowRight } from 'lucide-react';

const CustomerPage = () => {
  const { type, customerName } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch('/api/b5d701a4-1bf9-44a7-a60e-d46683264f02')
      .then(response => response.json())
      .then(data => {
        const customerData = data.pdf_management.customers.find(
          c => c.customer_name === customerName
        );
        setCustomer(customerData);
      });
  }, [customerName]);

  if (!customer) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => navigate(`/${type}`)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <h2 className="text-xl font-semibold">{customer.customer_name}</h2>
      </div>

      <div className="flex flex-col gap-4">
        {customer.invoices.map((invoice) => {
          const invoiceNumbers = invoice.invoice_number.split(',');
          return invoiceNumbers.map((invNum, idx) => (
            <Link
              key={`${invNum}-${idx}`}
              to={`/${type}/customer/${customerName}/invoice/${invNum}`}
            >
              <div className="border rounded-lg p-3 cursor-pointer hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Folder className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">{invNum}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                </div>
              </div>
            </Link>
          ));
        })}
      </div>
    </div>
  );
};

export default CustomerPage;