import type { AboutCardList } from '@/types';

export const aboutCardList: AboutCardList = {
  handshake: {
    src: 'images/handshake.png',
    alt: 'Handshake',
    title: '소통하고 공유하는 것을 좋아합니다',
    desc: [
      '지식을 나누고 함께 문제를 해결하는 과정에서 더 나은 결과가 나온다고 믿으며, 작은 아이디어라도 팀과 나누는 시간을 소중히 여깁니다.',
    ],
    changeIcon: false,
  },
  bullseye: {
    src: 'images/bullseye.png',
    alt: 'Bullseye',
    title: '근거 있는 사고를 추구합니다',
    desc: [
      '무언가를 설명하거나 기능을 구현할 때 항상 "왜?"라는 질문을 고민합니다. 논리적 흐름과 명확한 근거를 바탕으로 한 설계를 중요하게 생각합니다.',
    ],
    changeIcon: true,
  },
  seedling: {
    src: 'images/seedling.png',
    alt: 'Seedling',
    title: '성장하는 것을 좋아합니다',
    desc: [
      '새로운 기술을 배우고 시도하는 것을 즐기며, 일상의 작은 도전들도 성장의 기회로 삼아 더 나은 개발자가 되려 노력합니다.',
    ],
    changeIcon: false,
  },
  face: {
    src: 'images/face.png',
    alt: 'Face',
    title: '좋은 동료가 되고 싶습니다',
    desc: [
      '함께 일하고 싶은 사람, 믿고 맡길 수 있는 개발자가 되기 위해 진정성과 책임감을 가지고 임합니다.',
    ],
    changeIcon: true,
  },
};
