import React from 'react';

import { StateFulReactButton } from './StateFulReactButton';

export default {
    title: 'Example/StateFulReactButton',
    component: StateFulReactButton,
};

const Template = (args) => <StateFulReactButton {...args} />;

export const FullButton = Template.bind({});

