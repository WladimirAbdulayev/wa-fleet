// const BASE_URL = "http://localhost:3001/";

// function api(endpoint, options) {
//   return fetch(BASE_URL + endpoint, options)
//     .then((res) => (res.status < 400 ? res : Promise.reject(res)))
//     .then((res) => (res.status !== 204 ? res.json() : res))
//     .catch((err) => console.log(err));
// }

// exports.getAll = () => {
//   return api("ships");
// };

// exports.postOne = (body) => {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   };
//   return api("ships", requestOptions);
// };

// exports.deleteOne = (id) => {
//   console.log("Front-End: Delete Ship with ID: ", id);
//   const requestOptions = {
//     method: "DELETE",
//   };
//   return api("ships/" + id, requestOptions);
// };
