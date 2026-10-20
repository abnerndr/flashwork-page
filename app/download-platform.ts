export type Platform = 'windows' | 'macos' | 'linux' | 'other';
export function detectPlatform(platform: string, userAgent: string, touchPoints = 0): Platform {
  if (/Android|iPhone|iPad|iPod/i.test(userAgent) || (/Mac/i.test(platform) && touchPoints > 1)) return 'other';
  if (/Win/i.test(platform)) return 'windows';
  if (/Mac/i.test(platform)) return 'macos';
  if (/Linux/i.test(platform) && !/CrOS/i.test(userAgent)) return 'linux';
  return 'other';
}
const release = 'https://github.com/abnerndr/flashwork/releases';
export const downloads: Record<Platform, {label: string; href: string; format: string}> = {
 windows: {label: 'Download EXE', href: `${release}/download/0.1.0/Flashwork_0.1.0_x64-setup.exe`, format: 'Windows · x64'},
 macos: {label: 'Download macOS', href: `${release}/download/0.1.0/Flashwork_0.1.0_x64.dmg`, format: 'macOS · DMG Intel x64'},
 linux: {label: 'Download Linux', href: `${release}/download/0.1.0/Flashwork_0.1.0_amd64.deb`, format: 'Linux · DEB x64'},
 other: {label: 'Ver downloads', href: release, format: 'Windows, macOS e Linux'},
};
