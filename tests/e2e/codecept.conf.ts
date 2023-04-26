import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:4173/blockchain-ui-fun',
      show: false,
      browser: 'chromium',
      waitForTimeout: 60_000,
      waitForNavigation: 'load',
      timeout: 60_000
    }
  },
  include: {
    I: './customSteps'
  },
  name: 'e2e',
  plugins: {
    customLocator: {
      enabled: true,
      attribute: 'data-testid'
    }
  }
}
