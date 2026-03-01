import { ChevronDown } from 'lucide-react';

function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 flex flex-col items-center text-white/30 animate-bounce">
      <ChevronDown size={40} />
    </div>
  );
}

export default ScrollIndicator;