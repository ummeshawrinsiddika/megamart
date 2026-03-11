export const Topbar = () => {
  return (
    <div className="w-full py-2 px-4 flex items-center justify-between text-xs sm:text-sm">
      <span className="text-primary  ">Welcome to Megamart!</span>

      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-wrap">
        <span className="flex items-center gap-1 text-primary">
          📍 <span className="hidden sm:inline">Deliver to</span>
          <strong className="text-brand ml-1">423651</strong>
        </span>

        <span className="text-theme hidden sm:block">|</span>

        <span className="flex items-center gap-1 text-primary">
          🚚 <span className="hidden md:inline">Track your order</span>
          <span className="inline md:hidden">Track</span>
        </span>

        <span className="text-theme hidden sm:block">|</span>

        <span className="flex items-center gap-1 text-primary">
          🏷️ <span className="hidden md:inline">All Offers</span>
          <span className="inline md:hidden">Offers</span>
        </span>
      </div>
    </div>
  );
};
