import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeroSectionComponent } from './components/sections/hero-section/hero-section.component';
import { HowItWorksSectionComponent } from './components/sections/how-it-works-section/how-it-works-section.component';
import { TelemetryFeaturesSectionComponent } from './components/sections/telemetry-features-section/telemetry-features-section.component';
import { ComingFeaturesSectionComponent } from './components/sections/coming-features-section/coming-features-section.component';
import { PaymentsFeaturesSectionComponent } from './components/sections/payments-features-section/payments-features-section.component';
import { CallToActionSectionComponent } from './components/sections/call-to-action-section/call-to-action-section.component';
import { IconCardComponent } from './components/cards/icon-card/icon-card.component';
import { FeaturesHeaderCardComponent } from './components/cards/features-header-card/features-header-card.component';
import { BannerSectionComponent } from './components/sections/banner-about-section/banner-section.component';
import { MobilityAboutSectionComponent } from './components/sections/mobility-about-section/mobility-about-section.component';
import { OurValuesSectionComponent } from './components/sections/our-values-section/our-values-section.component';
import { FaqSectionComponent } from './components/sections/faq-section/faq-section.component';
import { UrbanLivingSectionComponent } from './components/sections/urban-living-section/urban-living-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    CareersComponent,
    LocationsComponent,
    NavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    HowItWorksSectionComponent,
    TelemetryFeaturesSectionComponent,
    ComingFeaturesSectionComponent,
    PaymentsFeaturesSectionComponent,
    CallToActionSectionComponent,
    IconCardComponent,
    FeaturesHeaderCardComponent,
    BannerSectionComponent,
    MobilityAboutSectionComponent,  
    OurValuesSectionComponent,
    FaqSectionComponent,
    UrbanLivingSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
