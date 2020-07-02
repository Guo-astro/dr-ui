import React from 'react';
import PropTypes from 'prop-types';
import TopbarSticker from '../topbar-sticker/topbar-sticker';
import ProductMenu from '../product-menu/product-menu';
import Search from '../search/search';
import TabList from '../tab-list/tab-list';

export default class Topbar extends React.Component {
  render() {
    const { parentPath } = this.props;
    const { title, tag, path, navTabs } = this.props.navigation;
    const { SITE, BASEURL } = this.props.constants;
    return (
      <TopbarSticker>
        <div className="limiter">
          <div className="grid">
            <div className="col col--4-mm col--12">
              <div className="ml24-mm pt12">
                <ProductMenu
                  productName={title || SITE}
                  tag={tag || undefined}
                  homePage={`${BASEURL}${path || ''}`}
                />
              </div>
            </div>
            <div className="col col--5-mm col--12">
              {navTabs && <TabList items={navTabs} activeItem={parentPath} />}
            </div>

            <div className="col col--3-mm col--12">
              <div className="flex-parent-mm flex-parent--center-cross flex-parent--end-main h-full-mm wmax300 wmax-full-mm my0-mm my12">
                <Search site={SITE} />
              </div>
            </div>
          </div>
        </div>
      </TopbarSticker>
    );
  }
}

Topbar.propTypes = {
  navigation: PropTypes.shape({
    title: PropTypes.string,
    tag: PropTypes.string,
    navTabs: PropTypes.array,
    path: PropTypes.string
  }).isRequired,
  parentPath: PropTypes.string,
  constants: PropTypes.shape({
    SITE: PropTypes.string.isRequired,
    BASEURL: PropTypes.string.isRequired
  }).isRequired
};
