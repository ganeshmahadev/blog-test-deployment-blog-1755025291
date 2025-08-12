import './globals.css'

export const metadata = {
  title: 'Test Deployment Blog',
  description: '**The Ultimate Guide to Test Deployment: Strategies, Best Practices, and Tools**',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
