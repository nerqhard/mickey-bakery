import Link from 'next/link';
import { Reveal } from './custom/reveal';

export default function About() {
    return (
        <section className="flex flex-col items-start justify-start gap-4 py-16 lg:justify-center lg:items-center">
            <Reveal
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4 },
                }}
            >
                <h2
                    id="about"
                    className="mb-8 scroll-m-20 pt-4 font-mplus-rounded text-3xl font-extrabold tracking-tight lg:text-4xl"
                >
                    Thông tin cửa hàng
                </h2>
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                    <div className="flex-1">
                        <p className="text-sm leading-7 text-black">
                            <b>Tên cửa hàng: </b>
                            <Link href="/" className="font-bold text-red-400">
                                Tiệm bánh kem Mickey
                            </Link>
                            <br />
                            <b>Địa chỉ: </b>
                            <Link
                                href="https://maps.app.goo.gl/4QG8xQZW2wFHmSYx7"
                                target="_blank"
                                className="font-bold text-red-400"
                            >
                                Ngã tư trường THPT Lê Thế Hiếu, Cam Chính, Cam Lộ, Quảng
                                Trị
                            </Link>
                            <br />
                            <b>SĐT: </b>{' '}
                            <span className="font-bold text-red-400">0909090909</span>
                            <br />
                            <b>Facebook: </b>{' '}
                            <Link
                                href="https://www.facebook.com/tranlanh1990/"
                                target="_blank"
                                className="font-bold text-red-400"
                            >
                                Trần Lành
                            </Link>
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="w-full lg:w-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.000213918943!2d106.96211958778801!3d16.744434492643396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3140f3be53d96237%3A0x9b1415f33c1daf7d!2sB%C3%A1nh%20kem%20Mickey%20(C%C3%B9a)!5e1!3m2!1svi!2s!4v1742438633482!5m2!1svi!2s"
                            width="100%"
                            height="300"
                            style={{ border: '0' }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}