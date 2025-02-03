import { useQuery } from '@tanstack/react-query';
import { fetchInterceptorScrapper } from '../../../services/middlewares/fetchInterceptor';
const fetchNearestAirports = async () => {
  const response = await fetchInterceptorScrapper(
    '/v1/flights/getNearByAirports?lat=19.242218017578125&lng=72.85846156046128&locale=en-US'
  );
  const data = await response.json();
  return data;
};

const useFetchNearestAirports = () => {
  return useQuery({ queryKey: ['nearest'], queryFn: fetchNearestAirports });
};

export default useFetchNearestAirports;
