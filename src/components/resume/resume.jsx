import React from 'react'
import resume from '../../assets/resume.pdf'
import { Document, Page } from 'react-pdf/dist/entry.webpack';
// import {PDFDownloadLink, Document, Page, pdfjs} from '@react-pdf/renderer/';

import './resume.scss'


const Resume = () => {

    return (
        <div style={{height:'auto'}}>
            <div className='resume'>
                <Document file={resume}>
                    <Page pageNumber={1}/>
                </Document>
               
            </div>
        </div>
       
    )
}

export default Resume;
