import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';


const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>(
    {
      name: '',
      login: '',
      location: '',
      avatar_url: '',
      email: '',
      html_url: '',
      company: '',
    } 
  );
  // const [search, setSearch] = useState('');
  // const [loading, setLoading] = useState(false);
  const setCurrentUserFromGithub = async (username: string) => {
    const candidate: Candidate = await searchGithubUser(username);
    setCurrentCandidate(candidate);
  }
  
  const addToSavedCandidates = () => {

    let parsedCandidates: Candidate[] = [];
    const savedCandidates = localStorage.getItem('candidates');
    if(typeof savedCandidates === 'string') {
      parsedCandidates = JSON.parse(savedCandidates);
    }
    parsedCandidates.push(currentCandidate);
    localStorage.setItem('candidates', JSON.stringify(parsedCandidates));
    removeFromCandidates();
  };

  const removeFromCandidates = () => {
    let candidateList: Candidate[] = candidates;
    candidateList = candidateList.filter(
      (candidate) => candidate.login !== currentCandidate.login
    );
    if (candidateList.length !== 0) {
      setCandidates(candidateList);
      setCurrentUserFromGithub(candidateList[0].login);
    }

  };
  
  useEffect(() => {
    const fetchData = async () => {
      const data: Candidate[] = await searchGithub();
      setCandidates(data);
      setCurrentUserFromGithub(data[0].login);
    };
    fetchData();
    
  }, []);

  return (
    <>
    <section style={{ textAlign: 'center' }}>
      <h1>CandidateSearch</h1>
      <div style={{ display: 'inline-block' }}>
      <CandidateCard 
      candidate={currentCandidate}
      addToSavedCandidates={addToSavedCandidates}
      removeFromCandidates={removeFromCandidates}
      />
      </div>
    </section>
   
   
   </>
  )

  
};

export default CandidateSearch;
