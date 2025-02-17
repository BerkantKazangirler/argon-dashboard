// export const request = async ({url, type}: any) => {
//   fetch(import.meta.env.SERVER_URL+{url}, {
//     method: type,
//   })
//     .then((res) => res.json())
//     .then((data) => {
//         return data;
//     });
// }

export async function request<T>(url: string, type: string):Promise<T> {
  return fetch(import.meta.env.VITE_APP_SERVER_URL + url, {
    method: type,
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}