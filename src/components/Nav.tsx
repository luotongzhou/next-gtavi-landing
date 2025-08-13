import Image from 'next/image'

const Nav = () => {
	return (
		<nav>
			<Image src='/images/nav-logo.svg' width={46} height={35} alt='logo' className='scale-90' />
			<Image src='/images/menu.svg' alt='menu' width={45} height={45} className='w-10' />
		</nav>
	)
}

export default Nav
