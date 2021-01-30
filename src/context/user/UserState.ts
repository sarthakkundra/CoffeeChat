import React, { useReducer } from 'react';

import UserContext from './UserContext';
import { Fill, Personal, Education, Experience }from '../types';

type user = Personal & Education  & Experience

const UserState = (props: any) => {
    const initialState: user = {
        firstName:  "",
        lastName: "",
        location:"",
        timeZone: "",
        languages: [],
        schoool: "",
        degree: "",
        field: "",
        edLocation: "",
        experienced: false,
        industry: "",
        positionOfInterest: ""
    }
}
