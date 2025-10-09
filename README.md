# Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


### Install Angular CLI & Create Project
```bash
# Install Angular CLI v17
npm install -g @angular/cli@17

# Create new Angular 17 project (standalone by default)
ng new todo

# Navigate to project
cd todo

# Start development server
ng serve
```

Visit `http://localhost:4200` to see your app running.



## 7. Angular 17 Project Structure

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
``````


## Key Angular 17 Changes

1. **Standalone Components** - No NgModules required
2. **Direct Imports** - Import what you need in each component
3. **bootstrapApplication()** - New bootstrap method
4. **app.config.ts** - Configuration instead of app.module.ts
5. **styleUrl** - Singular instead of styleUrls
6. **Simplified Structure** - Less boilerplate code

## Angular 17 Concepts Demonstrated

1. **Standalone Components** - Self-contained building blocks
2. **Direct Imports** - Import dependencies directly
3. **Templates & Data Binding** - HTML with Angular markup
4. **Signal-based Reactivity** - New reactive primitives
5. **Improved Performance** - Better tree-shaking and bundle size

Angular 17 is more modern, simpler, and performant!



###  Understanding Root Component (Angular 17 Standalone)

Angular 17 uses **standalone components** by default - no NgModules needed!

### Key Files:
- `src/app/app.component.ts` - Standalone component logic
- `src/app/app.component.html` - Template
- `src/app/app.component.css` - Styles
- `src/main.ts` - Bootstrap file (replaces app.module.ts)

### app.component.ts Structure (Angular 17):
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,                    // NEW: Standalone component
  imports: [CommonModule, RouterOutlet], // NEW: Direct imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'      // NEW: styleUrl (singular)
})
export class AppComponent {
  title = 'my-training-app';
}
```

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

##  Create Welcome Component (Angular 17 Standalone)

### Generate Standalone Component via CLI
```bash
# Generate standalone component (default in Angular 17)
ng generate component welcome
# or shorthand
ng g c welcome

This creates:
- `src/app/welcome/welcome.component.ts` (standalone)
- `src/app/welcome/welcome.component.html`
- `src/app/welcome/welcome.component.css`
- `src/app/welcome/welcome.component.spec.ts`


