export async function request<T>(url: string, type: string): Promise<T> {
  return fetch(import.meta.env.VITE_APP_API_URL + url, {
    method: type,
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
