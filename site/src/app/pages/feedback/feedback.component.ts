import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form class="centered form">
      <h2 class="mb">Feedback</h2>
      <textarea 
        class="form-control" 
        name="feedback"
        [value]="feedback()"
        (input)="handleChange($event)"
      ></textarea>
    </form>
  `,
})
export class FeedbackComponent implements OnInit, OnDestroy {
  private telegramService = inject(TelegramService);
  public feedback = signal<string>('');

  public ngOnInit(): void {
    this.sendData = this.sendData.bind(this);

    this.telegramService.MainButton.setText('Send a message');
    this.telegramService.MainButton.show();
    this.telegramService.MainButton.disable();
    this.telegramService.MainButton.onClick(this.sendData);
  }

  private sendData(): void {
    this.telegramService.sendData({ feedback: this.feedback() });
  }

  protected handleChange(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.feedback.set(target.value);
    if (this.feedback().trim()) {
      this.telegramService.MainButton.enable();
    } else {
      this.telegramService.MainButton.disable();
    }
  }

  public ngOnDestroy(): void {
    this.telegramService.MainButton.offClick(this.sendData);
  }
}
