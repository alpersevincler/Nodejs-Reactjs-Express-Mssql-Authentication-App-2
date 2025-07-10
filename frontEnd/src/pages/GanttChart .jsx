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

  return (
    <div className="gantt-container">
      {/* Header Rows */}
      <div className="gantt-header">
        <div className="row year-row">
          <div className="cell year-label" style={{ gridColumn: '1 / span 3' }}>YEAR</div>
          <div className="cell year-cell" style={{ gridColumn: '4 / span 27' }}>2025</div>
          <div className="cell year-cell" style={{ gridColumn: '31 / span 52' }}>2026</div>
          <div className="cell year-cell" style={{ gridColumn: '83 / span 52' }}>2027</div>
        </div>
        <div className="row months-row">
          <div className="cell months-label" style={{ gridColumn: '1 / span 3' }}>MONTHS</div>
          <div className="cell month-cell" style={{ gridColumn: '4 / span 1' }}></div> {/* BOŞ HÜCRE */}
          <div className="cell month-cell" style={{ gridColumn: '5 / span 4' }}>July</div>
          <div className="cell month-cell" style={{ gridColumn: '9 / span 1' }}>J-A</div>
          <div className="cell month-cell" style={{ gridColumn: '10 / span 3' }}>August</div>
          <div className="cell month-cell" style={{ gridColumn: '13 / span 1' }}>A-S</div>
          <div className="cell month-cell" style={{ gridColumn: '14 / span 4' }}>September</div>
          <div className="cell month-cell" style={{ gridColumn: '18 / span 1' }}>S-O</div>
          <div className="cell month-cell" style={{ gridColumn: '19 / span 3' }}>October</div>
          <div className="cell month-cell">O-N</div>
          <div className="cell month-cell" style={{ gridColumn: '23 / span 3' }}>November</div>
          <div className="cell month-cell">N-D</div>
          <div className="cell month-cell" style={{ gridColumn: '27 / span 4' }}>December</div>
          <div className="cell month-cell">D-J</div>
          <div className="cell month-cell" style={{ gridColumn: '32 / span 3' }}>January</div>
          <div className="cell month-cell">J-B</div>
          <div className="cell month-cell" style={{ gridColumn: '36 / span 3' }}>February</div>
          <div className="cell month-cell">F-M</div>
          <div className="cell month-cell" style={{ gridColumn: '40 / span 4' }}>March</div>
          <div className="cell month-cell">M-A</div>
          <div className="cell month-cell" style={{ gridColumn: '45 / span 3' }}>April</div>
          <div className="cell month-cell">A-M</div>
          <div className="cell month-cell" style={{ gridColumn: '49 / span 3' }}>May</div>
          <div className="cell month-cell">M-J</div>
        </div>
        <div className="row weeks-row">
          <div className="cell">Sl Type</div>
          <div className="cell">Yard Number</div>
          <div className="cell">Weeks</div>

          {/* İlk bölüm: 26 → 52 */}
          {[...Array(27)].map((_, i) => (
            <div className="cell" key={`first-${i}`}>{26 + i}</div>
          ))}

          {/* İkinci bölüm: 1 → 52 */}
          {[...Array(52)].map((_, i) => (
            <div className="cell" key={`second-${i}`}>{i + 1}</div>
          ))}

          {/* Üçüncü bölüm: 1 → 52 */}
          {[...Array(52)].map((_, i) => (
            <div className="cell" key={`third-${i}`}>{i + 1}</div>
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
