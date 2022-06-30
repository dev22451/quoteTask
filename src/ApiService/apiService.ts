import { BASEURL } from "./Config";

export const apiCall = ({ method, url }: { method: string; url: string }) => {
  return new Promise(async function (resolve, reject) {
    const URL = BASEURL + url;
    await fetch(URL, {
      method: method,
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => {
        resolve(JSON.parse(result));
      })
      .catch((error) => {
        reject(error);
      });
  });
};
