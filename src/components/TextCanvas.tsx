import React, {useState, useEffect} from "react";
import { TextField, Stack } from "@mui/material";

import { useAppContext } from "../contexts/AppContext";
import {useSpeech} from "react-text-to-speech";

interface TextCanvasProps {
    fieldText?: string;
    status?: number;
}

const TextCanvas: React.FC<TextCanvasProps> = (props) => {
    const {text, setText, playTrigger} = useAppContext();
    const {Text, speechStatus, start, pause, stop,} = useSpeech({text: text});
    useEffect( () => {
        if(playTrigger){
            console.log("Uttered Something: ", text);
            // TODO:: Add the voice function in here.
            start();
        }
    }, [playTrigger]);
    

    return (
        <div>
            <Stack spacing={4}>
                <TextField 
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    fullWidth margin='normal' id="outlined-multiline-static" label='Type Here' multiline rows={20}>{props.fieldText}
                </TextField>
            </Stack>
        </div>
    );
};

export default TextCanvas;