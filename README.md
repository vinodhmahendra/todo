
### Install Angular CLI & Create Project
```bash

node --version
20.10.0

npm --version
10.2.4

# Install Angular CLI v17
npm install -g @angular/cli@17

# Create new Angular 17 project (standalone by default)
ng new todo

# Navigate to project
cd todo

# Start development server
ng serve --open


Visit `http://localhost:4200` to see your app running.

```

### Explore Angular CLI Commands

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




### Angular 17 Project Structure

```
src/
├── app/
│   ├── welcome/              # Welcome standalone component
│   ├── app.component.ts      # Root standalone component
│   ├── app.component.html    # Root template
│   ├── app.component.css     # Root styles
│   └── app.config.ts         # App configuration (replaces module)
├── assets/                   # Static files
├── environments/             # Environment configs
├── main.ts                   # Bootstrap file (no module)
└── index.html               # Main HTML file.

```


### Key Angular 17 Changes

1. **Standalone Components** - No NgModules required
2. **Direct Imports** - Import what you need in each component
3. **bootstrapApplication()** - New bootstrap method
4. **app.config.ts** - Configuration instead of app.module.ts
5. **styleUrl** - Singular instead of styleUrls
6. **Simplified Structure** - Less boilerplate code



Angular 17 is more modern, simpler, and performant!



###  Understanding Root Component (Angular 17 Standalone)

Angular 17 uses **standalone components** by default - no NgModules needed!

## Key Files:
- `src/app/app.component.ts` - Standalone component logic
- `src/app/app.component.html` - Template
- `src/app/app.component.css` - Styles
- `src/app/app.component.spec.ts` - test
- `src/main.ts` - Bootstrap file (replaces app.module.ts)

## app.component.ts Structure (Angular 17):
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',             // HTMl tag  name  <app-root> </app-root> -- > index.html
  standalone: true,                    // NEW: Standalone component
  imports: [CommonModule, RouterOutlet], // NEW: Direct imports
  templateUrl: './app.component.html', // 
  styleUrl: './app.component.css'      // NEW: styleUrl (singular)
})
export class AppComponent {
  title = 'todo'; // property
}
```

##  app.compomnent.html structure 
<div>
  <router-outlet></router-outlet>
</div>


### main.ts (Bootstrap - Angular 17):
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: []
}).catch(err => console.error(err));
```

### Key Changes in Angular 17:
1. `standalone: true` - No NgModule needed
2. `imports: []` - Direct component imports
3. `styleUrl` instead of `styleUrls`
4. `bootstrapApplication()` instead of NgModule bootstrap


### Angular Data Binding 

#### String Interpolation '{{}}'
```html
<p>App Title: {{ title }}</p>
<p>User: {{ userName }}</p>
```
- Displays component property values in template
- One-way: Component → Template

#### Property Binding `[property]`
```html
<img [src]="imageUrl" [alt]="imageAlt">
<button [disabled]="isButtonDisabled">Click Me</button>
```
- Sets HTML element properties from component
- One-way: Component → Template

#### Event Binding `(event)`
```html
<button (click)="handleClick()">Click Event</button>
<input (keyup)="onKeyUp($event)">
```
- Handles user events in component methods
- One-way: Template → Component

#### Two-Way Binding
```html
<input [(ngModel)]="userName" placeholder="Enter your name">
<p>Hello, {{ userName }}!</p>
```
- Combines property and event binding
- Two-way: Component ↔ Template
- Requires FormsModule import

##  Create login Component (Angular 17 Standalone)

### Generate Standalone Component via CLI
```bash
# Generate standalone component (default in Angular 17)
ng generate component login
# or shorthand
ng g c login

This creates:
- `src/app/login/login.component.ts` (standalone)
- `src/app/login/login.component.html`
- `src/app/login/login.component.css`
- `src/app/login/login.component.spec.ts`

```

### Benefits of Services:
1. **Single Responsibility** - Service handles only authentication
2. **Reusability** - Multiple components can use same service
3. **Testability** - Easy to mock and test separately
4. **Data Sharing** - Shared state across components
5. **Dependency Injection** - Angular manages service lifecycle

ng generate service services/auth

This creates:
- `src/services/auth.service.ts` 
- `src/services/auth.service.spec.ts`

```
```
###  Error Handling
URL : http://localhost:4200/login123
Error : Cannot match any routes. URL Segment: 'login123'

ng generate component error


1. Visit `http://localhost:4200/login123` - Shows 404 error
2. Visit `http://localhost:4200/invalid-page` - Shows 404 error
3. Click "Go to Login" - Navigates back to login

### Key Concepts:
- **Wildcard Routes (`**`)** - Catches undefined routes
- **Router Navigation** - Programmatic navigation
- **Event Binding** - Button click handling
- **Minimal Error Handling** - Simple user feedback


### Todo's Feature

  CRUD Operations - Create , Read, Update, Delete todos
  Filtering - All , Active , Completed todos
  Statistics - Total , Active , completed counts
  TypeScript Interface - Typ-safe structure
  Navigation - Link from Welcome Page

  ng generate component todos