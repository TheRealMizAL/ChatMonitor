import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { Bell, Circle, User } from "./icons";

interface Button {
  key: string;
  name: string;
  path: `/${string}`;
}

export function Menu({ animation = "" }) {
  return (
    <div
      className={`${animation} flex flex-1 flex-col md:flex-row-reverse max-md:min-w-[12rem] max-md:absolute max-md:top-11 max-md:right-4 max-md:border max-md:border-border rounded-lg max-md:bg-background max-md:transition-all max-md:duration-50 max-md:ease-in-out`}
    >
      <Profile />
      <Notifications />
      <Navbar />
    </div>
  );
}

function Navbar() {
  const navItems: Button[] = [
    { key: "dashboard", name: "Dashboard", path: "/dashboard" },
    { key: "events", name: "Events", path: "/events" },
    { key: "incidents", name: "Incidents", path: "/incidents" },
    { key: "settings", name: "Settings", path: "/settings" },
    { key: "Knowledge_base", name: "Knowledge Base", path: "/knowledge_base" },
  ];
  return (
    <nav className="flex flex-col md:flex-row md:text-sm max-md:p-0.5 max-md:space-y-0.5 md:space-x-2 md:items-center-safe md:ml-6">
      {navItems.map((item) => (
        <NavButton key={item.key} name={item.name} path={item.path} />
      ))}
    </nav>
  );
}

function NavButton(props: Button) {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(props.path);
  }, [router, props.path]);

  useEffect(() => {
    router.prefetch(props.path);
  });
  return (
    <button onClick={handleClick} className="flex menu-button h-fit">
      <Circle />
      <span className="text-nowrap">{props.name}</span>
    </button>
  );
}

function Profile() {
  return (
    <div className="flex p-0.5">
      <button className="flex flex-1 items-center-safe gap-2 px-2 py-0.5 text-muted-foreground hover:bg-secondary rounded-lg">
        <User />
        <div className="flex flex-col gap-1 ml-1 py-0.5">
          <span className="text-nowrap text-sm md:text-xs">John Doe</span>
          <span className="text-nowrap text-sm bg-primary text-primary-foreground rounded-lg md:text-xs">
            User
          </span>
        </div>
      </button>
    </div>
  );
}

function Notifications() {
  return (
    <div className="flex p-0.5 max-md:border-y max-md:border-border text-muted-foreground md:ml-auto items-center-safe">
      <button className="flex menu-button md:text-xs md:h-fit">
        <Bell />
        <span className="md:sr-only">Notifications</span>
      </button>
    </div>
  );
}
