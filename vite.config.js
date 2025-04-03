import { defineConfig } from "vite";

export default defineConfig(
    {
        build: {
            target: 'es2015',
            sourcemap: true
        },
        test: {
            coverage: {
                provider: 'istanbul'
            },
            browser: {
              provider: 'playwright',
              enabled: true,
              instances: [
                { browser: 'chromium' },
              ],
            },
          }
    }
);