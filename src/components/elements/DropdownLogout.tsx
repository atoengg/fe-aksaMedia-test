type DropdownLogoutProps = {
    isOpen: boolean;
  };
  
  export function DropdownLogout({ isOpen }: DropdownLogoutProps) {
    if (!isOpen) return null;
  
    return (
      <div className="absolute px-4 py-2 rounded-2xl top-14 right-20 w-20 border border-indigo-300 bg-white">
        <button type="button">Logout</button>
      </div>
    );
  }
  