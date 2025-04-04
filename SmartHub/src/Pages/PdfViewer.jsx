import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { fetchBookPercentage, fetchPDF, sendScrollProgress } from "../Service/PdfService"; // Import API functions
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../Components/PdfViewer/PdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js`;

const PdfViewer = () => {
    const query = new URLSearchParams(useLocation().search);
    const bookId = query.get("id");
    const navigate = useNavigate();
    const [pdfFile, setPdfFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [scale, setScale] = useState(1.0);
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const pdfContainerRef = useRef(null);

    useEffect(() => {
        const loadPDF = async () => {
            const file = await fetchPDF(bookId);
            if (file) setPdfFile(file);
    
            // 🟢 Fetch saved reading percentage from backend
            const savedPercentage = await fetchBookPercentage(bookId);
            
            if (savedPercentage !== null) {
                setTimeout(() => { // Wait for rendering
                    if (pdfContainerRef.current) {
                        pdfContainerRef.current.scrollTop =
                            (parseFloat(savedPercentage) / 100) * pdfContainerRef.current.scrollHeight;
                    }
                }, 500); // Delay to allow full rendering
            }
        };
    
        loadPDF();
    }, [bookId]);
    
    

    const handleScroll = () => {
        if (pdfContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = pdfContainerRef.current;
            const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollPercentage(percentage.toFixed(2));
            localStorage.setItem(`pdf-scroll-${bookId}`, percentage.toFixed(2));
        }
    };

    const handleBack = async () => {
        await sendScrollProgress(bookId, scrollPercentage);
        navigate(-1);
    };

    useEffect(() => {
        const handleBeforeUnload = async (event) => {
            event.preventDefault();
            await sendScrollProgress(bookId, scrollPercentage);
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [scrollPercentage, bookId]);

    return (
        <div className="pdf-viewer-container">
            <button className="back-button" onClick={handleBack}>⬅ Back</button>

            <div className="controls">
                <button className="control-button" onClick={() => setScale((prev) => Math.max(prev - 0.2, 0.5))}>Zoom Out</button>
                <button className="control-button" onClick={() => setScale((prev) => prev + 0.2)}>Zoom In</button>
                <button className="control-button" onClick={() => alert(`Scrolled: ${scrollPercentage}%`)}>Bookmark</button>
            </div>

            {pdfFile ? (
                <div className="pdf-scroll-container" ref={pdfContainerRef} onScroll={handleScroll}>
                    <Document file={pdfFile} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                        {[...Array(numPages).keys()].map((pageIndex) => (
                            <Page key={pageIndex} pageNumber={pageIndex + 1} scale={scale} />
                        ))}
                    </Document>
                </div>
            ) : (
                <p>Loading PDF...</p>
            )}
        </div>
    );
};

export default PdfViewer;
