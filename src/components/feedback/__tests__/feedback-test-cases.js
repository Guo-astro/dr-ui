import Feedback from '../feedback';

import React from 'react';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  component: Feedback,
  description: 'Basic',
  element: <Basic />
};

testCases.type = {
  component: Feedback,
  description: 'Change type',
  props: {
    type: 'section',
    site: 'dr-ui',
    webhook: {
      staging:
        'https://evj5gwoa8j.execute-api.us-east-1.amazonaws.com/hookshot/webhook',
      production:
        'https://2n40g6lyc9.execute-api.us-east-1.amazonaws.com/hookshot/webhook'
    },
    location: {}
  }
};

testCases.noSentry = {
  component: Feedback,
  description: 'Does not send text feedback to Sentry',
  props: {
    site: 'dr-ui',
    webhook: {
      staging:
        'https://evj5gwoa8j.execute-api.us-east-1.amazonaws.com/hookshot/webhook',
      production:
        'https://2n40g6lyc9.execute-api.us-east-1.amazonaws.com/hookshot/webhook'
    },
    feedbackSentryDsn: false,
    preferredLanguage: 'Swift',
    section: 'LngLat',
    location: {
      pathname: '/dr-ui/api/',
      hash: '#lnglat'
    }
  }
};

export { testCases };
