const menu = [{
        icon: "growth",
        text: "Dashboard",
        link: "/",
    },
    {
        heading: "Main Menu",
    },
    {
        icon: "file-docs",
        text: "Akad",
        active: false,
        subMenu: [{
                text: "Data Akad",
                link: "/akad/index",
            },
            {
                text: "Akad Baru",
                link: "/akad/form",
            },
        ],
    },
];
export default menu;