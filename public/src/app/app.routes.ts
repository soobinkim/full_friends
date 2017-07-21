import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

const APP_ROUTES: Routes = [
	
	{path: '', component: FriendsComponent},
	{path:'new', component: NewComponent},
	{path: 'show/:id', component: ShowComponent},
	{path: 'edit/:id',component: EditComponent},

];

export const routing= RouterModule.forRoot(APP_ROUTES);
