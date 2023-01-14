import Image from 'next/image';
import { get } from '@vercel/edge-config';
import { redirect } from 'next/navigation';
import {
  SiMaildotru,
  SiTwitter, 
  SiGithub, 
  SiInstagram, 
  SiWhatsapp,
  SiYoutube, 
  SiLinkedin 
} from 'react-icons/si';

export const dynamic = 'force-dynamic',
  runtime = 'edge';

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

interface Data {
  name: string;
  avatar: string;
  links: Link[];
  socials: Social[];
}

interface Link {
  href: string;
  title: string;
  image?: string;
}

interface Social {
  href: string;
  title: string;
}

export default async function HomePage() {
  const data: Data | undefined = await get('link');

  if (!data) {
    redirect('https://taufikcrisnawan.dev');
  }

  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <a href="https://ik.imagekit.io/taufik/profile/Taufik-Crisnawan-Santosa.jpg" target="_blank">
        <Image
        priority
        className="rounded-full hover:scale-110 transition-all"
        alt={data.name}
        src={data.avatar}
        width={100}
        height={100}
        href="https://ik.imagekit.io/taufik/profile/Taufik-Crisnawan-Santosa.jpg"
        target="_blank"
      /></a>
      <h1 className="font-bold mt-2 text-2xl text-white">{data.name}</h1>
      <p className="mt-1 mb-8 text-white">A Student & Tech Enthusiast</p>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex items-center gap-3 mt-2 text-white">
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.href.includes('mailto') ? (
              <SiMaildotru size='26px' className='hover:scale-110 transition-all'/>
            ) : social.href.includes('twitter') ? (
                <SiTwitter size='30px' className='hover:scale-110 transition-all'/>
            ) : social.href.includes('youtube') ? (
              <SiYoutube size='30px' className='hover:scale-110 transition-all'/>
            ) : social.href.includes('instagram') ? (
              <SiInstagram size='26px' className='hover:scale-110 transition-all'/>
            ) : social.href.includes('wa') ? (
                <SiWhatsapp size='26px' className='hover:scale-110 transition-all'/>
            ) : social.href.includes('github') ? (
              <SiGithub size='26px' className='hover:scale-110 transition-all'/>
            ) : social.href.includes('linkedin') ? (
              <SiLinkedin size='26px' className='hover:scale-110 transition-all'/>
            ) : null}
          </a>
        ))}
      </div>
      <div className="flex justify-center my-8 text-white">
        <a href="https://taufikcrisnawan.dev/" target="_blank">© 2023 Taufik Crisnawan Santosa</a>
      </div>
    </div>
  );
}