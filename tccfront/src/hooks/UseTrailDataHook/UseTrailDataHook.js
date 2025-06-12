import { useState } from "react";

const UseTrailDataHook = (initialTrail) => {
  const [trailData, setTrailData] = useState({
    trailId: initialTrail?.trailId || '',
    trailName: initialTrail?.trailName || '',
    trailImage: initialTrail?.trailImage || ''
  });

  const updateTrailData = (newTrail) => {
    setTrailData({
      trailId: newTrail?.trailId || '',
      trailName: newTrail?.trailName || '',
      trailImage: newTrail?.trailImage || ''
    });
  };

  return { trailData, updateTrailData };
};

export default UseTrailDataHook;