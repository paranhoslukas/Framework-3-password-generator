import { bootstrapApplication } from '@angular/platform-browser';
import { PasswordComponent } from './app/password.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(PasswordComponent, config);

export default bootstrap;
