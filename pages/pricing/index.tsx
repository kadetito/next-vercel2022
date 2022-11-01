import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function Pricing() {
  return (
    <MainLayout>
      <h1>Pricing</h1>
      <h1 className={"title"}>
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/pricing/index.js</code>
      </p>
    </MainLayout>
  );
}
