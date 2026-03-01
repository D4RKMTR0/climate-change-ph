import { useState, useEffect } from 'react';
import TextHover from './ui/TextHover';
import { Trees } from 'lucide-react';

function Navbar() {

    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return(
        <nav 
            className={`flex justify-between h-15 items-center fixed top-0 w-full transition-all duration-300 z-10
    ${scrolled ? 'bg-[var(--bg)/90] backdrop-blur-md border-b border-white/10' : ''}`}
        >   
            <div className='flex gap-15 items-center'> 
                <span className="ml-9 font-medium flex gap-2"><Trees />Climate Change PH</span>
                <ul className='hidden sm:flex gap-4'>
                    <li>
                        <a href="#laws">
                            <TextHover>
                                <span className='text-sm'>Laws</span>
                            </TextHover>
                        </a>
                    </li>
                    <li>
                        <a href="#programs">
                            <TextHover>
                                <span className='text-sm'>Programs</span>
                            </TextHover>
                        </a>
                    </li>
                    <li>
                        <a href="#history">
                            <TextHover>
                                <span className='text-sm'>History</span>
                            </TextHover>
                        </a>
                    </li>
                </ul>
            </div>
            <span className='mr-9 text-sm font-medium bg-blue-500/12 border border-blue-500/25 text-blue-400 px-3 py-1 rounded-full'>Philippines</span>
        </nav>
    );
}

export default Navbar;