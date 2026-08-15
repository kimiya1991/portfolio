"use client";

export function PrintButton() {
  return (
    <button type="button" className="printBtn" onClick={() => window.print()}>
      Print / Save PDF
    </button>
  );
}
