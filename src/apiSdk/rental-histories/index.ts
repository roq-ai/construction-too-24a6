import axios from 'axios';
import queryString from 'query-string';
import { RentalHistoryInterface, RentalHistoryGetQueryInterface } from 'interfaces/rental-history';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRentalHistories = async (
  query?: RentalHistoryGetQueryInterface,
): Promise<PaginatedInterface<RentalHistoryInterface>> => {
  const response = await axios.get('/api/rental-histories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRentalHistory = async (rentalHistory: RentalHistoryInterface) => {
  const response = await axios.post('/api/rental-histories', rentalHistory);
  return response.data;
};

export const updateRentalHistoryById = async (id: string, rentalHistory: RentalHistoryInterface) => {
  const response = await axios.put(`/api/rental-histories/${id}`, rentalHistory);
  return response.data;
};

export const getRentalHistoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/rental-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRentalHistoryById = async (id: string) => {
  const response = await axios.delete(`/api/rental-histories/${id}`);
  return response.data;
};
