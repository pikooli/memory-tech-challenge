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
          <Link href="/" text={t("title")} className="text-2xl uppercase" />
          <div className="my-auto">
            {t("todayis")} : {dayjs(new Date()).format("LL")}
          </div>
        </div>
      )}
    </Disclosure>
  );
}
