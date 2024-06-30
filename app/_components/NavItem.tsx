type NavItemProps = {
  label: string;
  onClick: () => void;
};

export const NavItem = ({ label, onClick }: NavItemProps) => {
  return (
    <li>
      <button onClick={onClick}>{label}</button>
    </li>
  );
};
