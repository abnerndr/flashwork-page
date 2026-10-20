export const repositoryUrl =
  process.env.NEXT_PUBLIC_REPOSITORY_URL || 'https://github.com/abnerndr/flashwork';

export const releasesUrl = `${repositoryUrl.replace(/\/$/, '')}/releases`;

export const downloadWindowsUrl =
  process.env.NEXT_PUBLIC_DOWNLOAD_WINDOWS_URL ||
  'https://github.com/abnerndr/flashwork/releases/download/0.1.0/Flashwork_0.1.0_x64-setup.exe';

export const downloadMacosUrl =
  process.env.NEXT_PUBLIC_DOWNLOAD_MACOS_URL ||
  'https://github.com/abnerndr/flashwork/releases/download/0.1.0/Flashwork_0.1.0_x64.dmg';

export const downloadLinuxUrl =
  process.env.NEXT_PUBLIC_DOWNLOAD_LINUX_URL ||
  'https://github.com/abnerndr/flashwork/releases/download/0.1.0/Flashwork_0.1.0_amd64.deb';
