import React from 'react';
import { useRouter } from 'next/navigation';
import { TwitterLogoIcon, PersonIcon, BellIcon, HomeIcon, ExitIcon } from '@radix-ui/react-icons';
import useMediaQuery from '@/hooks/useMediaQuery';

const childClassname =
  'flex items-center gap-2 text-lg relative z-10 cursor-pointer px-2 py-2 justify-center xs:justify-start';
const iconClassname = `h-6 w-6`;
const beforeClass = `before:hover:bg-secondary-100/[.14] before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:w-full before:rounded-lg before:px-4 before:content-[''] before:transition before:duration-500`;

interface SideBarProps {
  path: string;
}

const Sidebar: React.FC<SideBarProps> = ({ path }) => {
  const router = useRouter();

  const isAboveMediumScreen = useMediaQuery('(min-width:480px)');

  return (
    <div className="border-r-l relative inset-0 mx-auto flex h-screen w-9 justify-center border-secondary-300 text-white xs:w-full">
      <div className="fixed">
        <div className={`${childClassname}`}>
          <TwitterLogoIcon className={`${iconClassname}`} />
        </div>

        <div className="mt-4 flex h-[90%] flex-col gap-8">
          <div className="relative">
            <div className={`${beforeClass}`} onClick={() => router.push('/')}>
              <div className={`${childClassname} ${path === '/' && 'font-extrabold'}`}>
                <HomeIcon className={`${iconClassname}`} />
                <span className={`${!isAboveMediumScreen && 'hidden'} `}>Home</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className={`${beforeClass}`}>
              <div
                className={`${childClassname} ${path === '/notifications' && 'font-extrabold'}`}
                onClick={() => router.push('/notifications')}
              >
                <BellIcon className={`${iconClassname}`} />
                <span className={`${!isAboveMediumScreen && 'hidden'}`}>Notifiy</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className={`${beforeClass}`}>
              <div className={`${childClassname} ${path === '/profile' && 'font-extrabold'}`}>
                <PersonIcon className={`${iconClassname}`} />
                <span className={`${!isAboveMediumScreen && 'hidden'}`}>Profile</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className={`${beforeClass}`}>
              <div className={`${childClassname}`}>
                <ExitIcon className={`${iconClassname}`} />
                <span className={`${!isAboveMediumScreen && 'hidden'}`}>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
