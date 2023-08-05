
export class leave{
    name : any;
    from : Date;
    to : Date;
    reason : string;
    status : string;
    username : string;
    leaveday : any;
    constructor(name : string, from : Date, to : Date, reason : string,status : string,username : string,leavday : any){
        this.name = name;
        this.from = from;
        this.to = to;
        this.reason = reason;
        this.status = status;
        this.username = username;
        this.leaveday = leavday;
    }
}