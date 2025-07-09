import React from 'react';
import './GanttChart.css';

const GanttChart = () => {
  const rows = [
    { code: 'CS-SI-VSID-CPD-PPR', desc: 'Project Preparations', className: 'cp', colStart: 1, span: 4, label: 'CPD' },
    { code: 'CS-SI-VSID-EGD-EDS', desc: 'E-Diagrams', className: 'egd', colStart: 5, span: 5, label: 'EGD' },
    { code: 'CS-SI-VSID-EGD-APR', desc: 'E-Diagram Outputs', className: 'egd', colStart: 10, span: 4, label: 'EGD' },
    { code: 'CS-SI-VSID-MFD-APR', desc: 'Manufacturing Preparation', className: 'mfd', colStart: 6, span: 6, label: 'MFD' },
    { code: 'CS-SI-VSID-FAD-APR', desc: 'Field Application Preparation', className: 'fad', colStart: 11, span: 8, label: 'FAD' },
    { code: 'CS-SI-VSID-QCD-APR', desc: 'Quality Control Preparation', className: 'qcd', colStart: 13, span: 8, label: 'QCD' },
    { code: 'CS-SI-VSID-PUD-PMS', desc: 'Purchasing', className: 'pud', colStart: 6, span: 10, label: 'PUD' },
    { code: 'CS-SI-VSID-MFD-APP', desc: 'Manufacturing', className: 'mfd', colStart: 6, span: 15, label: 'MFD' },
    { code: 'CS-SI-VSID-FAD-APP', desc: 'Field Application', className: 'fad', colStart: 15, span: 8, label: 'FAD' },
    { code: 'CS-SI-VSID-QCD-APP', desc: 'Quality Control', className: 'qcd', colStart: 15, span: 8, label: 'QCD' },
    { code: 'CS-SI-VSID-CMD-COM', desc: 'Commissioning', className: 'com', colStart: 9, span: 6, label: 'COM' },
    { code: 'CS-SI-VSID-CMD-DLV', desc: 'Delivery', className: 'com', colStart: 1, span: 22, label: 'COM' },
  ];

  const months = ["July", "J-A", "August", "J-A", "September", "J-A", "October", "J-A", "November", "N-D"];

  return (
    <div className="gantt-container">
      {/* Header Rows */}
      <div className="gantt-header">
        <div className="row year-row">
          <div className="cell year-label" style={{ gridColumn: '1 / span 3' }}>YEAR</div>
        </div>
        <div className="row months-row">
          <div className="cell months-label" style={{ gridColumn: '1 / span 3' }}>MONTHS</div>
          {months.map((month, i) => (
            <div className="cell month-cell" key={i}>{month}</div>
          ))}
        </div>
        <div className="row weeks-row">
          <div className="cell">Sl Type</div>
          <div className="cell">Yard Number</div>
          <div className="cell">Weeks</div>
          {[...Array(22)].map((_, i) => (
            <div className="cell" key={i}>{27 + i}</div>
          ))}
        </div>
      </div>

      {/* Gantt Body */}
      <div className="gantt-body">
        {rows.map((row, index) => (
          <div className="gantt-row" key={index}>
            <div className="row-info code">{row.code}</div>
            <div className="row-info desc">{row.desc}</div>
            <div className="row-info weeks">{row.label}</div>
            <div className="row-timeline">
              <div
                className={`task-block ${row.className}`}
                style={{ gridColumn: `${row.colStart} / span ${row.span}` }}
              >
                {row.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;
