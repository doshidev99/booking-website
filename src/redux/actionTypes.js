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
