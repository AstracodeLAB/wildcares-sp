import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

type ConsentState = 'accepted' | 'rejected' | 'pending';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.css',
})
export class CookieBannerComponent {
  visible = false;
  showCustomize = false;
  analyticsEnabled = false;
  marketingEnabled = false;

  private storageKey = 'wcsp_cookie_consent';

  constructor() {
    const saved = localStorage.getItem(this.storageKey);
    if (!saved) {
      this.visible = true;
    } else {
      const parsed = JSON.parse(saved);
      this.applyConsent(parsed.analytics, parsed.marketing);
    }
  }

  acceptAll() {
    this.saveConsent(true, true);
  }

  rejectAll() {
    this.saveConsent(false, false);
  }

  openCustomize() {
    this.showCustomize = true;
  }

  saveCustom() {
    this.saveConsent(this.analyticsEnabled, this.marketingEnabled);
  }

  private saveConsent(analytics: boolean, marketing: boolean) {
    localStorage.setItem(
      this.storageKey,
      JSON.stringify({ analytics, marketing, date: new Date().toISOString() }),
    );
    this.applyConsent(analytics, marketing);
    this.visible = false;
    this.showCustomize = false;
  }

  private applyConsent(analytics: boolean, marketing: boolean) {
    // TODO: aquí se cargan/activan los scripts reales cuando tengamos
    // el ID de Google Analytics y el Pixel ID de Meta.
    // Ejemplo futuro:
    // if (analytics) cargarGoogleAnalytics('G-XXXXXXX');
    // if (marketing) cargarMetaPixel('XXXXXXXXXX');
    console.log('[Cookies] analytics:', analytics, 'marketing:', marketing);
  }
}
