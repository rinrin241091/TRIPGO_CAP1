// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://example.com/api',  // Thay bằng URL API của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchHotelDetails = async (hotelId) => {
  const response = await api.get(`/hotels/${hotelId}`);
  return response.data;
};

export const fetchRooms = async (hotelId) => {
  const response = await api.get(`/hotels/${hotelId}/rooms`);
  return response.data;
};
