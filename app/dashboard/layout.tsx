import Nav from "@/app/ui/dashboard/nav/nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />

      <div>{children}</div>
    </>
  );
}
