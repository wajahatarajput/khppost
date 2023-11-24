const isAuthenticated = false;

const unauthMenu = [
  ['/','Home'],
  ['/register','Register'],
  ['/login','Login'],
  ['/counter','Cart'],
];

const authMenu = [
  ['/','Home']
];

export const menu = isAuthenticated ? authMenu : unauthMenu;
