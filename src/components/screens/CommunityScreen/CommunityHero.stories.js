import React from 'react';
import { storiesOf } from '@storybook/react';

import CommunityHero from './CommunityHero';

// eslint-disable-next-line import/prefer-default-export
export const gitHubRepoData = {
  contributorCount: 100,
  url: 'https://google.com',
  author: 'storybooks',
  name: 'storybook',
};

storiesOf('Frontpage|screens/CommunityScreen/CommunityHero', module).add('default', () => (
  <CommunityHero gitHubRepoData={gitHubRepoData} />
));
