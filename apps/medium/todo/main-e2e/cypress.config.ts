import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run medium-todo-main:serve:development',
        production: 'nx run medium-todo-main:serve:production',
      },
      ciWebServerCommand: 'nx run medium-todo-main:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
