import { useSelector } from 'react-redux';

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto);

  const getColor = value =>
    parseFloat(value) > 0 ? 'text-green-500' : parseFloat(value) < 0 ? 'text-red-500' : 'text-gray-500';

  const formatNumber = num => {
    if (!num) return '-';
    return Number(num).toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-sm text-left border-collapse rounded-lg shadow dark:bg-gray-900 dark:text-white">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">Logo</th>
            <th className="p-3">Name</th>
            <th className="p-3 text-right">Price ($)</th>
            <th className="p-3 text-right">1h %</th>
            <th className="p-3 text-right">24h %</th>
            <th className="p-3 text-right">7d %</th>
            <th className="p-3 text-right">Volume (24h)</th>
          </tr>
        </thead>
        <tbody>
          {assets?.map((coin, i) => (
            <tr key={coin.symbol} className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <td className="p-3">{i + 1}</td>
              <td className="p-3">
                <img src={coin.logo} alt={coin.name} className="w-6 h-6" />
              </td>
              <td className="p-3">{coin.name} <span className="text-xs text-gray-500 dark:text-gray-400">({coin.symbol})</span></td>
              <td className="p-3 text-right">${formatNumber(coin.price)}</td>
              <td className={`p-3 text-right ${getColor(coin.change1h)}`}>{coin.change1h}%</td>
              <td className={`p-3 text-right ${getColor(coin.change24h)}`}>{coin.change24h}%</td>
              <td className={`p-3 text-right ${getColor(coin.change7d)}`}>{coin.change7d}%</td>
              <td className="p-3 text-right">${formatNumber(coin.volume24h)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
