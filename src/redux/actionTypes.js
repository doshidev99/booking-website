const createActionTypes = (context) => ({
	success: `${context}_SUCCESS`,
	failed: `${context}_FAILURE`,
	pending: `${context}_PENDING`,
	request: `${context}_REQUEST`,
});


export const logoutType = createActionTypes('LOGOUT');
export const loginType = createActionTypes('LOGIN');
export const registerType = createActionTypes('REGISTER');

export const getMeType = createActionTypes('GET_ME');
export const getAllTourType = createActionTypes('GET_ALL_TOUR');
export const getTourByIdType = createActionTypes('GET_TOUR_BY_ID');
export const bookingType = createActionTypes('BOOKING');
export const searchType = createActionTypes('SEARCH');
export const delTourType = createActionTypes('DEL_TOUR');
export const updateTourType = createActionTypes('UPDATE_TOUR');
export const addTourType = createActionTypes('ADD_TOUR');

export const getAllUserType = createActionTypes('GET_ALL_USER');
export const addUserType = createActionTypes('ADD_USER');
export const getUserByIdType = createActionTypes('GET_USER_BY_ID');
export const updateUserType = createActionTypes('UPDATE_USER');
export const delUserType = createActionTypes('DEL_USER');

