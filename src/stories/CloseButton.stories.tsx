import * as React from 'react';
import CloseButton from "../Components/Button/CloseButton";
import { Meta, Story } from "@storybook/react";

interface IProps {
    backgroundColor: string,
    color: string,
    text: string
}

export default {
    title: 'Test',
    component: CloseButton,
    argTypes: {onClick: {action: 'clicked'}}
} as Meta<IProps>;

export const Primary: Story<IProps> = (args) => <CloseButton {...args} />;
Primary.args = {
    backgroundColor: 'black',
    color: 'white',
    text: 'test123',
}

export const OrangeButton: Story<IProps> = (args) => <CloseButton {...args} />;
OrangeButton.args = {
    backgroundColor: 'orange',
    color: 'black',
    text: 'this is an orange button',
}