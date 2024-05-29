import type { Meta, StoryObj } from '@storybook/vue3';
import SModal from "./SModal.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Components/Modal',
    component: SModal,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        closable: { control: "boolean" },
        noBackdrop: { control: "boolean" },
        alignVertical: { control: "select", options: ["start", "center", "end"] },
        alignHorizontal: { control: "select", options: ["start", "center", "end"] },
        fullscreen: { control: "select", options: ["True", "False", "Auto"] },
        depthDemo: { control: "boolean" }
    },
    args: {
        closable: true,
        noBackdrop: false,
        alignVertical: "center",
        alignHorizontal: "center",
        fullscreen: "False",
        depthDemo: false
    },
} satisfies Meta<typeof SModal>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {
};

export const NoBackdrop: Story = {
    args: {
        noBackdrop: true
    }
}

export const Fullscreen: Story = {
    args: {
        fullscreen: "True"
    }
}

export const DepthDemo: Story = {
    args: {
        depthDemo: true
    }
}