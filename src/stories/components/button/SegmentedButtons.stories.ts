import type { Meta, StoryObj } from '@storybook/vue3';
import SSegmentedButtons from "./SSegmentedButtons.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Components/SegmentedButtons',
    component: SSegmentedButtons,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {

    },
    args: {

    },
} satisfies Meta<typeof SSegmentedButtons>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
    },
};