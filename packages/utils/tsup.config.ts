import { defineConfig } from 'tsup';
import { execSync } from 'node:child_process';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false,
  clean: true,
  sourcemap: true,
  onSuccess: async () => {
    console.log('Generating types...');
    execSync('tsc --emitDeclarationOnly --declaration --declarationMap');
  },
});
