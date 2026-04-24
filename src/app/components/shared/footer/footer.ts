import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, LucideAngularModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  socials = [
    { id: 'ig', label: 'Instagram', icon: Instagram, href: '#' },
    { id: 'fb', label: 'Facebook', icon: Facebook, href: '#' },
    { id: 'tw', label: 'Twitter', icon: Twitter, href: '#' },
    { id: 'yt', label: 'YouTube', icon: Youtube, href: '#' },
    { id: 'in', label: 'LinkedIn', icon: Linkedin, href: '#' },
  ];
}