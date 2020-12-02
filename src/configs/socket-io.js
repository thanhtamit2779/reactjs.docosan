import io from 'socket.io-client';
import { API } from './api';

export const socketIO = io(API.BASE_URL);