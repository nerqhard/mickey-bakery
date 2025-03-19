import About from '@/components/about';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import { Separator } from '@/components/ui/separator';
import MatrixLoader from '@/components/custom/matrix-loader';
import Timeline from '@/components/time-line';
import Marquee from '@/components/custom/marquee';

export default function Home() {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <Hero />
            <Separator />
            <About />
            <Separator />
            <Timeline />
            <Separator />
            <Skills />
            <Separator />
            <Marquee />
            <Separator />
            <MatrixLoader />
        </div>
    );
}
