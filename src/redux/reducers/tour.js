import { getAllTourType, getTourByIdType, bookingType, searchType } from '../actionTypes'
import { Toastify } from '../../utils/toast'
import { history } from '../store';

const initialState = {
	tours: [],
	singleTours: {}
}

const chatRoom = (state = initialState, action) => {
	switch (action.type) {
		case getAllTourType.success:

			return {
				...state,
				tours: action.payload
			}
		case getTourByIdType.success:

			return {
				...state,
				singleTours: action.payload
			}
		case bookingType.success:

			Toastify({ msg: 'booking success fully', type: 'success' })
			return {
				...state,
			}
		case searchType.success:

			return {
				...state,
				tours: action.payload
			}
		default:
			return state
	}
};

export default chatRoom;
