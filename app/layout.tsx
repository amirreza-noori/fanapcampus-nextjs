import MainNavBar from '@/layouts/MainNavBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body>
				<MainNavBar />
				{children}
			</body>
		</html>
	);
}
