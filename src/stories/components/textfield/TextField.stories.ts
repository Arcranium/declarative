import type { Meta, StoryObj } from '@storybook/vue3';
import STextField from "./STextField.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Components/TextField',
    component: STextField,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        size: { control: "select", options: ["small", "medium", "large"] },
        placeholder: { control: "text" },
        useAction: { control: "boolean "},
        useValidator: { control: "boolean" },
    }
} satisfies Meta<typeof STextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        size: "small"
    }
}

export const Medium: Story = {
    args: {
        size: "medium"
    }
}

export const Large: Story = {
    args: {
        size: "large"
    }
}

export const Placeholder: Story = {
    args: {
        placeholder: "Here is the placeholder"
    }
}


export const Action: Story = {
    args: {
        useAction: true
    }
}



export const Validate: Story = {
    args: {
        useValidator: true
    }
}
