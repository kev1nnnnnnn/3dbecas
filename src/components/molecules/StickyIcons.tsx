import {  InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";

const StickyIcons = () => {
    return (
        <aside className="fixed lg:bottom-0 bottom-1/2 left-0  flex flex-col gap-5 items-center bg-gradient-to-t z-40 from-blue-500 to-cyan-500 rounded-e-lg py-3 px-2">
            {/* <a href="/" className="text-zinc-100 hover:text-zinc-900">
                <FacebookLogo size={15} color="currentColor" weight="fill" />
            </a>
            <a href="/" className="text-zinc-100 hover:text-zinc-900">
                <TwitterLogo size={15} color="currentColor" weight="fill" />
            </a> */}
            <a href="https://www.youtube.com/channel/UCDabyV4ctJGqdmv08Qkypjg" target="_blank" className="text-zinc-100 hover:text-zinc-900">
                <YoutubeLogo size={15} color="currentColor" weight="fill" />
            </a>
            <a href="https://www.instagram.com/3d_becas/" target="_blank" className="text-zinc-100 hover:text-zinc-900">
                <InstagramLogo size={15} color="currentColor" weight="fill" />
            </a>
        </aside>
    
    )
}

export default StickyIcons