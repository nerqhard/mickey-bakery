import Info from '@/components/info';
import { Separator } from '@/components/ui/separator';
import ListProduct from '@/components/list-product';
import About from '@/components/about';
export default function Home() {
    return (
        <div className="flex flex-col overflow-x-hidden relative z-20">
            <Info />
            <Separator />
            <Separator />
            <ListProduct />
            <Separator />
            <Separator />
            <About />
        </div>
    );
}
