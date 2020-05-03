import { environment } from '@env';
import { SharedModule } from '@shared/shared.module';
import { EnsureModuleLoadedOnceGuard } from '@shared/guards/ensure-loaded-once.guard';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire';
import 'firebase/firestore';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment),

  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
