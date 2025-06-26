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

export const getAllCardsApi = (boardId) => {
  return axios.get(`${VITE_APP_BACKEND_URL}/boards/${boardId}/cards`)
    .then( response => {
      return response.data;
    })
    .catch( error => {
      console.log(error);
    });
};

export const createNewCardApi = (newCard) => {
  newCard = convertCamelToSnake(newCard);
  return axios.post(`${VITE_APP_BACKEND_URL}/cards`, newCard)
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

const convertCamelToSnake = (card) => {
  const {message, boardId} = card;
  const apiCard = {message, board_id: boardId};
  return apiCard;
};
