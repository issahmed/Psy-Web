import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TestsListComponent } from './tests/test-list/tests-list.component';
import { TestDetailComponent } from './tests/test-list/test-detail/test-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestsComponent } from './tests/tests.component';
import { ChooseTestComponent } from './tests/choose-test/choose-test.component';
import { TestStartComponent } from './tests/test/test-start/test-start.component';
import { TestResultComponent } from './tests/test/test-result/test-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    TestsListComponent,
    TestDetailComponent,
    AboutUsComponent,
    TestsComponent,
    ChooseTestComponent,
    TestStartComponent,
    TestResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
