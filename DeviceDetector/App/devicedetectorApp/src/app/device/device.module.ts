import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDetectorComponent } from './device-detector/device-detector.component';
import { DeviceRoutingModule } from './device-routing.module';
import { MeterialModule } from '../meterial/meterial.module';
import { ServerDevicedetectorComponent } from './server-devicedetector/server-devicedetector.component';
import { DeviceListComponent } from './device-list/device-list.component';


@NgModule({
  declarations: [
    DeviceDetectorComponent,
    ServerDevicedetectorComponent,
    DeviceListComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    MeterialModule
  ]
})
export class DeviceModule { }
