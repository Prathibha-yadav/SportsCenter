// import { useState } from 'react';

// function PreferencesModal({ isOpen, onClose, onSave }) {
//   const [selectedSports, setSelectedSports] = useState([]);
//   const [selectedTeams, setSelectedTeams] = useState([]);

//   const handleSave = () => {
//     onSave(selectedSports, selectedTeams);
//     onClose();
//   };

//   return (
//     <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
//       <div className="modal-content">
//         <h2>Preferences</h2>
//         <div>
//           <h3>Sport Names</h3>
//           {availableSports.map((sport) => (
//             <label key={sport}>
//               <input
//                 type="checkbox"
//                 value={sport}
//                 checked={selectedSports.includes(sport)}
//                 onChange={() =>
//                   setSelectedSports((prev) =>
//                     prev.includes(sport)
//                       ? prev.filter((s) => s !== sport)
//                       : [...prev, sport]
//                   )
//                 }
//               />
//               {sport}
//             </label>
//           ))}
//         </div>
//         <div>
//           <h3>Team Names</h3>
//           {availableTeams.map((team) => (
//             <label key={team}>
//               <input
//                 type="checkbox"
//                 value={team}
//                 checked={selectedTeams.includes(team)}
//                 onChange={() =>
//                   setSelectedTeams((prev) =>
//                     prev.includes(team)
//                       ? prev.filter((t) => t !== team)
//                       : [...prev, team]
//                   )
//                 }
//               />
//               {team}
//             </label>
//           ))}
//         </div>
//         <button onClick={handleSave}>Save</button>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }

// export default PreferencesModal;
