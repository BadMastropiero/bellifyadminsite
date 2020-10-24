import "./assets/scss/base/_drawer.scss";

export default {
    items: [{
            title: 'true',
            name: 'Gestión Cliente',
            url: '/dashboard',
            class: 'client-manager',
        },
        {
            name: 'Inicio',
            icon: 'drawer-icon-home',
        },
        {
            name: 'Tu tienda',
            url: '/base',
            icon: 'drawer-icon-store',
            children: [{
                    name: 'Cards',
                    url: '/todo',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'Pay method',
                    url: '/pay-method',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'Checkout',
                    url: '/checkout',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'Popups',
                    url: '/popus',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'Shipping',
                    url: 'shipping',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'My Account',
                    url: '/my-account',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'Modal Bill',
                    url: '/modalBill',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'Sales Channels',
                    url: 'sales-channels',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'PlansPermissions',
                    url: '/plans-permissions',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'Facturation',
                    url: '/facturation',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'SentFacturation',
                    url: '/sentfacturation',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'Emails',
                    url: '/emails',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'EmailType',
                    url: '/emailtype',
                    icon: 'icon-puzzle',
                },
            ],
        },
        {
            name: 'Productos',
            url: '/buttons',
            icon: 'drawer-icon-product',
            children: [],
        },
        {
            name: 'Pedidios',
            url: '/charts',
            icon: 'drawer-icon-request',
            children: []
        },
        {
            name: 'Usuarios',
            url: '/icons',
            icon: 'drawer-icon-users',
            children: [{
                    name: 'Login',
                    url: '/login',
                    icon: 'icon-star',
                },
                {
                    name: 'Register',
                    url: '/register',
                    icon: 'icon-star',
                },
                {
                    name: 'Error 404',
                    url: '/404',
                    icon: 'icon-star',
                },
                {
                    name: 'Error 500',
                    url: '/500',
                    icon: 'icon-star',
                },
            ]
        },

        {
            name: 'Apps',
            url: '/home',
            icon: 'drawer-icon-apps',
        },
        {
            name: 'Sevicios',
            url: '/home',
            icon: 'drawer-icon-services',
        },
        {
            name: 'Beonshop School',
            url: '/home',
            icon: 'drawer-icon-school',
        },

        // {
        //   name: 'Download CoreUI',
        //   url: 'https://coreui.io/react/',
        //   icon: 'icon-cloud-download',
        //   class: 'mt-auto',
        //   variant: 'success',
        //   attributes: { target: '_blank', rel: "noopener" },
        // },
        // {
        //   name: 'Try CoreUI PRO',
        //   url: 'https://coreui.io/pro/react/',
        //   icon: 'icon-layers',
        //   variant: 'danger',
        //   attributes: { target: '_blank', rel: "noopener" },
        // },
    ],
};