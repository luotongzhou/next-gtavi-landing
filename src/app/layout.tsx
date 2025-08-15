import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Grand Theft Auto VI',
	description: 'Grand Theft Auto VI Landing Page Build By Next.js'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
