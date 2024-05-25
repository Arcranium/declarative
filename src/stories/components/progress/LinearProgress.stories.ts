import type { Meta, StoryObj } from '@storybook/vue3';
import SLinearProgress from "./SLinearProgress.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Components/Progress/Linear',
    component: SLinearProgress,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {

    }
} satisfies Meta<typeof SLinearProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}