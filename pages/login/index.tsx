const Auth = () => {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center border-b-[0.5px] border-secondary-100">
      <h1 className="mb-4 text-lg font-bold">Welcome to Twitter</h1>
      <div>
        <button className="mr-4 cursor-pointer rounded-sm bg-primary-300 px-2 py-1 transition-all duration-300 hover:bg-primary-100">
          Login
        </button>
        <button className="cursor-pointer rounded-sm bg-slate-200 px-2 py-1 text-black transition-all duration-300 hover:bg-primary-100">
          Register
        </button>
      </div>
    </div>
  );
};

export default Auth;
