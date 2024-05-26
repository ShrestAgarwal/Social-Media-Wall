import React, { useState } from "react";

const friends = ["Alice", "Bob", "Charlie"];

function ChatWindow() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState({});
  const [inputMessage, setInputMessage] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const selectFriend = (friend) => {
    setSelectedFriend(friend);
    setIsExpanded(true);
  };

  const sendMessage = () => {
    if (inputMessage.trim() && selectedFriend) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedFriend]: [
          ...(prevMessages[selectedFriend] || []),
          { text: inputMessage, sender: "me" },
        ],
      }));
      setInputMessage("");
    }
  };

  const toggleExpand = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const filteredFriends = friends.filter((friend) =>
    friend.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`chat-window ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="chat-header" onClick={toggleExpand}>
        <span>{selectedFriend ? `Chat with ${selectedFriend}` : "Chat"}</span>
        <button className="toggle-btn" onClick={toggleExpand}>
          {isExpanded ? "▼" : "▲"}
        </button>
      </div>
      {isExpanded && (
        <>
          <div className="friend-list">
            <input
              type="text"
              placeholder="Search friends..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
            <ul>
              {filteredFriends.map((friend) => (
                <li key={friend} onClick={() => selectFriend(friend)}>
                  {friend}
                </li>
              ))}
            </ul>
          </div>
          {selectedFriend && (
            <div className="chat-box" onClick={(e) => e.stopPropagation()}>
              <div className="chat-history">
                {(messages[selectedFriend] || []).map((message, index) => (
                  <p
                    key={index}
                    className={
                      message.sender === "me" ? "my-message" : "their-message"
                    }
                  >
                    {message.text}
                  </p>
                ))}
              </div>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ChatWindow;
