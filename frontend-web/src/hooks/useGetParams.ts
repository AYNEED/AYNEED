import { useLocation } from 'react-router-dom';

export const useGetParams = (): URLSearchParams => {
  const { search } = useLocation();

  return new URLSearchParams(search);
};
