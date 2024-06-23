import { Directive, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive()
export abstract class BaseComponent implements OnDestroy {
  @Input() public isLoading: boolean = false;

  private subscriptions: Subscription[] = new Array<Subscription>();

  protected addSubscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }
  protected removeSubscriptions() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  protected cancelAllSubscriptions() {
    if (this.subscriptions.length === 0) {
      return;
    }

    this.subscriptions.forEach((s) => {
      s.unsubscribe();
    });
    this.subscriptions.slice(0);
  }

  ngOnDestroy(): void {
    this.removeSubscriptions();
  }
}
