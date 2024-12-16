export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="container flex h-14 items-center"></div>
      <div className="p-5">{children}</div>
    </div>
  );
}
