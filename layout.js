import { Inter } from 'next/font/google';
import '../styles/app.scss';
import Header from './Header';
import { ContextProvider } from '@/components/Clients';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ToDo App',
  description: 'This is a todo application that can be used to store todos or set reminders',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <>
          <Header />
          {children}
          </>
        </ContextProvider>
      </body>
    </html>
  )
}
