import Image from 'next/image';
import sampleAvatar from '../public/avatar-temp.jpg';
import { ImageIcon } from '@radix-ui/react-icons';

const Writepost = () => {
  return (
    <div className="py-5">
      <div className="mb-2 flex items-start">
        <div className="w-1/7 mr-2">
          <Image src={sampleAvatar} alt="prof-avatar" className="w-[30px] rounded-full" />
        </div>

        <textarea
          className="secondary-500 w-11/12 bg-secondary-500 focus:border-secondary-500 focus:outline-none"
          autoFocus={true}
          onBlur={({ target }) => target.focus()}
          placeholder="Write something..."
          style={{ resize: 'none' }}
          rows={5}
          cols={20}
        />
      </div>
      <div className="flex items-center justify-between border-t-[1px] border-secondary-100">
        <ImageIcon className="h-5 w-5 text-primary-100" />
        <button className="rounder mt-2 rounded bg-primary-100 px-3 py-1 transition-all duration-500 hover:bg-primary-300">
          Post
        </button>
      </div>
    </div>
  );
};

export default Writepost;
