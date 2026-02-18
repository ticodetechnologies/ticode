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
                className={cn("h-10 w-auto object-contain", iconOnly ? "h-10 w-10" : "")}
            />
        </div>
    );
};

export default Logo;
