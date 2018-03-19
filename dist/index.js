'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _addStoriesGroup(Comp, storiesList, combinedStoriesTitle, stories) {
  stories.add(combinedStoriesTitle, function () {
    return _react2.default.createElement(
      'div',
      null,
      storiesList.map(function (story) {
        return _react2.default.createElement(
          'div',
          { key: story.name, style: { marginTop: '25px' } },
          _react2.default.createElement(
            'h1',
            { style: { marginBottom: '25px' } },
            ' ',
            story.name,
            ' '
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(Comp, story.props)
          )
        );
      })
    );
  });
  storiesList.forEach(function (story) {
    return stories.add(story.name, function () {
      return _react2.default.createElement(Comp, story.props);
    });
  });
  return stories;
}

exports.default = {
  addStoriesGroup: function addStoriesGroup(Comp, storiesList) {
    var combinedStoriesTitle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'All Together';

    _addStoriesGroup(Comp, storiesList, combinedStoriesTitle, this);
  }
};

/**

.storybook/config.js

  import { configure,setAddon } from '@kadira/storybook';
  import addStoriesGroup from 'UTILITY_PATH'

  setAddon(addStoriesGroup)

  function loadStories() {
    require('../src/components/stories/MyComp');
    // require as many stories as you need.
  }

  configure(loadStories, module);


/src/components/stories/MyComp

  import { action , storiesOf} from '@kadira/storybook';
  import MyComp from '../MyComp';

  const stories = [
    {
      name:"with text" ,
      props: {text:"super error props", resetErrorMessage: action('clicked!') }
    },
    {
      name:"with very long text",
      props: {
        text:"super error this is a reaaaaaalllly long error, probably more"+
          " than one line of text, even if you have a huge monitor, text text"
          ,
        resetErrorMessage: action('clicked!')
      }
    }
  ]

  storiesOf('MyComp', module)
    .addStoriesGroup(MyComp, stories)


*/