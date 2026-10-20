'use client';
import { useEffect, useState } from 'react';
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import { detectPlatform, downloads, type Platform } from './download-platform';
import { releasesUrl } from './site-config';
function PlatformIcon({platform}: {platform: Platform}) {
 if(platform==='windows') return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 3h9v9H2zm11 0h9v9h-9zM2 14h9v9H2zm11 0h9v9h-9z"/></svg>;
 if(platform==='macos') return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.3 1.3c.2 1.4-.4 2.8-1.2 3.8-.9 1-2.2 1.6-3.5 1.5-.2-1.4.5-2.8 1.3-3.7.9-1 2.3-1.6 3.4-1.6ZM20.7 17.7c-.5 1.2-.8 1.7-1.5 2.8-1 1.4-2.4 3.1-4 3.1-1.4 0-1.8-.9-3.7-.9s-2.4.9-3.8.9c-1.6 0-2.9-1.5-3.9-2.9C1 16.6.4 11.6 2.2 8.9c1.2-1.9 3.1-3 5-3 1.5 0 2.5.9 3.8.9 1.3 0 2.1-.9 3.8-.9 1.7 0 3.5.9 4.7 2.4-4.1 2.2-3.5 7.9 1.2 9.4Z"/></svg>;
 if(platform==='linux') return <span aria-hidden="true" style={{fontSize:18,lineHeight:1}}>🐧</span>;
 return <ArrowDownToLine size={18} aria-hidden="true"/>;
}
export default function DownloadButton(){
 const [platform,setPlatform]=useState<Platform>('other');
 useEffect(()=>{const nav=navigator as Navigator & {userAgentData?: {platform?: string}};setPlatform(detectPlatform(nav.userAgentData?.platform || nav.platform,nav.userAgent,nav.maxTouchPoints));},[]);
 const download=downloads[platform];
 return <span className="download-group"><a className="button primary" href={download.href} target="_blank" rel="noreferrer"><PlatformIcon platform={platform}/>{download.label}<ArrowUpRight size={16}/></a><span className="download-meta">{download.format}<span> · </span><a href={releasesUrl} target="_blank" rel="noreferrer">Outras versões</a></span></span>;
}
