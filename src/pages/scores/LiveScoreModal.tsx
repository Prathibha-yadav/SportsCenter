import { useEffect, useState, Fragment } from "react";
import { API_ENDPOINT } from "../../config/constants";
import { Dialog, Transition } from "@headlessui/react";
import { Match } from "../../context/match/reducer";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const MatchModal: React.FC<{ id: number }> = ({ id }) => {
  const [matchContent, setMatchContent] = useState<Match | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const MatchDetails = async () => {
    const authToken = localStorage.getItem("authToken");
    try {
      const response = await fetch(`${API_ENDPOINT}/matches/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch match details");
      }

      const data = await response.json();
      //console.log(data)
      setMatchContent(data);
    } catch (error) {
      console.error("Error fetching match details", error);
    }
  };

  useEffect(() => {
    MatchDetails();
  }, [id]);

  return (
    <>
      <h1>
        {matchContent && (
          <ul className="flex gap-4 text-md text-gray-900 justify-between mt-2">
            {Object.entries(matchContent.score).map(([team, score]) => (
              <p key={team}>
                {team.split(" ")[0]}: {score}
              </p>
            ))}
            <button className="bg-blue-900 text-white px-2 py-1 rounded-md mt-4 hover:bg-blue-600 transition duration-300" onClick={MatchDetails}>
              <FontAwesomeIcon icon={faSync} className="mr-1" />
            </button>
          </ul>
        )}
      </h1>
      <div className="relative flex justify-left">
        <button type="button" onClick={openModal} style={{ color: "blue" }}>
          View details
        </button>
      </div>
      <div className="p-4 m-2 absolute ">
  <Transition appear show={isModalOpen} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 flex items-center justify-center z-50"
      onClose={closeModal}
    >
      <div className="flex items-center justify-center p-4">
        <Transition.Child as={Fragment}>
          <Dialog.Panel className="w-10/12 p-4 h-96 overflow-y-auto text-left shadow-xl transition-all rounded-lg bg-white">
            {matchContent && (
              <>
                <div className="text-center font-bold">
                <div className="flex justify-end">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
                  <Dialog.Title as="h3" className="text-2xl font-bold leading-6 p-4 m-1">
                    {matchContent.name}
                  </Dialog.Title>
                </div>
                <p className="text-gray-700">
                  <span className="text-black-600 font-bold pr-2">{matchContent.sportName}</span>
                </p>
                
                <div className="mt-2 text-gray-700">
                  <p><span className="text-b font-bold">Starts at:</span> {new Date(matchContent.startsAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}<span className="text-b font-bold"> Ends at:</span> {new Date(matchContent.endsAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}</p>
                </div>
                <p className="text-gray-700">{matchContent.location}</p>
                <h4 className="font-semibold mt-4 text-gray-800">Scores:</h4>
                <ul className="flex gap-4 text-gray-700">
                  {Object.entries(matchContent.score).map(([team, score]) => (
                    <li key={team}>
                      {team}: {score}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-gray-800">{matchContent.story}</div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                  onClick={closeModal}
                >
                  Close
                </button>
              </>
            )}
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
</div>


    </>
  );
  
};

export default MatchModal;

