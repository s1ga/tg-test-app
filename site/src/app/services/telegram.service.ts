import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TgButton } from '../interfaces/telegram';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window: any;
  private tg: any;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.window = this._document.defaultView;
    this.tg = this.window.Telegram.WebApp;
  }

  public get MainButton(): TgButton {
    return this.tg.MainButton;
  }

  public get BackButton(): TgButton {
    return this.tg.BackButton;
  }

  public ready(): void {
    this.tg.ready();
  }

  public sendData(data: object): void {
    this.tg.sendData(JSON.stringify(data));
  }
}
