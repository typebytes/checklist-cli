import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfigSelectors } from '../../config/config.selectors';
import { ApplicationState } from '../../state/app.state';

@Component({
  selector: 'ac-about-dialog',
  templateUrl: './about-dialog.component.html',
  styleUrls: ['./about-dialog.component.scss']
})
export class AboutDialogComponent {
  about$ = this.store.select(ConfigSelectors.getAbout);

  constructor(private store: Store<ApplicationState>) {}
}
