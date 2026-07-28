import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Instagram, Facebook, Youtube, Linkedin } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, LucideAngularModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class FooterComponent {
  socials = [
    {
      id: 'ig',
      label: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/wildcaressp/',
    },
    {
      id: 'fb',
      label: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/people/Wildcares-SP/100079773460152/',
    },
    {
      id: 'yt',
      label: 'YouTube',
      icon: Youtube,
      href: 'https://www.youtube.com/@wildcaressp/videos',
    },
    {
      id: 'in',
      label: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/wildcaressp/?viewAsMember=true',
    },
  ];
}
