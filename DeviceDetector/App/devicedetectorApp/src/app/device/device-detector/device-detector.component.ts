import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeviceDetectorService,DeviceInfo  } from 'ngx-device-detector';
import { DeviceServiceService } from '../shared/device-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-detector',
  templateUrl: './device-detector.component.html',
  styleUrls: ['./device-detector.component.css']
})
export class DeviceDetectorComponent implements OnInit {

   deviceInfo:DeviceInfo;
  constructor(private deviceDetectorService: DeviceDetectorService,
    public service: DeviceServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
  }

  insertRecord() {
    this.service.formData.browser=this.deviceInfo.browser;
    this.service.formData.browser_version=this.deviceInfo.browser_version;
    this.service.formData.device=this.deviceInfo.device;
    this.service.formData.deviceType=this.deviceInfo.deviceType;
    this.service.formData.orientation=this.deviceInfo.orientation;
    this.service.formData.os=this.deviceInfo.os;
    this.service.formData.userAgent=this.deviceInfo.userAgent;
    this.service.formData.os_version=this.deviceInfo.os_version;
    
    this.service.postDeviceDetail().subscribe(
      res => {
        this.service.refreshList();
        this.router.navigate(['/device/list/']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
