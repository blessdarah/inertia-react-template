import React from 'react'
import './bootstrap'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import 'antd/dist/reset.css';


createInertiaApp({
    resolve: name => import(`./Pages/${name}`),
    setup({ el, App, props }) {
        render(React.createElement(App, props), el)
    },
});
