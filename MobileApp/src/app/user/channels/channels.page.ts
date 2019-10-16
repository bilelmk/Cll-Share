import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ChannelsService } from './channels.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.page.html',
  styleUrls: ['./channels.page.scss'],
})
export class ChannelsPage implements OnInit {

  public loadedChannels = [];

  constructor(
    private channelsService: ChannelsService,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.loadedChannels = this.channelsService.channels;
  }
  onOpenMenu() {
    this.menuCtrl.toggle();
  }
  addChannel() {

  }
}
