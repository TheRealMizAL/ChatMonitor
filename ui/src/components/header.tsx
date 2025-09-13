"use client";

import { useRouter } from "next/navigation";
import { SVGProps, useCallback, useEffect } from "react";

export default function Header() {
  return (
    <header className="flex border-b p-3 items-center-safe">
      <Logo />
      <div className="flex flex-col absolute top-10 right-(--right-menu-margin) w-55">
        <Profile />
        <Notifications />
        <Navbar />
      </div>
      <Burger />
    </header>
  );
}

interface Button {
  key: string;
  name: string;
}

function CreatePrefetch(path: string) {
  const router = useRouter();
  const onClick = useCallback(
    (e: unknown) => {
      router.push(path);
    },
    [path, router]
  );
  useEffect(() => {
    router.prefetch(path);
  });

  return onClick;
}

function Navbar() {
  const navItems: Button[] = [
    { key: "item1", name: "Menu item 1" },
    { key: "item2", name: "Menu item 2" },
    { key: "item3", name: "Menu item 3" },
    { key: "item4", name: "Menu item 4" },
    { key: "item5", name: "Menu item 5" },
  ];

  const navButtons = navItems.map((item) => (
    <div key={item.key} className="flex items-center-safe">
      <Circle />
      <button onClick={CreatePrefetch(`/${item.key}`)} className="ml-3">
        {item.name}
      </button>
    </div>
  ));
  return (
    <nav className="border rounded-b-md px-3 py-2 space-y-2 bg-background">
      {navButtons}
    </nav>
  );
}

function Profile() {
  return (
    <div className="flex items-center-safe border rounded-t-md px-3 py-2 bg-background">
      <User />
      <div className="flex flex-col ml-3">
        <span className="text-sm">John Doe</span>
        <span className="text-sm">User</span>
      </div>
    </div>
  );
}

function Notifications() {
  return (
    <div className="flex items-center-safe border-x px-3 py-2 bg-background">
      <Bell />
      <span className="ml-3">Notifications</span>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center-safe ">
      <AsteriskCircle />
      <span className="ml-2">Test Name</span>
    </div>
  );
}

export function AsteriskCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M272 227.616V121.388h-32v106.229l-98.623-59.682l-2.431 4.017v31.915L225.096 256l-86.15 52.133v31.915l2.431 4.017L240 284.383v106.229h32V284.384l98.623 59.681l2.431-4.016v-31.915L286.903 256l86.151-52.134v-31.915l-2.431-4.016z"
      ></path>
      <path
        fill="currentColor"
        d="M425.857 87.379A239.365 239.365 0 0 0 87.344 425.892A239.365 239.365 0 0 0 425.857 87.379M256.6 464c-114.341 0-207.364-93.023-207.364-207.364S142.259 49.271 256.6 49.271s207.365 93.023 207.365 207.365S370.942 464 256.6 464"
      ></path>
    </svg>
  );
}

export function User(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="m411.6 343.656l-72.823-47.334l27.455-50.334A80.23 80.23 0 0 0 376 207.681V128a112 112 0 0 0-224 0v79.681a80.236 80.236 0 0 0 9.768 38.308l27.455 50.333l-72.823 47.334A79.725 79.725 0 0 0 80 410.732V496h368v-85.268a79.727 79.727 0 0 0-36.4-67.076M416 464H112v-53.268a47.836 47.836 0 0 1 21.841-40.246l97.66-63.479l-41.64-76.341A48.146 48.146 0 0 1 184 207.681V128a80 80 0 0 1 160 0v79.681a48.146 48.146 0 0 1-5.861 22.985L296.5 307.007l97.662 63.479A47.836 47.836 0 0 1 416 410.732Z"
      ></path>
    </svg>
  );
}

export function Circle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M256.6 496A239.364 239.364 0 0 0 425.856 87.379A239.364 239.364 0 0 0 87.344 425.892A237.8 237.8 0 0 0 256.6 496m0-446.729c114.341 0 207.365 93.023 207.365 207.364S370.941 464 256.6 464S49.236 370.977 49.236 256.635S142.259 49.271 256.6 49.271"
      ></path>
    </svg>
  );
}

export function Bell() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="m450.27 348.569l-43.67-80.624V184c0-83.813-68.187-152-152-152s-152 68.187-152 152v83.945l-43.672 80.623A24 24 0 0 0 80.031 384h86.935a88.866 88.866 0 0 0-.367 8a88 88 0 0 0 176 0c0-2.7-.129-5.364-.367-8h86.935a24 24 0 0 0 21.1-35.431ZM310.6 392a56 56 0 1 1-111.419-8h110.837a56.14 56.14 0 0 1 .582 8M93.462 352l41.138-75.945V184a120 120 0 0 1 240 0v92.055L415.736 352Z"
      ></path>
    </svg>
  );
}

export function Burger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 ml-auto"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"
      ></path>
    </svg>
  );
}
