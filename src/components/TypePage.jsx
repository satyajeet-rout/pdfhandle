// TypePage.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Folder, ArrowRight } from 'lucide-react';

const TypePage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('/api/b5d701a4-1bf9-44a7-a60e-d46683264f02')
      .then(response => response.json())
      .then(jsonData => setData(jsonData));
  }, []);

  if (!data) return <div>Loading...</div>;

  const colors = {
    import: 'green',
    export: 'amber'
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <h2 className="text-xl font-semibold">{type.charAt(0).toUpperCase() + type.slice(1)} Folders</h2>
      </div>
      
      <div className="flex flex-col gap-4">
        {data.pdf_management.customers.map((customer) => (
          <Link 
            key={customer.customer_name}
            to={`/${type}/customer/${customer.customer_name}`}
          >
            <div className="border rounded-lg p-3 cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Folder className={`w-5 h-5 text-${colors[type]}-500`} />
                  <span className="font-medium">{customer.customer_name}</span>
                </div>
                <ArrowRight className={`w-4 h-4 text-${colors[type]}-500`} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TypePage;