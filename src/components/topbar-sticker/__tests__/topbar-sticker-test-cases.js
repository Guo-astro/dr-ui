import React from 'react';
import TopbarSticker from '../topbar-sticker';

const testCases = {};

testCases.basic = {
  description: 'For display only',
  element: (
    <div style={{ height: 3000 }}>
      <div className="limiter py12 prose">
        <p>Above the bar.</p>
      </div>
      <TopbarSticker>
        <div className="limiter py12" style={{ minHeight: '50px' }}>
          <a className="mr18 link inline-block" href="#heading-2a">
            Heading 2a
          </a>
          <a className="mr18 link inline-block" href="#heading-2b">
            Heading 2b
          </a>
          <a className="mr18 link inline-block" href="#heading-3">
            Heading 3
          </a>
          <a className="link inline-block" href="#heading-4">
            Heading 4
          </a>
        </div>
      </TopbarSticker>
      <div className="limiter py12 prose">
        <p>Below the bar, with lots of space to scroll.</p>
        <h2 id="heading-2a">Heading 2a</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2 id="heading-2b">Heading 2b</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3 id="heading-3">Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h4 id="heading-4">Heading 4</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
};

testCases.unStickSooner = {
  description: 'Unsticks at 900px',
  element: (
    <div style={{ background: 'blue', height: 3000 }}>
      <div className="px24 py12">Above the bar.</div>
      <TopbarSticker unStickWidth={900}>
        <div className="px24 py12">
          I'm going to unstick at 900px wide or less!
        </div>
      </TopbarSticker>
      <div className="px24 py12">
        Below the bar, with lots of space to scroll.
      </div>
    </div>
  )
};

export { testCases };
