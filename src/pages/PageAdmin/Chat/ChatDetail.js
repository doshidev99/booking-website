import { Spin } from 'antd';
import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from "socket.io-client";
import InputMessage from '../../../components/componentsChat/ChatDetail/InputMessage';
import { onSocket } from '../../../redux/actions/temp';
import { getChatRoomById, getMeType } from '../../../redux/actionTypes';
import "./Chat.scss";


const ENDPOINT = 'http://localhost:9000';
const socket = socketIOClient(ENDPOINT);

const ChatDetail = ({ id, chatroomId }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: getMeType.request });
	}, [dispatch]);

	const { profileState: { profile },
		chatState: { listMessTemp, clientMessages },
		loadingState: { loadingGetChatRoomById }
	} = useSelector(currentState => currentState);

	const currentAdminId = profile._id

	useLayoutEffect(() => {
		if (id) {
			dispatch({ type: getChatRoomById.request, payload: id });
		}
	}, [id, dispatch])

	useEffect(() => {
		const listener = (payload) => {
			if (payload.data.role === 1) {
				dispatch(onSocket(payload.data))
			}
		};
		socket.on('newMessage-server-sent', listener)

		return () => socket.off('newMessage-server-sent', listener);
	}, [ dispatch])

	const handleButtonSendMessage = (messageInput) => {
		const payload = {
			userID: id,
			adminId: currentAdminId,
			message: messageInput,
			chatroomId,
			role: 0,
		}

		socket.emit("newMessage-client-sent", payload)
		dispatch(onSocket(payload))
	}


	if (!id) return <div>Loading ...</div>

	if (loadingGetChatRoomById) return <Spin />

	const flag = Object.keys(clientMessages).length > 0 ? true : false


	// eslint-disable-next-line no-console
	console.log(listMessTemp, '<----');
	return (
		<div className="wrapper">
			<div className="chat-area">
				<div className="chat-area-header">
					<div className="chat-area-title">
						<img class="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
						{flag && clientMessages.userID.userName}
					</div>
				</div>

				<div>
					{

						flag &&
						clientMessages && clientMessages?.message.map((mess) => {
							const { content, userID } = mess

							console.log(mess, '<--mess😙--');
							return (

								<div key={mess._id} style={{ marginBottom: 18 }}>
									{userID &&
										currentAdminId !== userID ? (
										<div className="text-left" >
											<div className="message my-message p-2 mb-2"
												style={{
													background: 'lightblue',
													display: 'inline',
												}}
											> {content} </div>
										</div>
									) : (
										<div className="text-right"
										>
											<div className="message my-message p-2 mb-2"
												style={{
													background: 'gray',
													display: 'inline',
													color: 'white'
												}}
											> {content} </div>
										</div>
									)
									}


								</div>
							)
						}
						)
					}
					{
						currentAdminId &&
						listMessTemp && listMessTemp.map((mess) => {

							const { message, role } = mess;

							return (

								<div key={mess._id} style={{ marginBottom: 18 }}>
									{
										role === 1 ? (
											<div className="text-left" >
												<div className="message my-message p-2 mb-2"
													style={{
														background: 'lightblue',
														display: 'inline',
													}}
												> {message} </div>
											</div>
										) : (
											<div className="text-right"
											>
												<div className="message my-message p-2 mb-2"
													style={{
														background: 'gray',
														display: 'inline',
														color: 'white'
													}}
												> {message} </div>
											</div>
										)
									}


								</div>
							)
						}
						)
					}
				</div>

				<div className="chat-area-footer">

					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-paperclip">
						<path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
					<InputMessage handleButtonSendMessage={handleButtonSendMessage} />

				</div>
			</div>

			<div className="detail-area">
				<div className="detail-area-header">
					<div className="detail-title">
						<img class="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" /><br />
						DTU TOUR
					</div>
					<div className="detail-buttons">
						<button className="detail-button">
							<svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone">
								<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
							</svg>
							Gọi
						</button>
						<button className="detail-button">
							<svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video">
								<path d="M23 7l-7 5 7 5V7z" />
								<rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
							Video Call
						</button>
					</div>
				</div>
				<div className="detail-changes">
					<input type="text" placeholder="Search in Conversation" />
					<div className="detail-change">
						Đổi màu
						<div className="colors">
							<div className="color blue selected" data-color="blue"></div>
							<div className="color purple" data-color="purple"></div>
							<div className="color green" data-color="green"></div>
							<div className="color orange" data-color="orange"></div>
						</div>
					</div>
				</div>
				<div className="detail-photos">
					<div className="detail-photo-title">
						Ảnh đã chia sẻ
					</div>
					<div className="detail-photo-grid">
						<img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80" />
						<img src="https://images.unsplash.com/photo-1516085216930-c93a002a8b01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
					</div>
					<div className="view-more">Xem thêm</div>
				</div>
			</div>

		</div >

	)
}

ChatDetail.propTypes = {

}

export default ChatDetail
