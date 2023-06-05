import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  mobile = "";
  location = "Location";
  name = "";
  count : number = 0 ;
  error = false; 
  success = false;
  clicked = "" ;
  constructor(private http: HttpClient,private router :Router){

  }

  submitForm(){
    if(this.valid()){
      this.error = false;
      this.success = true;
      this.clicked = 'disabled';
      this.addDataToDatabase();
    }
    else{
      this.error = true;
      this.success = false;
    }
  }

  valid(){
    if(this.name.trim()!="" && this.mobile.trim()!="" && this.location.trim()!="Location"){
      return true;
    }else{
      return false;
    }
  }

  addDataToDatabase() {
    this.http.get("https://demodata-a5fcb-default-rtdb.firebaseio.com/count.json").subscribe(count=>{
      
      if(count==null){
        this.count = 1;
      }
      else{
        this.count = Number(count.valueOf()) + 1;
      }
      this.http.put("https://demodata-a5fcb-default-rtdb.firebaseio.com/count.json", this.count).subscribe(data=>{
        console.log("count added");
      });

      let formdata = {
        'sr' : this.count,
        'name' : this.name,
        'location' : this.location,
        'mobile' : this.mobile
      };
      
      this.http.post("https://demodata-a5fcb-default-rtdb.firebaseio.com/data.json",formdata).subscribe(data=>{
        console.log("data added");
        this.router.navigate(['/formCompleted']);
      });
      
    });
  }

  ngOnInit(): void {
  }

}
