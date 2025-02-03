interface AppConfigAttr {
  environment: 'development' | 'production' | 'staging';
}

const appConfig: AppConfigAttr = {
  environment: 'development',
};

export default appConfig;
