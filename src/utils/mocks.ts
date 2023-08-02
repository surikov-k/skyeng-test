import { Namespace } from '../constants';
import { RequestStatus, State, User, UserDetails } from '../types';
import { faker } from '@faker-js/faker';

const getRandomInt = (min: number, max: number): number => Math
  .floor(Math.random() * (max - min) + min);

let randomIdStart = getRandomInt(2, 10000);

export const someUser: User = {
  // eslint-disable-next-line camelcase
  avatar_url: 'avatar.jpg',
  id: 1,
  login: 'john',
};

export const someUserDetails: UserDetails = {
  avatar: 'avatar.jpg',
  bio: 'John Smith is a passionate individual with a diverse range of interests. With a background in engineering and a love for technology, John enjoys exploring new innovations and finding creative solutions to complex problems. In his free time, he enjoys outdoor activities, reading, and spending time with loved ones. John is dedicated, driven, and always eager to learn and grow.',
  company: 'company',
  createdAt: '1998-01-12T16:47:26.441Z',
  email: 'john@internet.net',
  followers: 0,
  following: 0,
  id: 1,
  location: 'some location',
  login: 'john',
  name: 'John Smith',
  publicRepos: 0,
  url: 'https://www.internet.net',
};

export function makeFakeUsers(n: number): User[] {
  return Array.from(new Array(n), makeFakeUser);
}

export function makeFakeUser(): User {
  return {
    // eslint-disable-next-line camelcase
    avatar_url: faker.internet.avatar(),
    id: randomIdStart++,
    login: faker.internet.userName(),
  };
}

export function makeFakeDetails(): UserDetails {
  return {
    avatar: faker.internet.avatar(),
    bio: faker.person.bio(),
    company: faker.company.name(),
    createdAt: faker.date.anytime().toLocaleDateString(),
    email: faker.internet.email(),
    followers: getRandomInt(0, 100),
    following: getRandomInt(0, 100),
    id: getRandomInt(0, 100),
    location: faker.location.streetAddress(),
    login: faker.internet.userName(),
    name: faker.person.fullName(),
    publicRepos: getRandomInt(0, 100),
    url: faker.internet.url(),
  };
}

export function makeFakeState(): State {
  return {
    [Namespace.Data]: {
      users: [
        someUser,
        ...makeFakeUsers(9)
      ],
      details: someUserDetails,
      total: 10,
      incompleteResults: false,
      status: RequestStatus.Idle,
      error: '',
    }
  };
}

