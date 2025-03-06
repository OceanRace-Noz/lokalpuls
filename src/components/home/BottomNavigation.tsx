import React from "react";

interface NavItem {
  id: string;
  name: string;
  icon: string;
  active: boolean;
}

const navItems: NavItem[] = [
  {
    id: "home",
    name: "Home",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/3621a7c49f1460aec532fa43698240f1d4b35843b8939a8c335db262caf5f29f?placeholderIfAbsent=true",
    active: true,
  },
  {
    id: "fragen",
    name: "Fragen",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/1e3331d8d0873f28e46ac2b7dbed056e5ba54c776ed14030b9c272fee03ad926?placeholderIfAbsent=true",
    active: false,
  },
  {
    id: "meinung",
    name: "Meinung",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/a27f13d1c9d758cb9a0d12472768df456203aa8c5934820c74419f068820bfbf?placeholderIfAbsent=true",
    active: false,
  },
  {
    id: "news",
    name: "News",
    icon: "https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/c0689131ef5e895585e725ff27a60282bafc444515528d8f30e46a14c0abdc77?placeholderIfAbsent=true",
    active: false,
  },
];

const BottomNavigation: React.FC = () => {
  return (
    <>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/da5d3cd85460d2c29911c5e002d048f0d6b09d323d64448c1fb6d3706d9334b3?placeholderIfAbsent=true"
        alt="Divider"
        className="aspect-[2.92] object-contain w-[73px] self-center z-10 mt-[15px]"
      />
      <nav className="self-center relative aspect-[4.931] w-full gap-[40px_90px] text-[15px] whitespace-nowrap px-[18px] py-[15px] rounded-[27px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cde1fe42716a4856b5a284e389d2dda0/b55e643774393349956565b4a1f9d43c1c155b874318a7eb777dfc006acdc5f6?placeholderIfAbsent=true"
          alt="Background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative flex items-stretch justify-between flex-1">
          <div className="flex items-stretch gap-[30px] flex-1">
            {navItems.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className={`flex flex-col items-center ${
                  item.active
                    ? "text-[rgba(78,172,229,1)] font-bold"
                    : "text-[rgba(83,83,83,1)] font-normal"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="aspect-[1] object-contain w-6"
                />
                <div className="mt-2">{item.name}</div>
              </div>
            ))}
          </div>
          <div className="flex items-stretch gap-[31px] text-[rgba(83,83,83,1)] font-normal flex-1">
            {navItems.slice(2).map((item) => (
              <div key={item.id} className="flex flex-col items-stretch">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="aspect-[1] object-contain w-6 self-center"
                />
                <div className="mt-2">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default BottomNavigation;
