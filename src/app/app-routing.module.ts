import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChooseTestComponent } from './tests/choose-test/choose-test.component';
import { TestResultComponent } from './tests/test/test-result/test-result.component';
import { TestStartComponent } from './tests/test/test-start/test-start.component';
import { TestComponent } from './tests/test/test.component';
import { TestsComponent } from './tests/tests.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  
  {path : '' , component :WelcomeComponent},
  {path : 'about-us' , component :AboutUsComponent},
  {path : 'tests' , component :TestsComponent , children :[
    {path :'' , component :ChooseTestComponent },
    {path : ':id' , component : TestComponent } ,
    {path : ':id/start' , component : TestStartComponent}  ,
    {path : ':id/result' , component : TestResultComponent}   
 
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
