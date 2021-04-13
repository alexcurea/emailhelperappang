import { CandidateStatus } from "./enum/candidate-status.enum";

export class Candidate {
    public id : number;
    public firstName : string;
    public lastName : string;
    public birthDate : Date = new Date();
    public candidateStatus : CandidateStatus;
    public city : string;
    public country : string;
    public phoneNumber : string;
    public email : string;
}
