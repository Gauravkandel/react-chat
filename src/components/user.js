import { useSearchParams, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import AuthUser from "./AuthUser";

const User = () => {
    const { id } = useParams();
    const { user, token } = AuthUser();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const senderId = user.id; // Use `user.id` directly, no need to destructure
    const receiverId = id;

    const roomId = createRoomId(senderId, receiverId);
    function createRoomId(user1, user2) {
        const sortedIds = [user1, user2].sort();
        return sortedIds.join('_');
    }
    useEffect(() => {
        const pusher = new Pusher('829cece773c1dac92efd', {
            cluster: 'ap2',
        });
        const channel = pusher.subscribe(`user.${roomId}`); // Adjusted channel name to match Laravel setup
        const handleMessage = (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        };
        channel.bind('message', handleMessage);
        const fetchMessages = async () => {
            const response = await fetch(`http://localhost:8000/api/messages/${user.id}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            setMessages(data.messages);
        };
        fetchMessages();
        return () => {
            channel.unbind('message', handleMessage);
            pusher.unsubscribe(`user.${roomId}`);
        };
    }, [token, user.id, id]);

    const submit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                id, // Adjusted to match your Laravel API expectations
                message,
            }),
        });
        setMessage('');
    };

    return (
        <div className="container">
            <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
                <div className="list-group list-group-flush border-bottom scrollarea">
                    {messages.map((message) => (
                        <div key={message.id} className="list-group-item list-group-item-action py-3 lh-tight">
                            {message.sender_id === user.id ? (<div className="bg-primary">
                                <div className="d-flex w-100 align-items-center justify-content-between ">
                                    <strong className="mb-1">{message.username} this is sender</strong>
                                </div>
                                <div className="col-10 mb-1 small">{message.message}</div>
                                <div className="col-10 mb-1 small">{message.timeago}</div>

                            </div>) : (<div>
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <strong className="mb-1">{message.username}</strong>
                                </div>
                                <div className="col-10 mb-1 small">{message.message}</div>
                                <div className="col-10 mb-1 small">{message.timeago}</div>
                            </div>)}
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit={(e) => submit(e)}>
                <input
                    className="form-control"
                    placeholder="Write a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </form>
            {/* Add more buttons or UI elements for switching to other users */}
        </div>
    );
};

export default User;
