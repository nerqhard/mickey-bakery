import Image from 'next/image';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip';
import Link from 'next/link';
import { Button } from './ui/button';

import { AtSign, Github, Linkedin } from 'lucide-react';
import { Reveal } from './custom/reveal';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

import { Readcv } from '@/components/ui/readcv';

export default function Hero() {
    const name = [{ text: 'Tiệm' }, { text: 'Bánh' }, { text: 'Kem' }, { text: 'Mickey' }];

    return (
        <header
            id="hero"
            className="mt-4 flex h-screen w-full flex-col items-center justify-center gap-4 sm:flex-row"
        >
            <div className="text-spotlight flex w-full flex-col gap-2">
                <TypewriterEffectSmooth words={name} />
                
                <Reveal
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4, delay: 0.2 },
                    }}
                >
                    <p className="font-mplus-rounded leading-7">
                        🎂 Mọi người chọn bánh kem ở bên dưới và đặt bánh qua: 0386699796 hoặc FB 
                        <Link
                            href="https://hitachids.com/"
                            target="_blank"
                            className="font-bold text-red-400"
                        >
                            {" Trần Lành"}
                        </Link>
                        .
                    </p>
                </Reveal>
            </div>
            <div className="relative flex h-[400px] w-full">
                <Image
                    src={'/assets/images/me.jpg'}
                    alt="Me"
                    fill
                    priority
                    style={{ objectFit: 'contain' }}
                    className="scale-75 rounded-md object-cover"
                />
            </div>
        </header>
    );
}
