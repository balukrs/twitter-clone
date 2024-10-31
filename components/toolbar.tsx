import Image from 'next/image';
import sampleAvatar from '../public/avatar-temp.jpg';

import useWindowSize from '@/hooks/useWindowResize';

const Toolbar = () => {
  const { width } = useWindowSize();

  function calculateSize(screenWidth: number) {
    if (!screenWidth) return 48.624;
    if (screenWidth >= 1920) return 48.624;

    const size = 0.0955 * screenWidth - 139.12;
    return Math.max(size, 0); // Ensure size is not negative
  }

  return (
    <div
      className="fixed hidden h-[90%] w-1/4 text-white md:block"
      style={{ right: `${calculateSize(width)}px` }}
    >
      <div className="min-h-80 w-2/3 rounded-md bg-secondary-100/14">
        <div className="px-3 py-3">
          <h1 className="mb-3 font-bold">Who to follow</h1>
          <div className="mb-2 flex">
            <div className="basis-1/8 mr-2">
              <Image src={sampleAvatar} alt="toolbar-avatar" className="w-[35px] rounded-full" />
            </div>
            <div className="basis-6/8">
              <p className="text-sm font-bold">BKI Firstname</p>
              <p className="text-sm font-light">@tagbkl</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
