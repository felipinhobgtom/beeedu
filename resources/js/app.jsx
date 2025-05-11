import './bootstrap';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
    },
    progress: {
        color: "#3254cf",
        delay: "3"
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})
