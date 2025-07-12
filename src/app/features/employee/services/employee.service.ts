import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', position: 'Designer', department: 'UX' },
    { id: 3, name: 'Bob Johnson', position: 'Manager', department: 'HR' }
  ];

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }
}
