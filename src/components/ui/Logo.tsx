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
                className={cn("h-10 w-auto object-contain md:h-[3.25rem] lg:h-[3.75rem]", iconOnly ? "h-10 w-10 md:h-[3.25rem] md:w-[3.25rem]" : "")}
            />
        </div>
    );
};

export default Logo;
