export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:3000' ||
  'http://localhost:3001';

//NEXT_PUBLIC is added in environment, before API_URL, to make it visible to client.
