import { type ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

function TextHover({children}: Props) {
    return (
    <div className="text-white/45 hover:text-white transition-colors duration-200 cursor-pointer">
      {children}
    </div>
    );
}

export default TextHover;