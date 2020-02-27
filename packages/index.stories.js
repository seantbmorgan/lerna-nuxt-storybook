import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import StbmButton from './StbmButton/StbmButton.vue';
import "../.storybook/tailwind.css";

storiesOf('StbmButton', module)
  .add('as a component', () => ({
    components: { StbmButton },
    template: '<stbm-button>with text</stbm-button>'
  }))
  .add('with emoji', () => ({
    components: { StbmButton },
    template: '<stbm-button>😀 😎 👍 💯</stbm-button>'
  }))
  .add('with text', () => ({
    components: { StbmButton },
    template: '<stbm-button :rounded="true">rounded</stbm-button>'
  }));