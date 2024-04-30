import type { Meta, StoryObj } from '@storybook/vue3';
import DTextField from "@lib/components/DTextField.vue";
import STextField from "@stories/components/textfield/STextField.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Components/TextField',
    component: STextField,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        size: { control: "select", options: ["small", "medium", "large"] },
        placeholder: { control: "text" }
    }
} satisfies Meta<typeof STextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        size: "small"
    }
}

export const Large: Story = {
    args: {
        size: "large"
    }
}

export const WithPlaceholder: Story = {
    args: {
        placeholder: "Here is the placeholder"
    }
}
