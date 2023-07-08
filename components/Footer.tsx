import { footerLinks } from "@/constants";
import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: Props) => (
  <div className="flex-1 flex flex-col gap-3 text-sm min-w-max font-bold ">
    <h1 className="">{title}</h1>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="p-5 w-full ">
      <h1 className="text-[30px] logo2">Swipe</h1>

      <div className="flex flex-wrap gap-12 mt-10">
        <FooterColumn
          title={footerLinks[0].title}
          links={footerLinks[0].links}
        />

        <div className="flex-1 flex flex-col gap-4">
          <FooterColumn
            title={footerLinks[1].title}
            links={footerLinks[1].links}
          />
          <FooterColumn
            title={footerLinks[2].title}
            links={footerLinks[2].links}
          />
        </div>

        <FooterColumn
          title={footerLinks[3].title}
          links={footerLinks[3].links}
        />

        <div className="flex-1 flex flex-col gap-4">
          <FooterColumn
            title={footerLinks[4].title}
            links={footerLinks[4].links}
          />
          <FooterColumn
            title={footerLinks[5].title}
            links={footerLinks[5].links}
          />
        </div>

        <FooterColumn
          title={footerLinks[6].title}
          links={footerLinks[6].links}
        />
      </div>
    </footer>
  );
};

export default Footer;
