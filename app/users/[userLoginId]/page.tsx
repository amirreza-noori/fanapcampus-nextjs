import Image from 'next/image';
import type { UserDetails } from './types';

type Props = {
	params: {
		userLoginId: string;
	};
};

export default async function UserDetailsPage({
	params: { userLoginId },
}: Props) {
	const res = await fetch('https://api.github.com/users/' + userLoginId);
	const { email, bio, avatar_url, name }: UserDetails = await res.json();

	return (
		<div>
			<h1>{userLoginId} Details Page</h1>
			<div>Email: {email}</div>
			<div>BIO: {bio}</div>
			<div>
				<Image src={avatar_url} alt={name} width={100} height={100} />
			</div>
		</div>
	);
}
