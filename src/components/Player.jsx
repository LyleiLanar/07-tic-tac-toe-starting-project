import { useState } from 'react';

export function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const playerNameField = isEditing ? (
    <input type="text" value={name} required />
  ) : (
    <span className="player-name">{name}</span>
  );

  return (
    <li>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
