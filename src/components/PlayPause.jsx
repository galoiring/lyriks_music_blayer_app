import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaing, activeSong, song, handlePause, handlePlay }) =>
  isPlaing && activeSong?.title === song.title ? (
    <FaPauseCircle 
    size={35}
    className='text-gray-300'
    onClick={handlePause}
    />
  ) : (
    <FaPlayCircle 
    size={35}
    className='text-gray-300'
    onClick={handlePlay}
    />
  );

export default PlayPause;
