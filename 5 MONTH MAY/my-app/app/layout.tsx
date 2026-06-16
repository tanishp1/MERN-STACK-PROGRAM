
import { RootContext } from '@/app/components/context/Rootcontext'
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RootContext>
      <body className="min-h-full flex flex-col">{children}
      </body>
      </RootContext>
    </html>
  );
}
