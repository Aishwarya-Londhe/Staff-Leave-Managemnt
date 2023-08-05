import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, map, tap } from "rxjs";

@Injectable()

export class HttpHandlerServices {
    apiUrl = "https://staff-project-8ab78-default-rtdb.asia-southeast1.firebasedatabase.app/user-data.json";
    leaveUrl = "https://staff-project-8ab78-default-rtdb.asia-southeast1.firebasedatabase.app/leave.json";
    currentAuthResp: any;
    fullname: any;
    username: any;


    approvedleave: number[] = [0, ];
    sum: number | null = null;

    calculateSum() {
        this.sum = this.approvedleave.reduce((acc, curr) => acc + curr, 0);
    }


    rejectedleave: any[] = [0,];
    sub: number | null = null;

    calculateSub() {
        this.sub = this.rejectedleave.reduce((acc, curr) => acc + curr, 0);
    }


    constructor(private http: HttpClient) { }

    postUser(userObj: any) {
        return this.http.post(this.apiUrl, userObj)
    }

    getUsers() {
        return this.http.get(this.apiUrl).pipe(map((rawdata: any) => {
            let arr = [];

            for (let user in rawdata) {
                arr.push({ ...rawdata[user], user })
            }
            return arr
        }))
    }

    postLeave(userObj: any) {
        return this.http.post(this.leaveUrl, userObj)
    }

    getLeave() {
        return this.http.get(this.leaveUrl).pipe(map((db: any) => {
            let arr = [];
            for (let leave in db) {
                arr.push({ ...db[leave], id: leave })
            }
            return arr
        }))
    }

    signUpNewUser(credentials: any) {
        let payload = {
            email: credentials.userName,
            password: credentials.password,
            returnSecureToken: true
        }
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxlrr2i5L31JJSA9keIibJ2oCagNLTVCk', payload)
    }

    signInCurrentUser(credentials: any) {
        let payload = {
            email: credentials.userName,
            password: credentials.password,
            returnSecureToken: true
        }
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxlrr2i5L31JJSA9keIibJ2oCagNLTVCk', payload).pipe(tap((data: any) => {
            this.currentAuthResp = data
        }))
    }

    addLeaveCard = new Subject()

    patchLeave(details: any, obj : any){
        return this.http.patch(`https://staff-project-8ab78-default-rtdb.asia-southeast1.firebasedatabase.app/leave/${details}.json`, obj)
    }

    patchdata(details1 : any, obj1 : any){
        return this.http.patch(`https://staff-project-8ab78-default-rtdb.asia-southeast1.firebasedatabase.app/user-data/${details1}.json`,obj1)
    }
}