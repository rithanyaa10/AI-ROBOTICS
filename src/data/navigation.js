export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfIxDhL1XGrVjXnIMmXU5XGR6SOt0zh6dyIkxD5D5VDLvLj0A/viewform';

export const navItems = [
  { label: 'HOME', path: '/', id: 'home' },
  { label: 'ABOUT', path: '/about', id: 'about' },
  { label: 'EVENTS', path: '/events', id: 'events' },
  { label: 'EXHIBITORS', path: '/exhibitors', id: 'exhibitors' },
  { label: 'SPEAKERS', path: '/speakers', id: 'speakers' },
  { label: 'SCHEDULE', path: '/schedule', id: 'schedule' },
  { label: 'REGISTER', path: GOOGLE_FORM_URL, id: 'register', isHighlight: true, isExternal: true },
  { label: 'CONTACT', path: '/contact', id: 'contact' },
];

