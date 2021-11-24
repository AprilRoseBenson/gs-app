import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

getAccount(AccountID){
  return this.http.get('http://localhost/gs-app/backend/getSingleAccount.php?AccountID='+AccountID);
}
Reset(AccountID,data){
  return this.http.put('http://localhost/gs-app/backend/updateAccount.php?AccountID='+AccountID,data);
}

getStore(StoreID){
  return this.http.get('http://localhost/gs-app/backend/getStore.php?StoreID='+StoreID);
}
updateProfile(AccountID, data){
  return this.http.put('http://localhost/gs-app/backend/updateProfile.php?AccountID='+AccountID,data);
}
getSearch(){
  return this.http.get<any[]>('http://localhost/gs-app/backend/getSearch.php');
}
updatePhoto(AccountID, data){
  return this.http.put('http://localhost/gs-app/backend/UploadPhoto.php?AccountID='+AccountID,data);
}
updatePassword(AccountID,data){
  return this.http.put('http://localhost/gs-app/backend/updatePassword.php?AccountID='+AccountID,data);
}



}