export interface Personal {
    firstName: string,
    lastName: string,
    location: string,
    timeZone: string,
    languages: string[] | string
}

export interface Education {
    schoool: string,
    degree: string,
    field: string,
    edLocation: string
}

export interface Experience{
    experienced: boolean,
    industry:  string,
    positionOfInterest: string
}

export enum Fill {
    FILL_PERSONAL =  "FILL_PERSONAL",
    FILL_EDUCATION  =  "FILL_EDUCATION",
    FILL_EXPERIENCE = "FILL_EXPERIENCE"
}