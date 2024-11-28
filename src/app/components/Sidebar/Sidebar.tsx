import Link from 'next/link';

export default function Sidebar() {

    const sidebarItems = [
        {
            label: 'Menus',
            link: '/dashboard/menus'
        },
    ]

    return (
        <ul>
            {
                sidebarItems.map(item => (
                    <li>
                        <Link href={item.link}>
                            {item.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}