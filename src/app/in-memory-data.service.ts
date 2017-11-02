import { InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const navlinks = [
      {
        id: 1,
        title: 'О проекте',
        link: '/about'
      },
      {
        id: 2,
        title: 'События',
        link: '/events'
      },
      {
        id: 3,
        title: 'Контакты',
        link: '/contacts'
      },
      {
        id: 4,
        title: 'Партнеры',
        link: '/partners'
      },
    ];
    const action = {
      name: '',
      place: '',
      date: null,
      startInterval: null,
      endInterval: null,
      time: null
    };
    return {navlinks, action};
  }
}
