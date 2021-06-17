import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './chat-client.scss';
import ChatDetail from './ChatDetail';

const ChatClient = () => {
    const dispatch = useDispatch();
    const {
        authState: {token},
    } = useSelector((currentState) => currentState);
    const [isCollapse, setIsCollapse] = useState(true);

    const bubbleChat = () => {
        setIsCollapse(!isCollapse);
    };
    return isCollapse ? (
        <>
            <div className="flexbox">
                <div className="chat-box">
                    <div
                        className="chat-box-header collaped"
                        onClick={bubbleChat}
                    >
                        <h3>
                            Contact
                            <br />
                        </h3>
                    </div>
                    <ChatDetail />
                </div>
            </div>
        </>
    ) : (
        <div className="bubble-chat openCollapse" onClick={bubbleChat}>
            <i className="icon-message fas fa-sms"></i>
        </div>
    );
};

export default ChatClient;
