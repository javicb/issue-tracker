import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { IssueListComponent } from './issue-list/issue-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IssueReportComponent } from './issue-report/issue-report.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueReportComponent,
    ConfirmDialogComponent,
    IssueDetailComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
