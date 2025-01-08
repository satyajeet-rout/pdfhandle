import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';

import Layout from './Pages/Layout';
// import PDFUploaderPage from './Pages/Pdfupload';

// import Myworkflow from './Pages/Myworkflow';
import PDFProcessor from './Pages/PdfProcessor';
// import PDFManagement from './Pages/ViewPdf';
// import Myworkflow from './Pages/MyWorkflow';
import PDFWorkflow from './Pages/PdfWorkflow';
import PDFViewer from './Pages/PdfViewer';

// import ImportView from './components/ImportView';
// import ExportView from './components/ExportView';
// import CompanyView from './components/CompanyView';
import TypePage from './components/TypePage';
import CustomerPage from './components/CustomerPage';
import InvoicePage from './components/InvoicePage';
import RootPage from './components/RootPage';
// import UploadPdf from './Pages/Pdf';






const App = () => {
  // Define the Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          {/* <Route
            path="/"
            element={
              // <Myworkflow/>
              // <PDFProcessor />
              // <UploadPdf/>
              // <PDFManagement/>
              <PDFWorkflow/>
             
            }
          /> */}

          <Route
            path="/new-workflow"
            element={
              
              // <PDFUploaderPage />
              <PDFProcessor />
             
            }
          />

          
          <Route path="/" element={<RootPage />} />
          <Route path="/:type" element={<TypePage />} />
          <Route path="/:type/customer/:customerName" element={<CustomerPage />} />
          <Route path="/:type/customer/:customerName/invoice/:invoiceNumber" element={<InvoicePage />} />
          <Route path="/pdf-viewer" component={PDFViewer} />

          {/* <Route path="/" element={<FolderStructure />} /> */}
          {/* <Route path="/import" element={<ImportView />} /> */}
          {/* <Route path="/export" element={<ExportView />} /> */}
          {/* <Route path="/:folderType/:company" element={<CompanyView />} /> */}
         
          
        </Route>
        
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

// Render the App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
