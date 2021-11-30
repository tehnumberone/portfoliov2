import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProfessionalCompetencesComponent } from './pages/professional-competences/professional-competences.component';
import { CriticalDesignComponent } from './pages/critical-design/critical-design.component';
import { InterculturalCommunicationComponent } from './pages/intercultural-communication/intercultural-communication.component';
import { HumanCenteredDesignComponent } from './pages/human-centered-design/human-centered-design.component';
import { StoryCreationComponent } from './pages/story-creation/story-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    ProfessionalCompetencesComponent,
    CriticalDesignComponent,
    InterculturalCommunicationComponent,
    HumanCenteredDesignComponent,
    StoryCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
