import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./pages/landing/landing.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ProfessionalCompetencesComponent} from "./pages/professional-competences/professional-competences.component";
import {CriticalDesignComponent} from "./pages/critical-design/critical-design.component";
import {InterculturalCommunicationComponent} from "./pages/intercultural-communication/intercultural-communication.component";
import {HumanCenteredDesignComponent} from "./pages/human-centered-design/human-centered-design.component";
import {StoryCreationComponent} from "./pages/story-creation/story-creation.component";

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  { path: "landing", component: LandingComponent },
  { path: "projects", component: ProjectsComponent},
  { path: "professional_competences", component: ProfessionalCompetencesComponent},
  { path: "critical_design", component: CriticalDesignComponent},
  { path: "intercultural_communication", component: InterculturalCommunicationComponent},
  { path: "human_centered_design", component: HumanCenteredDesignComponent},
  { path: "story_creation", component: StoryCreationComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
