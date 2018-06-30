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
        icon: 'cui-layers',
        children: [
            {
                name: 'Trang thiết kế',
                url: '/product',
                icon: 'cui-layers'
            },
            {
                name: 'Trang thành phẩm',
                url: '/product',
                icon: 'cui-layers'
            },
            {
                name: 'Trang sản phẩm',
                url: '/product',
                icon: 'cui-layers'
            }
        ]
    },
    {
        url: '/base',
        name: 'Cài đặt danh mục',
        icon: 'cui-layers',
        children: [
            {
                name: 'Danh mục loại phôi',
                url: '/product',
                icon: 'cui-layers'
            },
            {
                name: 'Danh mục nguồn gốc',
                url: '/product',
                icon: 'cui-layers'
            },
            {
                name: 'Danh mục sản phẩm',
                url: '/product',
                icon: 'cui-layers'
            }
        ]
    }
];
