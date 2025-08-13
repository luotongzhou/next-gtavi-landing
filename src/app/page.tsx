'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import Hero from '@/components/Hero'
import Nav from '@/components/Nav'

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
	return (
		<main>
			<Nav />
			<Hero />
		</main>
	)
}
