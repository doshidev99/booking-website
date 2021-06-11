import React, { useEffect, useState, useLayoutEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from "socket.io-client";

import './chat-client.scss';
import { Button, Spinner } from 'react-bootstrap';

import { getAllMessageType, addChatRoomType, getMeType, addMessageType } from '../../../redux/actionTypes'
import { addMessTempSuccess, onSocket } from '../../../redux/actions/temp'
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
		chatState: { listMessages, listMessTemp }
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
		socket.on('newMessage-server-sent', (payload) => {
			const _id = payload.data.userID;
			console.log(payload, '<--payload client--');

			if (currentUserId && currentUserId !== _id) {
				dispatch(onSocket(payload.data))
			}
		})
	}, [dispatch])

	const handleButtonSendMessage = (messageInput) => {
		const payload = {
			userID: currentUserId,
			content: messageInput,
			chatroomID: profile.chatRoomID
		}
		socket.emit("newMessage-client-sent", payload)
		dispatch({ type: addMessageType.request, payload: payload })
		dispatch(onSocket(payload))

		scrollTopBottom(20);

	}

	const _messages = listMessages?.messages

	return (
		<>
			{
				!profile.chatRoomID && token ? (
					<Button onClick={handleConnect} variant="secondary" className="text-dark fs-18">Chat now</Button>
				) : (
					<>
						{/* chat body */}
						<div id="chat_box_body" className="chat-box-body">
							{
								_messages && Object.keys(_messages) && _messages.map((mess) => {
									const { content, userID: { _id } } = mess
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
								listMessTemp && Object.keys(listMessTemp) && listMessTemp.map((mess) => {
									const { content, userID: _id } = mess
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
