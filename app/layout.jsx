import Footer from './Footer';
import Navbar from './Navbar';
import './globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Cuboost Movies',
  description: 'Explore new movies!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col items-center justify-between p-8 my-2 text-center ${openSans.className}`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
