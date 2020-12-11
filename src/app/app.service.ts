import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
// import * as moment from 'moment';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {

//   profilePicBaseUrl: any = environment.profilePicBaseUrl;
//   imagesBaseUrl: any = environment.imagesBaseUrl;
//   sliderBaseUrl: any = environment.sliderBaseUrl;
//   postBaseUrl: any = environment.postBaseUrl;
//   categoryBaseUrl: any = environment.categoryBaseUrl;

  constructor(private platform: Platform) {
  }

//   getPlatform() {
//     return (this.platform.is('mobile')) ? 'mobile' : 'desktop';
//   }

//   public setToken(token: any) {
//     localStorage.setItem('jwt_token', token);
//   }

//   public getToken() {
//     return localStorage.getItem('jwt_token');
//   }

//   public setAssignStatus(status: any) {
//     localStorage.setItem('isSchoolAssigned', status);
//   }

//   public getAssignStatus() {
//     return localStorage.getItem('isSchoolAssigned');
//   }

//   public setFCMToken(token: any) {
//     localStorage.setItem('fcm_token', token);
//   }

//   public getFCMToken() {
//     return localStorage.getItem('fcm_token');
//   }

//   public setVersion(data: any){
//     localStorage.setItem('version', data.version);
//   }

//   public getVersion() {
//     let version = {
//       version: localStorage.getItem('version')
//     };
//     return version;
//   }

  public setProfile(user: any) {
    // localStorage.setItem('userId', user.id);
    // localStorage.setItem('userEmail', user.email);
    localStorage.setItem('name', user.name);
    localStorage.setItem('number', user.phone_number);
    // localStorage.setItem('userProfilePic', user.profile_picture);
  }

  public getProfile() {
    let userProfile = {
    //   id: localStorage.getItem('userId'),
    //   email: localStorage.getItem('userEmail'),
      name: localStorage.getItem('name'),
      number: localStorage.getItem('number')
    //   userName: localStorage.getItem('userName'),
    //   profilePic: localStorage.getItem('userProfilePic'),
    };
    return userProfile;
  }

//   setUserRate(r: any) {
//     localStorage.setItem('userRate', r);
//   }

//   public getParentId() {
//     return localStorage.getItem('parentId');
//   }

//   public addCredit(c: any) {
//     localStorage.setItem('userCredit', (+localStorage.getItem('userCredit') + (+c)).toString());
//   }

//   public setCredit(c: any) {
//     localStorage.setItem('userCredit', c);
//   }

//   public spendCredit(credit: any) {
//     localStorage.setItem('userCredit', (+localStorage.getItem('userCredit') - (+credit)).toString());
//   }

//   public setFirstLogin(FirstLogin: any) {
//     localStorage.setItem('FirstLogin', FirstLogin);
//   }

//   public getFirstLogin() {
//     return localStorage.getItem('FirstLogin');
//   }

//   public getLat() {
//     return localStorage.getItem('latitude');
//   }

//   public setLat(lat: any) {
//     return localStorage.setItem('latitude', lat);
//   }

//   public setLong(long: any) {
//     return localStorage.setItem('longitude', long);
//   }

//   public getLong() {
//     return localStorage.getItem('longitude');
//   }

//   // moment functions

//   public getDisplayDate(date: any) {
//     return moment(date).format('MM/DD/YY').toString();
//   }

//   public getDisplayDeadline(date: any) {
//     return moment(date).format('MMM DD, YYYY').toString();
//   }

//   public getDisplayDateTime(date: any) {
//     return moment(date).format('MM/DD/YY h:mm a').toString();
//   }

//   addOneHour(date: any) {
//     return moment(date).add(1, 'h').toISOString();
//   }

//   public getTimeAgo(date: any) {
//     return moment(date).fromNow();
//   }

//   public getTodayDateFormat() {
//     return moment().format('MM/DD/YY').toString();
//   }

//   public sendingBackDate(date: any) {
//     return moment(date).format('YYYY-MM-DD').toString();
//   }

//   public get12Time(date: any) {
//     return moment(date, 'HH:mm').format('hh:mm a');
//   }

//   public getDisplayTime(date: any) {
//     return moment(date).format('hh:mm a');
//   }

//   public getScheduleDisplayTime(date: any, time: any) {
//     return moment(date + ' ' + time).format('hh:mm a');
//   }

//   public getDisplayTimeList(date: any) {
//     return moment(date, 'hh:mm a').format('hh:mm a');
//   }

//   getTime(userDateTime) {
//     return moment(userDateTime).format('h:mm a').toString();
//   }

//   isPassed(t: any, d: any) {
//     var now = moment().format('YYYY-MM-DD HH:mm:ss').toString();
//     var time = moment(t).format('HH:mm:ss').toString();
//     var date = moment(d).format('YYYY-MM-DD').toString();
//     var dt = date + " " + time;

//     var _now = moment(now, 'YYYY-MM-DD HH:mm:ss');
//     var _date = moment(dt, 'YYYY-MM-DD HH:mm:ss');

//     if (_date.isBefore(_now)) {
//       return true;
//     }
//     return false;
//   }

//   isTimePassed(date: any, time: any) {
//     var currentDate = moment().format('YYYY-MM-DD HH:mm:ss').toString();
//     var d = moment(date.toString()).format('YYYY-MM-DD').toString();
//     var t = moment(time.toString()).format('HH:mm:ss').toString();
//     var dt = d + " " + t;

//     var cd = moment(currentDate, 'YYYY-MM-DD HH:mm:ss');

//     var newd = moment(dt, 'YYYY-MM-DD HH:mm:ss');
//     if (cd.isAfter(newd) || cd.isSame(newd)) {
//       return true;
//     }
//     return false;
//   }

//   isScheduleTimePassed(date: any, time: any) {
//     var currentDate = moment().format('YYYY-MM-DD HH:mm:ss').toString();
//     var d = moment(date.toString()).format('YYYY-MM-DD').toString();
//     var t = moment(date.toString() + " " + time.toString()).format('HH:mm:ss').toString();
//     var dt = d + " " + t;

//     var cd = moment(currentDate, 'YYYY-MM-DD HH:mm:ss');

//     var newd = moment(dt, 'YYYY-MM-DD HH:mm:ss');
//     if (cd.isAfter(newd) || cd.isSame(newd)) {
//       return true;
//     }
//     return false;
//   }

//   getMonthStripe(date) {
//     return (moment(date).format('MM').toString());
//   }

//   getYearStripe(date) {
//     return (moment(date).format('YYYY').toString());
//   }

//   getTodayDate() {
//     return moment().format('YYYY-MM-DD').toString();
//   }

//   getMinDateTime() {
//     return moment();
//   }

//   addYearsFromToday(year) {
//     return moment().add(year, 'year').format('YYYY-MM-DD').toString();
//   }

//   getDateTimeFormat(date: any) {
//     return moment(date).format('MM/DD/YY hh:mm a').toString();
//   }

//   getSlotTimeFormat(date: any) {
//     return moment(date, 'hh:mm').format('hh:mm a').toString();
//   }

//   TimeFormat24Hr(date: any) {
//     return moment(date).format('HH:mm');
//   }

//   getChatRoomName() {
//     return 'chat_' + this.makeid(5);
//   }

//   makeid(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     for (let i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
//   }
}
