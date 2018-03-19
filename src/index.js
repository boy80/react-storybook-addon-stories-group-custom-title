import React from 'react';


function addStoriesGroup(Comp, storiesList, combinedStoriesTitle, stories) {
  stories
    .add(combinedStoriesTitle,
      () => <div>
        {storiesList.map(story => (
          <div key={story.name} style={{ marginTop: '25px' }} >
            <h1 style={{ marginBottom: '25px' }} > { story.name } </h1>
            <div>
              <Comp {...story.props} />
            </div>
          </div>
        ))}
      </div>
    );
  storiesList
    .forEach((story) => stories.add(story.name, () => <Comp {...story.props} />));
  return stories;
}

git
export default {
  addStoriesGroup(Comp, storiesList, combinedStoriesTitle = 'All Together') {
    addStoriesGroup(Comp, storiesList, combinedStoriesTitle, this);
  },
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
