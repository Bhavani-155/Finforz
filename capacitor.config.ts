import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'rt.web.app',
  webDir: 'dist/rt.web.app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
