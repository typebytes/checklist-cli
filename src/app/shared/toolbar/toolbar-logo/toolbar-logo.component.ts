import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../../../state/app.state';
import { ConfigSelectors } from '../../../state/config.selectors';

@Component({
  selector: 'ac-toolbar-logo',
  templateUrl: './toolbar-logo.component.html',
  styleUrls: ['./toolbar-logo.component.scss']
})
export class ToolbarLogoComponent {
  @Input() showText = true;
  title$ = this.store.pipe(select(ConfigSelectors.getTitle));

  constructor(private store: Store<ApplicationState>) {}
}
