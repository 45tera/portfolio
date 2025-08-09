'use client';

import { useState } from "react";

function Increase(){
    const [knowledge, setKnowledge] = React.useState(0);
    const [charm, setCharm] = React.useState(0);
    const [kindness, setKindness] = React.useState(0);
    const [guts, setGuts] = React.useState(0);
    const [proficiency, setProficiency] = React.useState(0);

    function knowledgeClick(){
        setKnowledge(knowledge+1);
    }

    function charmClick(){
        setCharm(charm+1);
    }

    function kindnessClick(){
        setKindness(kindness+1);
    }

    function gutsClick(){
        setGuts(guts+1);
    }

    function proficiencyClick(){
        setProficiency(proficiency+1);
    }

    
}