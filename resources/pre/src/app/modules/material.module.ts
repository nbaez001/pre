import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { ResponsiveRowsDirective } from '../core/directives/responsive-rows.directive';
import { UppercaseDirective } from '../core/directives/uppercase.directive';
import { ReactiveFormsModule } from '@angular/forms';
// import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ResponsiveRowsDirective,
    UppercaseDirective,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    // MatListModule,
    // LayoutModule,
    MatMenuModule,
    // MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatTableModule,
    // MatPaginatorModule,
    MatDialogModule,
    // MatTooltipModule,
    // MatCheckboxModule,
    // MatRadioModule,
    // MatProgressSpinnerModule,
    // MatBadgeModule,
    // MatStepperModule,
    // MatSnackBarModule,
  ],
  exports: [
    ResponsiveRowsDirective,
    UppercaseDirective,

    ReactiveFormsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    // MatListModule,
    // LayoutModule,
    MatMenuModule,
    // MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatTableModule,
    // MatPaginatorModule,
    MatDialogModule,
    // MatTooltipModule,
    // MatCheckboxModule,
    // MatRadioModule,
    // MatProgressSpinnerModule,
    // MatBadgeModule,
    // MatStepperModule,
    // MatSnackBarModule,
  ]
})
export class MaterialModule { }
