const { buildTopics } = require('../topics.js');
const data = require('./fixtures/data.json');

describe('buildTopics', () => {
  it('single structure', () => {
    expect(buildTopics(data)).toMatchSnapshot();
  });
});
