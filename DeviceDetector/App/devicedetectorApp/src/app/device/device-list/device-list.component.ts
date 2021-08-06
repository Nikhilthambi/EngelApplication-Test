import { Component, OnInit } from '@angular/core';
import { DeviceServiceService } from '../shared/device-service.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  constructor(public service:DeviceServiceService) { }

  ngOnInit(): void {
    this.service.refreshList();
    console.log(this.service.list);
  }
}
