import sampleAvatar from '../public/avatar-temp.jpg';
import sampleImage from '../public/postimg-temp.jpg';
import { HeartIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

const Postblock = () => {
  return (
    <div className="mb-2 flex">
      <div className="w-1/7 mr-2">
        <Image src={sampleAvatar} alt="prof-avatar" className="w-[30px] rounded-full" />
      </div>
      <div className="w-11/12">
        <div>
          <span className="font-bold">Name SecondNaeme</span>{' '}
          <span className="text-sm font-thin text-secondary-100">@blkid</span>
        </div>
        <div className="w-full">
          <p className="text-wrap font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero magni assumenda
            reiciendis error beatae corrupti quidem quaerat cum, autem ad!
          </p>
          <Image src={sampleImage} alt="gallery-img" className="my-2 rounded-lg" />
        </div>

        <div className="mt-2 flex space-x-4 text-secondary-100">
          <HeartIcon />
          <ChatBubbleIcon />
        </div>
      </div>
    </div>
  );
};

export default Postblock;
