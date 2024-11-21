// import type React from "react";
import type Candidate from "../interfaces/Candidate.interface";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";

type CandidateCardProps = {
    candidate: Candidate;
    addToSavedCandidates?: (() => void) | null;
    removeFromCandidates?: (() => void) | null;
};

const CandidateCard = ({ 
    candidate,
    addToSavedCandidates,
    removeFromCandidates
}: CandidateCardProps) => {
    console.log(candidate);

    return (
        <>
            {candidate?.login ? (
                <>
                    <section style={{ display: 'flex', flexDirection: 'column', height: '70vh', border: '1px solid #f0f0f0', borderRadius: '8px' }}>
                        <figure style={{ flex: '1 1 30%', display: 'flex', justifyContent: 'top', alignItems: 'center' }}>
                            <img src={candidate.avatar_url} alt={`${candidate.name}-avatar`} style={{ maxHeight: '100%', maxWidth: '100%' }} />
                        </figure>
                        <article className='details' style={{ flex: '1 1 70%', overflowY: 'auto', padding: '.3rem' }}>
                            <h2 style={{ textAlign: 'center', fontSize: '310%', margin: 0 }}>{candidate.login}</h2>
                            <p>
                                <strong>Name: </strong> 
                                {candidate.name}                        
                            </p>
                            <p>
                                <strong>Location: </strong>
                                {candidate.location}
                            </p>
                            <p>
                                <strong>Email: </strong>
                                {candidate.email}
                            </p>
                            <p>
                                <strong>Company: </strong>
                                {candidate.company}
                            </p>
                            <a target="none" href={candidate.html_url}>{candidate.html_url}</a>
                        </article>

                    </section>
                    <div className="button-group" style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
                        <IoIosAddCircle
                            style={{ fontSize: '80px', cursor: 'pointer', marginRight: '1rem', backgroundColor: 'black', fill: 'green', borderRadius: '50%' }}
                            onClick={() => addToSavedCandidates?.()}
                        />
                        <IoIosRemoveCircle
                            style={{ fontSize: '80px', cursor: 'pointer', marginLeft: '1rem', backgroundColor: 'black', fill: 'red', borderRadius: '50%' }}
                            onClick={() => removeFromCandidates?.()}
                        />
                    </div>
                </>
            ) : (
                <h1>No Candidates Found</h1>
            )}
        </>

    );
}

export default CandidateCard;