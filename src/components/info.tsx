import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from './custom/reveal';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

export default function Info() {
    const name = [{ text: 'Tiệm' }, { text: 'Bánh' }, { text: 'Kem' }, { text: 'Mickey' }];

    return (
        <header
            id="hero"
            className="mt-4 flex h-screen w-full flex-col items-center justify-center gap-4 sm:flex-row"
        >
            <div className="text-spotlight flex w-full flex-col gap-2">
                <TypewriterEffectSmooth words={name} className="flex justify-center" />
                
                <Reveal
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4, delay: 0.2 },
                    }}
                >
                    <p className="font-mplus-rounded leading-7 text-center">
                        🎂 Mọi người chọn bánh và đặt bánh qua: 
                        <br />
                        📞 0964.897.100 hoặc ⓕ 
                        <Link
                            href="https://www.facebook.com/tranlanh1990/"
                            target="_blank"
                            className="font-bold text-red-400"
                        >
                            {" Trần Lành"}
                        </Link>
                        .
                    </p>
                </Reveal>
            </div>
            <div className="relative flex h-[400px] w-full lg:h-[500px]">
                <Image
                    src={'/assets/images/me.jpg'}
                    alt="Me"
                    fill
                    priority
                    style={{ objectFit: 'contain' }}
                    className="rounded-md object-cover"
                />
            </div>
        </header>
    );
}
