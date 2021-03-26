import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-flasher',
  templateUrl: './flasher.component.html',
  styleUrls: ['./flasher.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class FlasherComponent implements OnInit {

  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;
  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute
  ){ }

  ngOnInit(): void {
    setTimeout(() => this.afterInit(), 1e3);
  }
  afterInit(): void{
    this.qrScannerComponent.getMediaDevices().then(devices => {
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0){
        let choosenDev;
        for (const dev of videoDevices){
          if (dev.label.includes('front')){
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      this.router.navigate(['/' + result]);

    });
  }



}
