import {loginType, registerType} from '../actionTypes';
import {Toastify} from '../../utils/toast';
import {history} from '../store';

const initialState = {
    isRefresh: false,
    token: !!localStorage.getItem('token'),
};

const chatRoom = (state = initialState, action) => {
    switch (action.type) {
        case loginType.success:
            Toastify({msg: 'Login successfully', type: 'success'});
            history.push('/');
            console.log(history.push('/'), '[history]');
            console.log('aaaaaaaaaaa', '[ "aaaaaaaaaaa"]');
            return {
                ...state,
                token: action.payload,
            };
        case loginType.failed:
            Toastify({msg: 'Login failed', type: 'failed'});
            // history.push('/login');
            return {
                ...state,
            };

        case registerType.success:
            Toastify({msg: 'Register successfully', type: 'success'});
            history.push('/login');

            return {
                ...state,
            };
        case registerType.failed:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default chatRoom;
