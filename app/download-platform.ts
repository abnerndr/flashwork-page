import { downloadLinuxUrl, downloadMacosUrl, downloadWindowsUrl, releasesUrl } from './site-config';

export type Platform = 'windows' | 'macos' | 'linux' | 'other';
export function detectPlatform(platform: string, userAgent: string, touchPoints = 0): Platform {
  if (/Android|iPhone|iPad|iPod/i.test(userAgent) || (/Mac/i.test(platform) && touchPoints > 1)) return 'other';
  if (/Win/i.test(platform)) return 'windows';
  if (/Mac/i.test(platform)) return 'macos';
  if (/Linux/i.test(platform) && !/CrOS/i.test(userAgent)) return 'linux';
  return 'other';
}
export const downloads: Record<Platform, {label: string; href: string; format: string}> = {
 windows: {label: 'Download EXE', href: downloadWindowsUrl, format: 'Windows · x64'},
 macos: {label: 'Download macOS', href: downloadMacosUrl, format: 'macOS · DMG Intel x64'},
 linux: {label: 'Download Linux', href: downloadLinuxUrl, format: 'Linux · DEB x64'},
 other: {label: 'Ver downloads', href: releasesUrl, format: 'Windows, macOS e Linux'},
};
