import Link from 'next/link';

export default function Home() {

  const menuItems = [
    {
      label: 'Accueil',
      link: '/'
    },
    {
      label: 'Tarifs',
      link: '/tarifs'
    },
    {
      label: 'Dashboard',
      link: '/dashboard'
    },
  ]

  return (
    <main>
      <header className='py-4 px-10'>
        <nav>
          <ul className='flex space-x-10 justify-end'>
          {
            menuItems.map((item) => (
              <li>
                <Link href={item.link}>
                  {item.label}
                </Link>
              </li>
            ))
          }
          </ul>

        </nav>
      </header>
    </main>
  );
}
