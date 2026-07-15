//import libs
import { api } from "@/lib/axios";

//import types
import type { GetUsersResponse } from "../types";

// import type { User, CreateUserPayload, UpdateUserPayload } from '../types';

export const userApi = {
  fetchUsers: async (): Promise<GetUsersResponse> => {
    const { data } = await api.get("/users");
    return data;
  },
};

// export const userApi = {
//   fetchUsers: async (): Promise<User[]> => {
//     const { data } = await api.get('/users');
//     return data;
//   },

//   fetchUser: async (id: string): Promise<User> => {
//     const { data } = await api.get(`/users/${id}`);
//     return data;
//   },

//   createUser: async (payload: CreateUserPayload): Promise<User> => {
//     const { data } = await api.post('/users', payload);
//     return data;
//   },

//   updateUser: async ({ id, ...payload }: UpdateUserPayload): Promise<User> => {
//     const { data } = await api.put(`/users/${id}`, payload);
//     return data;
//   },

//   deleteUser: async (id: string): Promise<void> => {
//     await api.delete(`/users/${id}`);
//   },
// };
