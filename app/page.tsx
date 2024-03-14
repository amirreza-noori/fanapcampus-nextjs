export default function HomePage() {

  const modes = ['SSR', 'CSR'];

	return (
		<div>
			<h1>What is NextJS</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
				rerum quasi doloremque temporibus atque. Quos laudantium vero et
				exercitationem libero, delectus impedit blanditiis minus
				quibusdam obcaecati minima quam sit quo!
			</p>
      <ul>
        {modes.map((mode) => <li key={mode}>NextJs supports {mode}</li>)}
      </ul>
		</div>
	);
}
