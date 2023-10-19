import { client } from '../api/fetchClient';
import { User } from '../types';

export function getUsers() {
  return client.get<User[]>('/users');
}
