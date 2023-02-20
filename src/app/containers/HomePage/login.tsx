import React,{useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

export function login() {
    const [name, setName] = useState();
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
                <div className="max-w-md-full mx-auto mt-4 bg-white p-8 border-gray-300"></div> 
            </div>
        </div>
    );
}

