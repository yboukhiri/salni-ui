import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/components/core.module';
import { DealsModule } from '../deals/deals.module';
import { FriendsModule } from '../friends/friends.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  imports: [CommonModule, CoreModule, DealsModule, FriendsModule],
  exports: [HomePageComponent],
  declarations: [HomePageComponent],
  providers: [],
})
export class HomePageModule {}
