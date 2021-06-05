const createActionTypes = (context) => ({
	success: `${context}_SUCCESS`,
	failed: `${context}_FAILURE`,
	pending: `${context}_PENDING`,
	request: `${context}_REQUEST`,
});


export const logoutType = createActionTypes('LOGOUT');
export const loginType = createActionTypes('LOGIN');
