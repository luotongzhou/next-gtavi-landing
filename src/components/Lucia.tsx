import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

const Lucia = () => {
	useGSAP(() => {
		gsap.set('.lucia-life', { marginTop: '-80vh' })

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '.lucia-life',
					start: 'top 80%',
					end: '10% center',
					scrub: 2
				}
			})
			.to('.second-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' })

		gsap.to('.lucia-life .img-box', {
			scrollTrigger: {
				trigger: '.lucia-life',
				start: 'top center',
				end: '80% center',
				scrub: 2
			},
			y: -200,
			duration: 1,
			ease: 'power1.inOut'
		})
	})
	return (
		<section className='lucia-life'>
			<div className='flex flex-col gap-5 items-end img-box lg:1/2 pl-10 mt-96'>
				<div className='lucia-1'>
					<Image src='/images/lucia-1.webp' alt='lucia-1' width={3560} height={2003} />
				</div>
				<div className='lucia-3'>
					<Image src='/images/lucia-3.webp' alt='lucia-3' width={3560} height={2003} />
				</div>
			</div>

			<div className='lg:w-1/2 lucia-life-content'>
				<div className='max-w-xl lg:pl-32 pl-10'>
					<h1>Lucia Caminos</h1>
					<h2>Lucia’s father taught her to fight as soon as she could walk.</h2>
					<p>
						Life has been coming at her swinging ever since. Fighting for her family landed her in the Leonida
						Penitentiary. Sheer luck got her out. Lucia’s learned her lesson — only smart moves from here.
					</p>
				</div>

				<div className='lucia-2'>
					<Image src='/images/lucia-2.webp' alt='lucia-2' width={3560} height={2003} />
				</div>

				<p className='max-w-xl lg:pl-32 pl-10'>
					More than anything, Lucia wants the good life her mom has dreamed of since their days in Liberty City — but
					instead of half-baked fantasies, Lucia is prepared to take matters into her own hands.
				</p>
			</div>
		</section>
	)
}

export default Lucia
