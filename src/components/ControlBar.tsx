import React from "react";
import { Button, Stack } from "@mui/material";
import { useAppContext } from "../contexts/AppContext";


const ControlBar = ({isPlaying}: {isPlaying: boolean}) => {
    const {playVoice, playTrigger} = useAppContext();
    
    return (
        <div >
            <Stack marginY={2} direction='row' spacing={2} sx={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Button variant='outlined'>Prev.</Button>
                <Button color='success' variant='contained' 
                    onClick={()=> {
                        playVoice();
                        console.log("Button Status:", (playTrigger ? "Playing": "Paused")); 
                    }}
                >Play/Pause
                </Button>
                <Button variant='outlined'>Next</Button>
            </Stack>
        </div>
    );
};

export default ControlBar;