export class EmailDto {
    public id : number;
    public adress : string;
    public content : string;
    public subject : string;
    public timestamp : Date = new Date();

    constructor(adress : string, content : string, subject : string, timestamp : Date){

    this.adress=adress;
    this.content=content;
    this.subject=subject;
    this.timestamp=timestamp;

    }
    
}

