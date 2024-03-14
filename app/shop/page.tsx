'use client';

import { useState } from 'react';

export default function ShopPage() {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h1>Shop</h1>
			<p>
				This is shop
				<hr />
				counter is {counter}
				<hr />
				<button onClick={() => setCounter(counter + 1)}>
					Click on me
				</button>
			</p>
		</div>
	);
}
