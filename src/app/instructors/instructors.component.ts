import { Component } from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent {

  instructors = [
    { name: 'John Doe', specialization: 'Ballet', email: 'john@example.com' },
    { name: 'Yash', specialization: 'Hip Hop', email: 'yash@example.com' },
    { name: 'Lalitha', specialization: 'Bharatanatyam', email: 'lalitha@example.com' },
    { name: 'Sri Devi', specialization: 'Kuchipudi', email: 'sri@example.com' },
    { name: 'Jyoshna', specialization: 'kathtak', email: 'jyo@example.com' },
    { name: 'Anjali', specialization: 'Semi Classical', email: 'anjali@example.com' },
    // Add more instructors as needed
  ];

}
