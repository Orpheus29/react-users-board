import { client } from '../api/fetchClient';
import { User } from '../types';

export function getUsers() {
  return client.get<User[]>('/users');
}

export function createUser({ name, carColorId }: Omit<User, 'id'>): Promise<User> {
  return client.post<User>('/users', {
    name,
    carColorId,
  });
}
