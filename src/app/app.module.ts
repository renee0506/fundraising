import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-key';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ProjectListComponent } from './project-list/project-list.component';
import { DetailComponent } from './detail/detail.component';
import { AddFundComponent } from './add-fund/add-fund.component';
import { NewProjectComponent } from './new-project/new-project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    DetailComponent,
    AddFundComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
