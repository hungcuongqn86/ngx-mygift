export const navItems = [
    {
        name: 'Bảng điều khiển',
        url: '/dashboard',
        icon: 'icon-speedometer'
    },
    {
        title: true,
        name: 'Đơn hàng'
    },
    {
        name: 'Đơn hàng',
        url: '/orders',
        icon: 'cui-basket-loaded'
    },
    {
        name: 'Khách hàng',
        url: '/customers',
        icon: 'cui-people'
    },
    {
        title: true,
        name: 'Sản phẩm'
    },
    {
        name: 'Phôi',
        url: '/bases',
        icon: 'icon-puzzle'
    },
    {
        name: 'Sản phẩm',
        url: '/product',
        icon: 'cui-layers'
    },
    {
        title: true,
        name: 'Cài đặt'
    },
    {
        url: '/base',
        name: 'Cài đặt trang',
        icon: 'icon-settings',
        children: [
            {
                name: 'Trang thiết kế',
                url: '/product',
                icon: 'icon-wrench'
            },
            {
                name: 'Trang thành phẩm',
                url: '/product',
                icon: 'icon-wrench'
            },
            {
                name: 'Trang sản phẩm',
                url: '/product',
                icon: 'icon-wrench'
            }
        ]
    },
    {
        url: '/base',
        name: 'Cài đặt danh mục',
        icon: 'icon-settings',
        children: [
            {
                name: 'Danh mục loại phôi',
                url: '/product',
                icon: 'icon-wrench'
            },
            {
                name: 'Danh mục nguồn gốc',
                url: '/product',
                icon: 'icon-wrench'
            },
            {
                name: 'Danh mục sản phẩm',
                url: '/product',
                icon: 'icon-wrench'
            }
        ]
    }
];
