import Link from 'next/link';

export default function MainNavBar() {
	return (
		<nav style={{ display: 'flex', gap: 10 }}>
			<Link href='/'>Home</Link>
			<Link href='/shop'>Shop</Link>
			<Link href='/about-us'>About Us</Link>
			<Link href='/users'>Users</Link>
		</nav>
	);
}
