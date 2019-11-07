import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { ConfigSelectors } from '../../config/config.selectors';
import { ApplicationState } from '../../state/app.state';
import { AboutDialogComponent } from '../about-dialog/about-dialog.component';

@Component({
  selector: 'ac-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerLinks$ = this.store.pipe(select(ConfigSelectors.getFooterLinks));

  constructor(private dialog: MatDialog, private store: Store<ApplicationState>) {}

  showAbout() {
    this.dialog.open(AboutDialogComponent, {
      maxWidth: 600
    });
  }
}
