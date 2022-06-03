export const Spinner = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50px"
    height="50px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    className="uil-ring-alt"
  >
    <rect x="0" y="0" width="100" height="100" fill="none" className="bk" />
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="rgba(255,255,255,0)"
      fill="none"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="#737c84"
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="1.5s"
        repeatCount="indefinite"
        from="0"
        to="502"
      />
      <animate
        attributeName="stroke-dasharray"
        dur="1.5s"
        repeatCount="indefinite"
        values="188.25 62.75;1 250;188.25 62.75"
      />
    </circle>
  </svg>
);
