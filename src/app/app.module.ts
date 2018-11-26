import { NgModule } from '@angular/core'; //decorator
import { BrowserModule } from '@angular/platform-browser'; //directives
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component'; //components

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		SharedModule,
		CustomersModule,
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent] //bootsrap tells what is the startup component
})
export class AppModule { }