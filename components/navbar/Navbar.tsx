import { useTranslation } from "next-i18next";
import Link from "components/link/Link";
import { Disclosure } from "@headlessui/react";
import dayjs from "lib/dayjs";

export default function RootNavbar() {
  const { t } = useTranslation("navbar");

  return (
    <Disclosure as="nav" className="navbar">
      {({ open }) => (
        <div className="flex justify-between">
          <Link href="/" text={t("navbar")} className="text-2xl uppercase" />
          {t("todayis")} : {dayjs(new Date()).format("LL")}
        </div>
      )}
    </Disclosure>
  );
}
