export const GET_USER_DATA = "GET_USER_DATA"

export function getUserData(id) {
    return async function(dispatch) {
      return fetch("http://localhost:3001/api/back-end/users/perfil")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_USER_DATA, payload: json });
        });
    };
}