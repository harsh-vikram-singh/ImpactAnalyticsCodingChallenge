import React from 'react';
import CandidateInfoCard from './CandidateInfoCard';
import AllSearchResults from './AllSearchResults';

function App() {

  const [candidatesInfo, setCandidatesInfo] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [userClicked, setUserClicked] = React.useState(null);

  const displayContent = () => {
    if (searchTerm === '') {
      return (
        <>
          <p className="text-red-800 pt-5">All Candidates</p>
          <div className="grid grid-cols-2 gap-4 p-2 min-w-max">
            {
              candidatesInfo.length > 0 ?
              candidatesInfo.map(val => <CandidateInfoCard candidateInfo={val} key={val.id}/>) :
              <></>
            }
          </div>
        </>
      );
    } else if (searchTerm !== '') {
      const matchingResults= candidatesInfo.filter(val => val.name.toLowerCase().includes(searchTerm.toLowerCase()));
      return (
        <AllSearchResults matchingResults={matchingResults} clickHandler={clickHandler}/>
      )
    }
  };

  const displaySelectedUser = () => {
    return (
      <div className="pt-4">
        <CandidateInfoCard candidateInfo={userClicked} />
        <button className="border text-gray-50 rounded mt-4 p-2 shadow hover:shadow-lg bg-red-800" onClick={() => {
          setSearchTerm('');
          setUserClicked(null);
        }}>Show All</button>
      </div>
    );
  }

  React.useEffect(() => {
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
      .then(response => response.json())
      .then(data => setCandidatesInfo(data))
      .catch(err => console.error('following error while fetching candidate info: ', err));
  }, []);

  const clickHandler = (info) => {
    setUserClicked(info)
  }

  return (
    <div className="flex flex-col justify-center items-center min-w-min">
      <div className="p-4 text-4xl tracking-wide font-black text-gray-600 shadow-sm min-w-full">
        <p className="text-center">Select Top Candidates</p>
      </div>
      <div className="p-2 flex flex-col items-center w-3/5">
        <input className="p-2 bg-gray-100 center" placeholder="search for a candidate"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        ></input>
        {userClicked ? displaySelectedUser() : displayContent()}
      </div>
    </div>
  );
}

export default App;
