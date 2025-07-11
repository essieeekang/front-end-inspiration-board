import axios from 'axios';

const VITE_APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

export const getAllBoardsApi = () => {
  return axios.get(`${VITE_APP_BACKEND_URL}/boards`)
    .then( response => {
      return response.data;
    })
    .catch( error => {
      console.log(error);
    });
};

export const createNewBoardApi = (newBoard) => {
  return axios.post(`${VITE_APP_BACKEND_URL}/boards`, newBoard)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getAllCardsApi = (boardId, sortParam=null) => {
  let url = `${VITE_APP_BACKEND_URL}/boards/${boardId}/cards`;

  if (sortParam) {
    url += `?sort=${sortParam}`;
  }

  return axios.get(url)
    .then( response => {
      return response.data;
    })
    .catch( error => {
      console.log(error);
    });
};

export const createNewCardApi = (formData) => {
  const boardId = formData.get('boardId');
  formData.delete('boardId');
  formData.append('board_id', boardId);

  return axios.post(`${VITE_APP_BACKEND_URL}/cards`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const likeCardApi = (id) => {
  return axios.patch(`${VITE_APP_BACKEND_URL}/cards/${id}/like`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const removeCardApi = (id) => {
  return axios.delete(`${VITE_APP_BACKEND_URL}/cards/${id}`)
    .catch(error => {
      console.log(error);
    });
};

