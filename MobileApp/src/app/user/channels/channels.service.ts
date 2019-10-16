import { Injectable } from '@angular/core';
import { Channel } from './channel.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  private _channels = [
    new Channel('1', 'test'),
    new Channel('2', 'test2')
  ];

  constructor() { }
  get channels() {
    return this._channels;
  }
}
