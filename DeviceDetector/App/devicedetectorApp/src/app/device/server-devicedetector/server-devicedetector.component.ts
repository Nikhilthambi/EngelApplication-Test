import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { DeviceServiceService } from '../shared/device-service.service';

@Component({
  selector: 'app-server-devicedetector',
  templateUrl: './server-devicedetector.component.html',
  styleUrls: ['./server-devicedetector.component.css']
})
export class ServerDevicedetectorComponent implements OnInit {

  deviceInfo: DeviceInfo;
  constructor(
    public service: DeviceServiceService) { }

  ngOnInit(): void {
    //this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
    this.getDeviceInfo();
  }

  getDeviceInfo() {
    const agent = window.navigator.userAgent.toLowerCase()
    this.service.getDeviceInfo(agent)
      .subscribe(res => {
        this.deviceInfo = res as DeviceInfo;
      },
        err => { console.log(err); })
  }
}
