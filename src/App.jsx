import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoTable from './features/crypto/CryptoTable';
import { startMockSocket } from './features/crypto/mockSocket';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.crypto);

  useEffect(() => {
    startMockSocket(dispatch, data);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center my-6">🚀 Real-Time Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
};

export default App;
