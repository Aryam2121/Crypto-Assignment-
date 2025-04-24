const PercentageChange = ({ value }) => {
    const color = value >= 0 ? 'text-green-500' : 'text-red-500';
    return <span className={color}>{value}%</span>;
  };
  
  export default PercentageChange;
  