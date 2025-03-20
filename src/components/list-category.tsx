import { DetailCard } from './custom/detail-card';
import { Reveal } from './custom/reveal';

export default function ListCategory() {
    return (
        <section
            id="list-category"
            className="flex flex-col items-center justify-center gap-4 py-16 sm:py-32"
        >
            <Reveal
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4 },
                }}
                className="flex flex-col items-center justify-center gap-4"
            >
                <h2
                    className="scroll-m-20 font-mplus-rounded text-3xl font-extrabold tracking-tight lg:text-4xl"
                >
                    Danh sách danh mục
                </h2>
            </Reveal>

            <Reveal
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4 },
                }}
            >
                List
            </Reveal>
        </section>
    );
}
