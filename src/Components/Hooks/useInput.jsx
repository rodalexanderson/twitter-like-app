import React from "react";
import { useState } from "react";

const useInput = (initialvalue = "") => {
    const [input, setInput] = useState(initialvalue);

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    return [input, handleChange]
}

export default useInput