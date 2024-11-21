import type React from "react";
import { useState, useEffect } from 'react';
import type Candidate from "../interfaces/Candidate.interface";
import CandidateList from "../components/CandidateList";

const SavedCandidates = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);

    const removeFromStorage = (
        e: React.MouseEvent<SVGElement>,
        login: string | null
    ) => {
        e.preventDefault();
        let parsedCandidates: Candidate[] = [];
        const savedCandidates = localStorage.getItem('candidates');
        if(typeof savedCandidates === 'string') {
            parsedCandidates = JSON.parse(savedCandidates);
        }
        parsedCandidates = parsedCandidates.filter(
            (candidate) => candidate.login !== login
        );
        setCandidates(parsedCandidates);
        localStorage.setItem('candidates', JSON.stringify(parsedCandidates));
    };

    useEffect(() => {
        const savedCandidates = localStorage.getItem('candidates');
        if (savedCandidates) {
            setCandidates(JSON.parse(savedCandidates));
        }
    }, []);

    return (
        <>
            {(!candidates?.length || candidates?.length === 0) ? (
                <h1 style={{ margin: '16px 0' }}>No Candidates Found</h1>
            ) : (
            
            <CandidateList 
            candidates={candidates} removeFromStorage={removeFromStorage} />
            )}
        </>
    );
};

export default SavedCandidates;