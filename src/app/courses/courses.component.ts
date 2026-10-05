import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    { name: 'Course 1', description: 'Bharatanatyam', imageUrl: 'assets/btn.jpeg' },

    { name: 'Course 2', description: 'Kuchipudi', imageUrl: 'assets/kupd.jpeg' },
    { name: 'Course 3', description: 'HipHop', imageUrl: 'assets/hph.jpeg' },
    { name: 'Course 4', description: 'Kathak', imageUrl: 'assets/kthk.jpeg' },
    { name: 'Course 5', description: 'Semi Classical', imageUrl: 'assets/sc.jpeg' },
    { name: 'Course 4', description: 'Ballet', imageUrl: 'assets/blt.jpeg' },
    // Add more courses as needed,

  ];

}
