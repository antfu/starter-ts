import { defineConfig } from 'tsdown'
import { StaleGuardRecorder } from 'tsdown-stale-guard'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  dts: true,
  exports: true,
  publint: true,
  plugins: [
    StaleGuardRecorder(),
  ],
})
