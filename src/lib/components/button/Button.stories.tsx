import { Meta } from '@storybook/react'
import {Button, ButtonProps} from '.'
import { StoryFn } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
      },
}

export default meta

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
    children: <span>Text</span>,

    onClick: () => alert('clicking default')
}