import {User} from "@/app/lib/definitions";

async function getUserData() {
	const data = await fetch(`https://657faffe6ae0629a3f538465.mockapi.io/api/v1/users`, {
		cache: 'no-store',
		next: {
			tags: ['users']
		}
	})
	return await data.json()
}

export default async function Page() {
	// const userData = getUserData()
	// const [{ status, value }] = await Promise.allSettled([getUserData()])

	Promise.allSettled([getUserData()]).then((results) => {
		results.forEach((result: PromiseSettledResult<User[]>) => {
			console.log(result.status)
		})
	})
	return (
		<>
			<h1 className={`text-4xl`}>test2</h1>
			{/*<h3>{users.map((obj, idx: number) => {*/}
			{/*	return (*/}
			{/*		<div key={idx}>{obj.name}</div>*/}
			{/*	)*/}
			{/*})}</h3>*/}
		</>
	)
}