import { useTranslation } from "next-i18next";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";

import dayjs from "lib/dayjs";
import Link from "components/link/Link";
import SelectLanguages from "components/SelectLanguages";

export default function RootNavbar() {
  const { t } = useTranslation("navbar");
  const router = useRouter();
  const locale = router.locale;
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const language = e.currentTarget.value;
    router.push(router.asPath, undefined, { locale: language });
  };
  return (
    <Disclosure as="nav" className="navbar">
      {({ open }) => (
        <div className="flex justify-between">
          <Link href="/" text={t("title")} className="text-2xl uppercase" />
          <div className="my-auto flex">
            <div className="my-auto mr-3">
              {t("todayis")} : {dayjs(new Date()).format("LL")}
            </div>
            <SelectLanguages onChange={onChange} value={locale} />
          </div>
        </div>
      )}
    </Disclosure>
  );
}
