import React from "react";
import { COLORS } from "../constants/colors";

interface YearNavigationProps {
  currentYear: number;
  onYearChange: (year: number) => void;
  minYear: number;
}

export function YearNavigation({
  currentYear,
  onYearChange,
  minYear,
}: YearNavigationProps) {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const buttonStyle: React.CSSProperties = {
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    border: `1px solid ${COLORS.secondary.s04}`,
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    color: COLORS.secondary.s08,
    transition: "all 0.2s",
    
  };

  const disabledButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    cursor: "auto",
    opacity: 0.5,
    color: COLORS.secondary.s04,
    border: `1px solid ${COLORS.secondary.s03}`,
  };

  const yearStyle: React.CSSProperties = {
    fontSize: "36px",
    fontWeight: 700,
    color: COLORS.secondary.s10,
    minWidth: "120px",
    textAlign: "center",
  };

  const maxYear = new Date().getFullYear();
  const isLeftDisabled = currentYear <= minYear;
  const isRightDisabled = currentYear >= maxYear;

  return (
    <div style={containerStyle}>
      <button
        style={isLeftDisabled ? disabledButtonStyle : buttonStyle}
        onClick={() => !isLeftDisabled && onYearChange(currentYear - 1)}
        disabled={isLeftDisabled}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = COLORS.secondary.s02;
          e.currentTarget.style.borderColor = COLORS.secondary.s05;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "white";
          e.currentTarget.style.borderColor = COLORS.secondary.s04;
        }}
      >
        ←
      </button>
      <div style={yearStyle}>{currentYear}</div>
      <button
        style={isRightDisabled ? disabledButtonStyle : buttonStyle}
        onClick={() => !isRightDisabled && onYearChange(currentYear + 1)}
        disabled={isRightDisabled}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = COLORS.secondary.s02;
          e.currentTarget.style.borderColor = COLORS.secondary.s05;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "white";
          e.currentTarget.style.borderColor = COLORS.secondary.s04;
        }}
      >
        →
      </button>
    </div>
  );
}

export default YearNavigation;
