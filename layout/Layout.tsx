import Sidebar from '@/components/sidebar';
import Toolbar from '@/components/toolbar';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const renderHeading = (pathname: string) => {
    if (!pathname) return null;
    if (pathname === '/') return 'Home';
    return pathname?.split('/')?.[1];
  };

  return (
    <div className="min-h-screen overflow-y-auto bg-secondary-500">
      <div className="container relative mx-auto h-full">
        <div className="grid h-full grid-cols-6 grid-rows-1 gap-2 pt-6 xs:grid-cols-4">
          <Sidebar path={pathname} />
          <div className="relative col-span-5 w-full xs:col-span-3 md:col-span-2">
            <div
              className="absolute inset-0 border-l border-secondary-300 md:border-r"
              style={{ pointerEvents: 'none' }}
            ></div>
            <section className="mx-auto w-[95%] text-white">
              <div>
                <h1 className="text-lg font-bold capitalize">{renderHeading(pathname)}</h1>
              </div>
              {children}
            </section>
          </div>
          <Toolbar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
