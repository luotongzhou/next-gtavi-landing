import Image from 'next/image'
import ComingSoon from './ComingSoon'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useMaskSettings } from '@/constants'

const Hero = () => {
	const { initialMaskPos, initialMaskSize, maskSize } = useMaskSettings()

	useGSAP(() => {
		gsap.set('.mask-wrapper', { maskPosition: initialMaskPos, maskSize: initialMaskSize })
		gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 })
		gsap.set('.entrance-message', { marginTop: '0vh' })

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.hero-section',
				start: 'top top',
				scrub: 2.5,
				end: '+=200%',
				pin: true
			}
		})

		tl.to('.fade-out', { opacity: 0, ease: 'power1.inOut' })
			.to('.scale-out', { scale: 1, ease: 'power1.inOut' })
			.to('.mask-wrapper', { maskSize, ease: 'power1.inOut' }, '<')
			.to('.mask-wrapper', { opacity: 0 })
			.to(
				'.overlay-logo',
				{
					opacity: 1,
					onComplete: () => {
						gsap.to('.overlay-logo', { opacity: 0 })
					}
				},
				'<'
			)
			.to(
				'.entrance-message',
				{
					duration: 1,
					ease: 'power1.inOut',
					maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)'
				},
				'<'
			)
	})

	return (
		<section className='hero-section'>
			<div className='size-full mask-wrapper'>
				<Image src='/images/hero-bg.webp' alt='hero-bg' width={3560} height={1826} className='scale-out' />
				<Image
					src='/images/hero-text.webp'
					alt='hero-logo'
					width={3560}
					height={1826}
					className='title-logo fade-out'
				/>
				<Image
					src='/images/watch-trailer.png'
					alt='trailer-logo'
					width={250}
					height={250}
					className='trailer-logo fade-out'
				/>
				<div className='play-img fade-out'>
					<Image src='/images/play.png' alt='play' width={512} height={512} className='w-7 ml-1' />
				</div>
			</div>
			<div>
				<Image
					src='/images/big-hero-text.svg'
					alt='logo'
					width={224}
					height={150}
					className='size-full object-cover mask-logo'
				/>
			</div>

			<div className='fake-logo-wrapper'>
				<Image src='/images/big-hero-text.svg' alt='logo' width={224} height={150} className='overlay-logo' />
			</div>
			<ComingSoon />
		</section>
	)
}

export default Hero
