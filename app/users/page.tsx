import type { Metadata } from 'next';
import type { User } from './types';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Site Users',
};

export default async function UsersPage() {
	const url = 'https://api.github.com/users';

	const rawResponse = await fetch(url);
	const users: User[] = await rawResponse.json();

	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>
					<Link href={`/users/${user.login}`}>{user.login}</Link>
				</div>
			))}
		</div>
	);
}
