import React, { useState } from "react";

function FriendList({ friends, setActiveChat }) {
  const [search, setSearch] = useState("");

  const filteredFriends = friends.filter((friend) =>
    friend.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="friend-list">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search friends"
      />
      <ul>
        {filteredFriends.map((friend) => (
          <li key={friend} onClick={() => setActiveChat(friend)}>
            {friend}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
