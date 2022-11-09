import * as React from 'react';
import CloseButton from "../Components/Button/CloseButton";
import { Meta, Story } from "@storybook/react";
import {useState} from "@storybook/addons";

interface IProps {
    backgroundColor: string,
    color: string,
    text: string
}

export default {
    title: 'Test',
    component: CloseButton,
    argTypes: { handleClick: {action: {backgroundColor: 'blue'}}},
} as Meta<IProps>;


const Template: Story<IProps> = args => {

    const [name, setName] = useState("anja");

    return <CloseButton handleClick={ (): void => {
    setName("antonio");
}} {...args} />}

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: 'black',
    color: 'white',
    text: 'test123',
}

export const OrangeButton = Template.bind({})
OrangeButton.args = {
    backgroundColor: 'orange',
    color: 'black',
    text: 'Button'
}