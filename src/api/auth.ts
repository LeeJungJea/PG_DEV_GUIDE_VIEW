import axios from 'axios';
import { AUTH_BASE_URL } from './index';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponseData {
  accessToken: string;
  tokenType: string;
  expiresAt: string;
  username: string;
  email: string;
  role: string;
}

export async function login(payload: LoginPayload): Promise<LoginResponseData> {
  const response = await axios.post(`${AUTH_BASE_URL}/login`, payload);
  if (!response.data?.data) {
    throw new Error(response.data?.message ?? '濡쒓렇???묐떟??泥섎━?????놁뒿?덈떎.');
  }

  return response.data.data as LoginResponseData;
}

