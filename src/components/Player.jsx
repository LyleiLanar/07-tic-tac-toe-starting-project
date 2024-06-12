import { useState } from 'react';

export function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  const playerNameField = isEditing ? (
    <input type="text" value={playerName} onChange={handleChange} required />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
