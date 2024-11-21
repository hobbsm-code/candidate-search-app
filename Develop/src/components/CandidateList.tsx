import type React from 'react';
import { IoIosRemoveCircle } from "react-icons/io";
import type Candidate from '../interfaces/Candidate.interface';

type CandidateListProps = {
  candidates: Candidate[];
  removeFromStorage: ((
      e: React.MouseEvent<SVGElement>,
      login: string | null
    ) => void) | null;
}

const CandidateList = ({
  candidates,
  removeFromStorage
} : CandidateListProps) => {
  return (
    <>
      <h1>Potential Candidates</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(candidate => (
            <tr key={candidate.login}>
              <td style={{ textAlign: 'center' }}><img src={candidate.avatar_url} alt={candidate.name} width="50" /></td>
              <td>{`${candidate.login}    ${candidate.name ? '('+candidate.name+')' : ''}`}</td>
              <td>{candidate.location}</td>
              <td>{candidate.email}</td>
              <td>{candidate.company}</td>
                <td style={{ textAlign: 'center' }}>
                <IoIosRemoveCircle
                  style={{ fontSize: '50px', cursor: 'pointer', backgroundColor: 'black', fill: 'red', borderRadius: '50%' }}
                  onClick={(e) => removeFromStorage && removeFromStorage(e, candidate.login)}
                />
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CandidateList;
