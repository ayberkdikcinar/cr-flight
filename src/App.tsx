import './App.css';
import useFetchNearestAirports from './features/search/hooks/useFetchNearestAirports.ts';

function App() {
  const { data, isFetching } = useFetchNearestAirports();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
