import { CoursesComponent } from './courses/courses.component';
import { StringToTitlePipe } from './stringToTitle.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { EmailService } from './email.service';
import { TestComponent } from './test/test.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    AuthorComponent,
    TestComponent,
    SummaryPipe,
    StringToTitlePipe,
    FavoriteComponent,
    TitleCaseComponent,
    PanelComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    EmailService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
