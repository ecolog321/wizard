

export default function DoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-16">
      {children}
    </div>
  );
}
