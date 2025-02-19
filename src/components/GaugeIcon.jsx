const GaugeIcon = ({ stroke: Stroke }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M13.45 11.55L15.5 9.5M10 13C10 13.5304 10.2107 14.0391 10.5858 14.4142C10.9609 14.7893 11.4696 15 12 15C12.5304 15 13.0391 14.7893 13.4142 14.4142C13.7893 14.0391 14 13.5304 14 13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11C11.4696 11 10.9609 11.2107 10.5858 11.5858C10.2107 11.9609 10 12.4696 10 13Z'
        stroke={Stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.4 19.9999C4.93815 18.838 3.87391 17.2501 3.35478 15.4564C2.83564 13.6626 2.88732 11.7518 3.50265 9.98872C4.11797 8.22564 5.26647 6.69762 6.78899 5.61641C8.3115 4.5352 10.1326 3.95435 12 3.95435C13.8674 3.95435 15.6885 4.5352 17.211 5.61641C18.7335 6.69762 19.882 8.22564 20.4974 9.98872C21.1127 11.7518 21.1644 13.6626 20.6452 15.4564C20.1261 17.2501 19.0619 18.838 17.6 19.9999H6.4Z'
        stroke={Stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default GaugeIcon;
