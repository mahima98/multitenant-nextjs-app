import Link from "next/link";

interface Props {
  appname?: String;
}

export default function Header({ appname }: Props) {
  return (
    <div>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <div className="logo font-bold text-lg text-red-700">{appname}</div>
          </Link>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/products"
              className={`${
                appname === "website_1" ? "visible" : "hidden"
              } text-sm font-semibold leading-6 text-gray-900`}
            >
              Products
            </Link>

            <Link
              href="/news"
              className={`${
                appname === "website_2" ? "visible" : "hidden"
              } text-sm font-semibold leading-6 text-gray-900`}
            >
              News
            </Link>

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Marketplace
            </a>

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </a>

            <a
              href="about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              About
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
