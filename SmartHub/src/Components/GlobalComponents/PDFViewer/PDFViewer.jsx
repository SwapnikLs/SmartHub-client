import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdf from "../../../assets/DataStructures_Cheatsheet_Zero_To_Mastery_V1.01.pdf"
const PdfViewer = () => {
    const pdfUrl = pdf// Place your PDF inside the public folder

    return (
        <div style={{ height: "90vh", width: "100%" }}>
            <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js`}>
                <Viewer fileUrl={pdfUrl} />
            </Worker>
        </div>
    );
};

export default PdfViewer;
