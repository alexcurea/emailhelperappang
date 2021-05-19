import { Candidate } from "./candidate";
import { EnrollmentStatus } from "./enum/enrollment-status.enum";
import { EnrollmentType } from "./enum/enrollment-type.enum";

export class Enrollment {
    id: number;
    enrollmentType: EnrollmentType;
    enrollmentStatus: EnrollmentStatus;
    enrollmentDate: Date = new Date();
    candidate: Candidate;
}
