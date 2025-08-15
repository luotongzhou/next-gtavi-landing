'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import FirstVideo from '@/components/FirstVideo'
import Jason from '@/components/Jason'
import SecondVideo from '@/components/SecondVideo'
import Lucia from '@/components/Lucia'
import PostCard from '@/components/PostCard'
import Final from '@/components/Final'
import Outro from '@/components/Outro'

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
	return (
		<main>
			<Nav />
			<Hero />
			<FirstVideo />
			<Jason />
			<SecondVideo />
			<Lucia />
			<PostCard />
			<Final />
			<Outro />
		</main>
	)
}
