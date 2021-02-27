import { configure, addDecorator } from '@storybook/react';
import themeDecorator from "./themeDecorator"

addDecorator(themeDecorator);

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);





