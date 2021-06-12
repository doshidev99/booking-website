import React, { memo, useEffect, useLayoutEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from "socket.io-client";
import { onSocket } from '../../../redux/actions/temp';
import { addChatRoomType, addMessageType, getAllMessageType, getChatRoomById, getChatRoomByIdType, getMeType } from '../../../redux/actionTypes';
import './chat-client.scss';
import InputMessage from './InputMessage';



const ENDPOINT = 'http://localhost:9000';
const socket = socketIOClient(ENDPOINT);

const ChatDetail = () => {
	const dispatch = useDispatch();

	const scrollTopBottom = (bonus = 0) => {
		let el = document?.getElementById('chat_box_body');
		if (el) {
			el.scrollTop = el.scrollHeight + bonus
		}
	}
	useLayoutEffect(() => {
		scrollTopBottom();
	}, []);

	useEffect(() => {
		dispatch({ type: getMeType.request });
	}, [dispatch]);

	useEffect(() => {
		dispatch({ type: getAllMessageType.request });
	}, [dispatch]);

	const {
		authState: { token },
	} = useSelector(currentState => currentState);

	const { profileState: { profile },
		chatState: { listMessages, listMessTemp, messages }
	} = useSelector(currentState => currentState);

	const currentUserId = profile._id

	// eslint-disable-next-line no-console
	const handleConnect = () => {
		dispatch({
			type: addChatRoomType.request, payload: {
				userID: currentUserId,
			}
		})
	}

	useEffect(() => {
		if (currentUserId) {
			dispatch({ type: getChatRoomByIdType.request, payload: currentUserId });
		}
	}, [dispatch])

	useEffect(() => {
		socket.on('newMessage-server-sent', (payload) => {
			const _id = payload.data.userID;
				// eslint-disable-next-line no-console
			console.log(currentUserId, '<---currentUserId-');
			console.log(_id, '<---_id-');
			// if (currentUserId && currentUserId !== _id) {
				dispatch(onSocket(payload.data))
			// }
		})
	}, [dispatch])

	const handleButtonSendMessage = (messageInput) => {
		const payload = {
			userID: currentUserId,
			message: messageInput,
		}
		socket.emit("newMessage-client-sent", payload)
		dispatch(onSocket(payload))

		scrollTopBottom(20);

	}


	return (
		<>
			{
				false ? (
					<Button onClick={handleConnect} variant="secondary" className="text-dark fs-18">Chat now</Button>
				) : (
					<>
						{/* chat body */}
						<div id="chat_box_body" className="chat-box-body">
							{
								messages && Object.keys(messages).length && messages.map((mess) => {
									const { content, userID: { _id } } = mess

										// eslint-disable-next-line no-console
									console.log(mess, '<----');

									return (
										<div key={mess._id} style={{ paddingBottom: 6 }}>
											{
												currentUserId !== _id ? (
													<div className="client-mess profile my-profile px-2 mt-2 text-left" >
														<div className="">
														</div>
														<div className="message my-message p-2 mb-2"
															style={{
																background: 'lightblue',
																display: 'inline',
															}}
														> {content} </div>
													</div>
												) : (
													<div className="admin-mess text-right px-2 mb-3 text-right">
														<div className="profile other-profile">
															{/* <img src="https://i.pravatar.cc/30"
                                      style={{ borderRadius: '50%' }}
                                      width="30" height="30" alt="" />
                                    <span>Admin</span> */}
														</div>
														<div className="message other-message box-chat-admin text-white p-2"
															style={{
																background: 'gray',
																display: 'inline'
															}}
														>{content}</div>
													</div>
												)
											}


										</div>
									)
								})
							}



							{
								listMessTemp && Object.keys(listMessTemp).length && listMessTemp.map((mess) => {
									const { message, userID: _id } = mess
									return (
										<div key={mess._id} style={{ paddingBottom: 6 }}>
											{
												currentUserId !== _id ? (
													<div className="client-mess profile my-profile px-2 mt-2 text-left" >
														<div className="">
														</div>
														<div className="message my-message p-2 mb-2"
															style={{
																background: 'lightblue',
																display: 'inline',
															}}
														> {message} </div>
													</div>
												) : (
													<div className="admin-mess text-right px-2 mb-3 text-right">
														<div className="profile other-profile">

														</div>
														<div className="message other-message box-chat-admin text-danger p-2"
															style={{
																background: 'gray',
																display: 'inline'
															}}
														>{message}</div>
													</div>
												)
											}


										</div>
									)
								})
							}


						</div>

						<div id="typing">
							<div>
								<span className="n">Someone</span> is typing...
							</div>
						</div>
						<div className="chat-box-footer">
							<InputMessage
								handleButtonSendMessage={handleButtonSendMessage}
							/>
						</div>
					</>
				)
			}
		</>
	);
}

export default memo(ChatDetail)
