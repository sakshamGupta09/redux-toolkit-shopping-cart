import { API_DELAY_BY } from "@/constants/api-delay";

interface HttpResponse<T> {
  status: number;
  data: T;
  headers: Headers;
  url: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export async function http<T>(
  endpoint: string,
  { body, ...customConfig }: Partial<RequestInit> = {}
): Promise<HttpResponse<T>> {
  const headers = { "Content-Type": "application/json" };

  const config: RequestInit = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  let data;

  try {
    const response = await window.fetch(
      `${API_URL}${endpoint}?delay=${API_DELAY_BY}`,
      config
    );
    data = await response.json();
    if (response.ok) {
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      };
    }
    throw new Error(response.statusText);
  } catch (err: any) {
    return Promise.reject(err.message ? err.message : data);
  }
}

http.get = function <T>(
  endpoint: string,
  customConfig: Partial<RequestInit> = {}
) {
  return http<T>(endpoint, { ...customConfig, method: "GET" });
};

http.post = function <T>(
  endpoint: string,
  body: any,
  customConfig: Partial<RequestInit> = {}
) {
  return http<T>(endpoint, { ...customConfig, body });
};
