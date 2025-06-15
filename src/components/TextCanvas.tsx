import React, {useState} from "react";
import { TextField, Stack } from "@mui/material";

interface TextCanvasProps {
    fieldText?: string;
    status?: number;
}

const TextCanvas: React.FC<TextCanvasProps> = (props) => {
    const [text, setText] = useState("");

    const storeText = () => {
        console.log('Field Value: ', text);
    };

    return (
        <div>
            <Stack spacing={4}>
                <TextField 
                    onChange={(e) => {
                        setText(e.target.value);
                        storeText();
                    }}
                    fullWidth margin='normal' id="outlined-multiline-static" label='Type Here' multiline rows={20}>{props.fieldText}
                </TextField>
            </Stack>
        </div>
    );
};

export default TextCanvas;