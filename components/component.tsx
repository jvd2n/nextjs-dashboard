/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/bepRTlqVorL
 */
import {Button} from "@/components/ui/button"
import Link from "next/link"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {useEffect, useState} from "react";
import useSWR from "swr";
import {revalidatePath} from "next/cache";
import Image from "next/image";
type User = {
  createdAt: string
  name: string
  avatar: string
  id: string
}
// const fetcher = (url: string) => fetch(url)
const fetchUsers = async () => {
  const headers = new Headers()
  headers.append("Content-Type", "application/json")

  return await fetch(`https://657faffe6ae0629a3f538465.mockapi.io/api/v1/users`, {
    method: 'GET',
    headers: headers
  })
    .then((res) => {
      return res.json()
    })
    .then((json: User) => json)

  // const res = await fetch(`https://657faffe6ae0629a3f538465.mockapi.io/api/v1/users`, {
  //   cache: "no-store",
    // body: JSON.stringify()
  // })
  // const users = await res.json()
  // console.log(users)
  // revalidatePath("/")
  // return users.map((user: any) => ({
  //   userId: user.id
  // }))
  //   .then((res) => res.json())
    // .then((result) => result)

}

export function Component1() {
  const [users, setUsers] = useState<User[]>()
  const [users1, setUsers1] = useState<User[]>()
  // const { data, error, isLoading } = useSWR(`https://657faffe6ae0629a3f538465.mockapi.io/api/v1/users`, fetcher)
  // useEffect(() => {
  //   // fetchUsers().then((result) => setUsers(result))
  //   // setUsers(data.then((user) => user))
  //   fetch(`https://657faffe6ae0629a3f538465.mockapi.io/api/v1/users`)
  //     .then((res) => res.json())
  //     .then((json: User[]) => setUsers(json))
  // }, [])

  useEffect(() => {
    // serverTest()
    //   .then(setUsers1((res) => res))
  }, []);
  console.log(users)
  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <Link
            href={'/'}
          ><MusicIcon className="w-6 h-6" /></Link>
          <span className="text-xl font-semibold">Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">Settings</Button>
          <Button variant="default">Log out</Button>
        </div>
      </header>
      <nav className="flex flex-col px-6 py-4 bg-gray-100 border-r border-gray-200">
        <Link className="mb-2 text-lg font-semibold" href="#">
          Home
        </Link>
        <Link className="mb-2 text-lg font-semibold" href="#">
          Profile
        </Link>
        <Link className="mb-2 text-lg font-semibold" href="#">
          Settings
        </Link>
        <Link className="mb-2 text-lg font-semibold" href="#">
          Logout
        </Link>
      </nav>
      <main className="flex-grow px-6 py-4">
        {users?.map((user: User, idx) => {
          return (
            <Card key={idx} className={`mb-[5px]`}>
              <CardHeader>
                <CardTitle>[{user.id}] {user.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {/*<Image*/}
                {/*  src={user.avatar} alt={'avatar'}*/}
                {/*  width={50}*/}
                {/*  height={50}*/}
                {/*/>*/}
                <p>
                  {user.avatar}
                  {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget mauris condimentum, convallis ligula*/}
                  {/*at, ullamcorper arcu.*/}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </main>
    </div>
  )
}


function MusicIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}
