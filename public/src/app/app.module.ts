import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService} from './http.service';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    ShowComponent,
    EditComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]

})
export class AppModule {
}
