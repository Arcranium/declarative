import type { Meta, StoryObj } from '@storybook/vue3';
import SSelect from "@stories/components/select/SSelect.vue";
;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Components/Select',
    component: SSelect,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['small', 'medium', 'large'] }
    },
    args: {
        size: "medium"
    }
} satisfies Meta<typeof SSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {};

export const Small: Story = {
    args: {
        size: "small"
    }
};

export const Large: Story = {
    args: {
        size: "large"
    }
};