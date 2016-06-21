import { action, storiesOf } from '@kadira/storybook';
import ErrorBar from './ErrorBar';


const stories = [
  {
    name: 'with text',
    props: { text: 'super error props', onClose: action('clicked!') },
  },
  {
    name: 'with very long text',
    props: {
      text: 'super error this is a reaaaaaalllly long error,' +
      'probably more than one line of text, even if you have a huge monitor, text text',
      onClose: action('clicked!'),
    },
  },
];

storiesOf('ErrorBar', module)
  .addStoriesGroup(ErrorBar, stories);
