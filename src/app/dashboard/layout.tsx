import Sidebar from '../components/Sidebar/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="flex bg-[#0e1111] text-white"
      >
        <aside className='w-[200px] p-5'>
            <Sidebar />
        </aside>
        <div className="p-5">{children}</div>
      </body>
    </html>
  );
}
