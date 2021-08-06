import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceDetectorComponent } from './device-detector/device-detector.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { ServerDevicedetectorComponent } from './server-devicedetector/server-devicedetector.component';

const routes: Routes = [
      { path: 'detect', component: DeviceDetectorComponent },
      { path: 'serverdevice', component: ServerDevicedetectorComponent },
      { path: 'list', component: DeviceListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
