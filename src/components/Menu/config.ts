export const menuitems = [
    {
        id: 1,
        name: "Home",
        route: "/",
        accordion: false,
    },
    {
        id: 2,
        name: "Trade",
        route: "/farm",
        accordion: true,
        accordions: [
            {
                name: "Exchange",
                href: "#",
            },
            {
                name: "Liquidity",
                href: "#",
            },
        ]
    },
    {
        id: 3,
        name: "Lon Lon Ranch",
        route: "/farm",
        accordion: false,
    },
    {
        id: 4,
        name: "Reservoirs",
        route: "/",
        accordion: false,
    },
    {
        id: 5,
        name: "Kokiri Shop",
        route: "/kokiri",
        accordion: false,
    },
    {
        id: 6,
        name: "Gambling",
        route: "/gambling",
        accordion: false,
    },
    {
        id: 7,
        name: "Vaults",
        route: "/kokiri",
        accordion: false,
    },
    {
        id: 8,
        name: "Audit",
        route: "/kokiri",
        accordion: false,
    },
    {
        id: 9,
        name: "Roadmap",
        route: "/kokiri",
        accordion: false,
    },
    {
        id: 10,
        name: "Info",
        route: "/kokiri",
        accordion: false,
    },
];