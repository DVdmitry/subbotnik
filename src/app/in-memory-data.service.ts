import {InMemoryDbService} from 'angular-in-memory-web-api';

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
      eventName: '',
      addressOfEvent: null,
      addressLatitude: null,
      addressLongitude: null,
      exactDate: '',
      startTime: '',
      finishTime: '',
      eventStartInterval: null,
      eventFinishInterval: null,
      citizenName: '',
      citizenPhoto: null,
      companyName: '',
      companyLogo: '',
      telNumberPrime: null,
      telNumberAdd1: null,
      telNumberAdd2: null,
      usersEmail: '',
      sitePrime: '',
      siteAdd1: '',
      siteAdd2: '',
      siteAdd3: '',
      siteAdd4: '',
      aboutEvent: '',
      personToContact: '',
      placePicture: null,
      meetingPlace: null,
      meetingPlaceLatitude: null,
      meetingPlaceLongitude: null,
      getToPlace: '',
      whatToDo: '',
      equipment: '',
      minPeople: null,
      maxPeople: null,
      smthElse: '',
    };
    return {navlinks, action};
  }
}
