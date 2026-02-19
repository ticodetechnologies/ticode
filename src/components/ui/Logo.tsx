import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

interface LogoProps {
    className?: string;
    iconOnly?: boolean;
}

const Logo = ({ className, iconOnly = false }: LogoProps) => {
    const { isRTL } = useLanguage();

    return (
        <div className={cn('flex items-center gap-2', className)} dir="ltr">
            <img
                src="/logo.png"
                alt="Ticode Technologies"
                className={cn("h-9 w-auto object-contain md:h-10", iconOnly ? "h-9 w-9 md:h-10 md:w-10" : "")}
            />
        </div>
    );
};

export default Logo;
