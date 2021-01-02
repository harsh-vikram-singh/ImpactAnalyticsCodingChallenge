import React from 'react';

const CandidateInfoCard = ({ candidateInfo }) => {
  return (
    <div className="shadow p-4 border rounded-lg hover:shadow-lg cursor-pointer min-w-min hover:bg-gray-50 hover:border-red-800" key={candidateInfo.id}>
      <img className="w-16 h-16 rounded-full mx-auto" src={candidateInfo.Image} alt="user" />
      <p className="text-center pt-2">{candidateInfo.name}</p>
    </div>
  );
}

export default CandidateInfoCard;