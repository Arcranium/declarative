import type { Meta, StoryObj } from '@storybook/vue3';
import SButton from "./SButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Button',
  component: SButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' }
  },
  args: {
    primary: false,
    disabled: false
  },
} satisfies Meta<typeof SButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};

export const Dangerous: Story = {
  args: {
    dangerous: true,
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};
