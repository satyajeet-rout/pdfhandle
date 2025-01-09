// import React from 'react';

// import { useState, useEffect } from 'react';
// import { ChevronLeft, Folder, File, ArrowRight } from 'lucide-react';

// // Root Component showing Import/Export folders
// const RootPage = ({ onNavigate }) => {
//   return (
//     <div className="p-4 bg-white rounded-lg shadow">
//       <h2 className="text-xl font-semibold mb-6">PDF Management System</h2>
//       <div className="flex flex-col gap-4">
//         {/* Import Folder Card */}
//         <div 
//           className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
//           onClick={() => onNavigate('import')}
//         >
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <Folder className="w-6 h-6 text-green-500" />
//               <h3 className="text-lg font-medium">Import</h3>
//             </div>
//             <ArrowRight className="w-4 h-4 text-green-500" />
//           </div>
//         </div>

//         {/* Export Folder Card */}
//         <div 
//           className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
//           onClick={() => onNavigate('export')}
//         >
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <Folder className="w-6 h-6 text-amber-500" />
//               <h3 className="text-lg font-medium">Export</h3>
//             </div>
//             <ArrowRight className="w-4 h-4 text-amber-500" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Import/Export Page showing customer list
// const TypePage = ({ type, customers, onNavigate, onBack }) => {
//   const colors = {
//     import: 'green',
//     export: 'amber'
//   };
  
//   return (
//     <div className="p-4 bg-white rounded-lg shadow">
//       <div className="flex items-center gap-4 mb-6">
//         <button 
//           onClick={onBack}
//           className="flex items-center text-gray-600 hover:text-gray-900"
//         >
//           <ChevronLeft className="w-5 h-5" />
//           Back
//         </button>
//         <h2 className="text-xl font-semibold">{type.charAt(0).toUpperCase() + type.slice(1)} Folders</h2>
//       </div>
      
//       <div className="flex flex-col gap-4">
//         {customers.map((customer) => (
//           <div
//             key={customer.customer_name}
//             className="border rounded-lg p-3 cursor-pointer hover:shadow-md transition-shadow"
//             onClick={() => onNavigate(customer.customer_name)}
//           >
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <Folder className={`w-5 h-5 text-${colors[type]}-500`} />
//                 <span className="font-medium">{customer.customer_name}</span>
//               </div>
//               <ArrowRight className={`w-4 h-4 text-${colors[type]}-500`} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Customer Page showing invoices
// const CustomerPage = ({ customer, type, onNavigate, onBack }) => {
//   return (
//     <div className="p-4 bg-white rounded-lg shadow">
//       <div className="flex items-center gap-4 mb-6">
//         <button 
//           onClick={onBack}
//           className="flex items-center text-gray-600 hover:text-gray-900"
//         >
//           <ChevronLeft className="w-5 h-5" />
//           Back
//         </button>
//         <h2 className="text-xl font-semibold">{customer.customer_name}</h2>
//       </div>

//       <div className="flex flex-col gap-4">
//         {customer.invoices.map((invoice) => {
//           const invoiceNumbers = invoice.invoice_number.split(',');
//           return invoiceNumbers.map((invNum, idx) => (
//             <div
//               key={`${invNum}-${idx}`}
//               className="border rounded-lg p-3 cursor-pointer hover:shadow-md transition-shadow"
//               onClick={() => onNavigate(invNum)}
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <Folder className="w-5 h-5 text-blue-500" />
//                   <span className="font-medium">{invNum}</span>
//                 </div>
//                 <ArrowRight className="w-4 h-4 text-blue-500" />
//               </div>
//             </div>
//           ));
//         })}
//       </div>
//     </div>
//   );
// };

// // Invoice Page showing PDF files
// const InvoicePage = ({ invoice, onBack }) => {
//   return (
//     <div className="p-4 bg-white rounded-lg shadow">
//       <div className="flex items-center gap-4 mb-6">
//         <button 
//           onClick={onBack}
//           className="flex items-center text-gray-600 hover:text-gray-900"
//         >
//           <ChevronLeft className="w-5 h-5" />
//           Back
//         </button>
//         <h2 className="text-xl font-semibold">Invoice: {invoice.invoice_number}</h2>
//       </div>

//       <div className="flex flex-col gap-4">
//         {invoice.pdfs.map((pdf, index) => (
//           <div
//             key={index}
//             className="border rounded-lg p-3 hover:bg-gray-50"
//           >
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <File className="w-5 h-5 text-gray-500" />
//                 <span className="font-medium">{pdf.file_name}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Main App Component
// const FolderStructureApp = () => {
//   const [data, setData] = useState(null);
//   // const [data] = useState({
//   //   "pdf_management": {
//   //     "customers": [
//   //       {
//   //         "customer_name": "Customer_A",
//   //         "customer_folder": "Customer_A",
//   //         "invoices": [
//   //           {
//   //             "invoice_number": "INV12345",
//   //             "invoice_folder": "INV12345",
//   //             "pdfs": [
//   //               {
//   //                 "file_name": "invoice_page_1.pdf",
//   //                 "category": "Invoice",
//   //                 "details": {
//   //                   "company_name": "Company_X",
//   //                   "invoice_number": "INV12345"
//   //                 }
//   //               },
//   //               {
//   //                 "file_name": "invoice_pages_2-5.pdf",
//   //                 "category": "Invoice",
//   //                 "details": {
//   //                   "company_name": "Company_X",
//   //                   "invoice_number": "INV12345",
//   //                   "page_range": "2-5"
//   //                 }
//   //               }
//   //             ]
//   //           },
//   //           {
//   //             "invoice_number": "INV67890,INV67891",
//   //             "invoice_folder": "INV67890,INV67891",
//   //             "pdfs": [
//   //               {
//   //                 "file_name": "shipment_invoice_page_1.pdf",
//   //                 "category": "Shipment",
//   //                 "details": {
//   //                   "company_name": "Company_Y",
//   //                   "page_range": "1"
//   //                 }
//   //               },
//   //               {
//   //                 "file_name": "shipment_invoice_pages_2-4.pdf",
//   //                 "category": "Shipment",
//   //                 "details": {
//   //                   "company_name": "Company_Y",
//   //                   "page_range": "2-4"
//   //                 }
//   //               }
//   //             ]
//   //           }
//   //         ]
//   //       }
//   //     ]
//   //   }
//   // });

//   const [navigationStack, setNavigationStack] = useState([{ level: 'root' }]);

//   useEffect(() => {
//   fetch('https://mocki.io/v1/b5d701a4-1bf9-44a7-a60e-d46683264f02')
//     .then(response => response.json())
//     .then(data => setData(data));
//   }, []);
  
//   const getCurrentView = () => navigationStack[navigationStack.length - 1];

//   const navigate = (to) => {
//     const currentView = getCurrentView();
//     let newStackItem;

//     switch (currentView.level) {
//       case 'root':
//         newStackItem = { level: 'type', type: to };
//         break;
//       case 'type':
//         newStackItem = { level: 'customer', type: currentView.type, customerName: to };
//         break;
//       case 'customer':
//         newStackItem = { level: 'invoice', type: currentView.type, customerName: currentView.customerName, invoiceNumber: to };
//         break;
//       default:
//         return;
//     }

//     setNavigationStack([...navigationStack, newStackItem]);
//   };

//   const navigateBack = () => {
//     setNavigationStack(prev => prev.slice(0, -1));
//   };

//   const getCurrentComponent = () => {
//     const currentView = getCurrentView();

//     switch (currentView.level) {
//       case 'root':
//         return <RootPage onNavigate={navigate} />;
      
//       case 'type':
//         return (
//           <TypePage
//             type={currentView.type}
//             customers={data.pdf_management.customers}
//             onNavigate={navigate}
//             onBack={navigateBack}
//           />
//         );
      
//       case 'customer':
//         const customer = data.pdf_management.customers.find(
//           c => c.customer_name === currentView.customerName
//         );
//         return (
//           <CustomerPage
//             customer={customer}
//             type={currentView.type}
//             onNavigate={navigate}
//             onBack={navigateBack}
//           />
//         );
      
//       case 'invoice':
//         const customerData = data.pdf_management.customers.find(
//           c => c.customer_name === currentView.customerName
//         );
//         const invoice = customerData.invoices.find(
//           inv => inv.invoice_number.includes(currentView.invoiceNumber)
//         );
//         return (
//           <InvoicePage
//             invoice={invoice}
//             onBack={navigateBack}
//           />
//         );
      
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       {getCurrentComponent()}
//     </div>
//   );
// };

// export default FolderStructureApp;



import React from 'react';
import { useState, useEffect } from 'react';
import { ChevronLeft, Folder, File, ArrowRight, Eye, Trash2 } from 'lucide-react';

// Previous components remain the same until InvoicePage
const RootPage = ({ onNavigate }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Document Management System</h2>
      <div className="flex flex-col gap-4">
        <div 
          className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onNavigate('import')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Folder className="w-6 h-6 text-green-500" />
              <h3 className="text-lg font-medium">Import</h3>
            </div>
            <ArrowRight className="w-4 h-4 text-green-500" />
          </div>
        </div>

        <div 
          className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onNavigate('export')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Folder className="w-6 h-6 text-amber-500" />
              <h3 className="text-lg font-medium">Export</h3>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

const TypePage = ({ type, customers, onNavigate, onBack }) => {
  const colors = {
    import: 'green',
    export: 'amber'
  };
  
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <h2 className="text-xl font-semibold">{type.charAt(0).toUpperCase() + type.slice(1)} Folders</h2>
      </div>
      
      <div className="flex flex-col gap-4">
        {customers.map((customer) => (
          <div
            key={customer.customer_name}
            className="border rounded-lg p-3 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onNavigate(customer.customer_name)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Folder className={`w-5 h-5 text-${colors[type]}-500`} />
                <span className="font-medium">{customer.customer_name}</span>
              </div>
              <ArrowRight className={`w-4 h-4 text-${colors[type]}-500`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CustomerPage = ({ customer, type, onNavigate, onBack }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={onBack}
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
            <div
              key={`${invNum}-${idx}`}
              className="border rounded-lg p-3 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onNavigate(invNum)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Folder className="w-5 h-5 text-blue-500" />
                  <span className="font-medium">{invNum}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-500" />
              </div>
            </div>
          ));
        })}
      </div>
    </div>
  );
};

// Updated InvoicePage component with categories and actions
const InvoicePage = ({ invoice, onBack }) => {
  const handleView = (pdf) => {
    // Implement PDF viewing logic here
    console.log('Viewing PDF:', pdf.file_name);
  };

  const handleDelete = (pdf) => {
    // Implement PDF deletion logic here
    console.log('Deleting PDF:', pdf.file_name);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <h2 className="text-xl font-semibold">Invoice: {invoice.invoice_number}</h2>
      </div>

      <div className="flex flex-col gap-4">
        {invoice.pdfs.map((pdf, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:bg-gray-50"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <File className="w-5 h-5 text-gray-500" />
                <div className="flex flex-col">
                  <span className="font-medium">{pdf.file_name}</span>
                  <span className="text-sm text-gray-500">Category: {pdf.category}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleView(pdf)}
                  className="flex items-center gap-2 px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button
                  onClick={() => handleDelete(pdf)}
                  className="flex items-center gap-2 px-3 py-1 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FolderStructureApp = () => {
  const [data, setData] = useState(null);
  const [navigationStack, setNavigationStack] = useState([{ level: 'root' }]);

  useEffect(() => {
    fetch('https://mocki.io/v1/cb0226d4-bcb8-4053-b27e-e8d6c9a5e5c4')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  
  const getCurrentView = () => navigationStack[navigationStack.length - 1];

  const navigate = (to) => {
    const currentView = getCurrentView();
    let newStackItem;

    switch (currentView.level) {
      case 'root':
        newStackItem = { level: 'type', type: to };
        break;
      case 'type':
        newStackItem = { level: 'customer', type: currentView.type, customerName: to };
        break;
      case 'customer':
        newStackItem = { level: 'invoice', type: currentView.type, customerName: currentView.customerName, invoiceNumber: to };
        break;
      default:
        return;
    }

    setNavigationStack([...navigationStack, newStackItem]);
  };

  const navigateBack = () => {
    setNavigationStack(prev => prev.slice(0, -1));
  };

  const getCurrentComponent = () => {
    if (!data) return null;
    
    const currentView = getCurrentView();

    switch (currentView.level) {
      case 'root':
        return <RootPage onNavigate={navigate} />;
      
      case 'type':
        return (
          <TypePage
            type={currentView.type}
            customers={data.pdf_management.customers}
            onNavigate={navigate}
            onBack={navigateBack}
          />
        );
      
      case 'customer':
        const customer = data.pdf_management.customers.find(
          c => c.customer_name === currentView.customerName
        );
        return (
          <CustomerPage
            customer={customer}
            type={currentView.type}
            onNavigate={navigate}
            onBack={navigateBack}
          />
        );
      
      case 'invoice':
        const customerData = data.pdf_management.customers.find(
          c => c.customer_name === currentView.customerName
        );
        const invoice = customerData.invoices.find(
          inv => inv.invoice_number.includes(currentView.invoiceNumber)
        );
        return (
          <InvoicePage
            invoice={invoice}
            onBack={navigateBack}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {getCurrentComponent()}
    </div>
  );
};

export default FolderStructureApp;