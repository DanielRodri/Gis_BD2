
import { HomeComponent } from "./Components/home/home.component";
import {RouterModule, Routes} from "@angular/router"

const routes: Routes = [
{path: "home", component:HomeComponent},
{path: "**" , pathMatch:"full", redirectTo: "home"}

]

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});