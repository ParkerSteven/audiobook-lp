import React from "react";

export interface SocialLinkItem {
    name: string;
    href: string;
    img?: any;
    icon?: any
}

export const StickySocialStrip: React.FC = () => {
    const socialLinks: SocialLinkItem[] = [
        // {
        //     name: 'ibpaonline',
        //     href: 'https://www.ibpa-online.org/',
        //     img: ibpaonline
        // },
        {
            name: 'Bark',
            href: 'https://www.bark.com/en/us/company/collingwood-press/AVXNky',
            img: "/assets/images/socials/bark.webp"
        },

        {
            name: 'G2',
            href: 'https://www.g2.com/sellers/collingwood-press',
            img: "/assets/images/socials/g2.png"
        },
        {
            name: 'Reviews',
            href: 'https://www.reviews.io/company-reviews/store/www.thecollingwoodpress.com',
            img: "/assets/images/socials/reviews.svg"
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/thecollingwoodpress/',
            img: "/assets/images/socials/instagram.svg"
        },
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/theCollingwoodpress',
            icon: (
                <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/the-collingwood-press/',
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="4" fill="#0A66C2" />
                    <path fill="#ffffff" d="M19 19h-3v-4.7c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48V19h-3V9h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19zM6.88 7.63a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48zM8.38 19h-3V9h3v10z" />
                </svg>
            )
        },

        {
            name: 'Pinterest',
            href: 'https://www.pinterest.com/Thecollingwoodpress/',
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="11" fill="#ffffff" />
                    <path fill="#E60023" fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
            )
        },
        {
            name: 'TikTok',
            href: 'https://www.tiktok.com/@thecollingwoodpress',
            img: "/assets/images/socials/tiktok.svg"
        },

        {
            name: 'YouTube',
            href: 'https://www.youtube.com/@TheCollingwoodPress',
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                    <polygon fill="#ffffff" points="9.545,15.568 15.818,12 9.545,8.432" />
                </svg>
            )
        },
        {
            name: 'X',
            href: 'https://x.com/CollingwoodUS',
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="4" fill="#000000" />
                    <path fill="#ffffff" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
                </svg>
            )
        },
        {
            name: 'Mastodon',
            href: 'https://mastodon.social/@Collingwoodpress',
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#6364FF" d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.697 1.496 2.512.793 5.313.25 7.48.01 10.05.01 12.392c0 2.222.02 4.542.427 6.643.504 2.61 2.923 4.887 5.645 5.16 2.855.287 5.76.227 8.528-.432 0 0 .195-.045.297-.087v-2.368c-.015.005-.183.045-.297.069-1.99.414-4.086.327-6.04-.153-.787-.193-.974-.757-.998-1.383 0-.022.002-.045.002-.068.756.2 1.528.342 2.308.423 1.096.115 2.193.12 3.284.015 2.456-.237 4.79-1.25 5.922-2.73.917-1.2 1.442-2.925 1.547-5.068.04-1.04.05-2.35.05-3.673 0-1.34-.01-2.484-.047-3.41z" />
                    <path fill="#ffffff" d="M18.963 12.956h-2.385V7.482c0-1.895-.806-2.857-2.418-2.857-1.782 0-2.673 1.15-2.673 3.45v3.473H9.49V8.075c0-2.3-.89-3.45-2.673-3.45-1.612 0-2.418.962-2.418 2.857v5.474H2.014V7.482c0-1.895.485-3.398 1.455-4.509.97-1.11 2.24-1.666 3.81-1.666 1.815 0 3.18.697 4.095 2.091.433-.67 1.01-1.218 1.73-1.644.72-.426 1.52-.64 2.4-.64 1.57 0 2.84.555 3.81 1.666.97 1.11 1.455 2.614 1.455 4.509v5.474z" />
                </svg>
            )
        },
    ];

    return (
        <aside
            aria-label="Social media and accreditation links"
            className="fixed left-0 top-[40%] z-[9999] hidden -translate-y-1/2 md:flex"
        >
            <div className="flex flex-col items-center gap-1.5 rounded-r-xl border border-l-0 border-white/20 bg-gradient-to-b from-[#1d2a48]/95 to-[#111a33]/95 px-1.5 py-2.5 shadow-[0_10px_24px_rgba(4,10,30,0.42)] backdrop-blur-md">
                {/* BBB Seal */}
                <a
                    href="https://www.bbb.org/us/tx/livingston/profile/book-publishers/collingwood-press-0825-1000231047/#sealclick"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="Open BBB profile"
                    className="mb-1 rounded-md border border-white/30 bg-white/95 p-1 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                    <img
                        src={"/assets/images/socials/blue-seal-63-134-bbb-1000231047.png"}
                        alt="BBB Review"
                        width={28}
                        height={60}
                        className="h-auto w-7"
                        loading="lazy"
                    />
                </a>

                {/* IBPA Online */}
                <a
                    href="https://www.ibpa-online.org/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="Open IBPA profile"
                    className="mb-1 rounded-md border border-white/30 bg-white/95 p-1 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                    <img
                        src={"/assets/images/socials/ibpa-online.jpg"}
                        alt="IBPA Online"
                        width={28}
                        height={80}
                        className="h-auto w-7 gap-1.5"
                        loading="lazy"
                    />
                </a>

                {/* Social Icons */}
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${social.name}`}
                        className="group grid h-8 w-8 place-items-center rounded-sm border border-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-[0_5px_14px_rgba(0,0,0,0.26)]"
                        title={social.name}
                    >
                        {social.img ? (
                            <img
                                src={social.img}
                                alt={`${social.name} Icon`}
                                width={26}
                                height={26}
                                className="h-[26px] w-[26px] transition-transform duration-300 group-hover:scale-105"
                            />
                        ) :
                            <div className="flex h-[26px] w-[26px] items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                {social.icon}
                            </div>
                        }
                    </a>
                ))}
            </div>
        </aside>
    );
};

export default StickySocialStrip;
