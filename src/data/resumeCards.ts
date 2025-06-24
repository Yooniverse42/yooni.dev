import type { ExperienceCardProps } from '@/types';

export const introduceSection = [
  '안녕하세요, 함께하는 가치를 소중히 여기는 개발자 김지윤 입니다.',
  '혼자가 아닌 동료들과 협력할 때 더 많이 배우고, 더 나은 결과를 만든다고 믿으며, 모든 사용자가 불편함 없이 서비스를 경험하고 쉽게 이용할 수 있도록 접근성을 고려한 UI/UX를 고민합니다. 또한 새로운 것을 배우고 성장하는 과정을 좋아합니다.',
  '새로운 기술이 나오면 꼭 써보고 싶어하고, 몰랐던 사실을 알게 되는 과정에서 성장의 즐거움을 느낍니다. 작은 경험 하나도 소중히 여기며, 꾸준히 배우고 시도하는 자세로 더 나은 개발자가 되고자 합니다.',
];

export const experienceCards: ExperienceCardProps[] = [
  {
    title: '멋쟁이사자처럼 프론트엔드 스쿨 10기',
    subTitle: '프론트엔드 개발자',
    date: '2024.04 ~ 2024.09',
    desc: [
      'HTML, CSS, JavaScript, React',
      'HTML, CSS, JavaScript, React',
      'HTML, CSS, JavaScript, React',
    ],
  },
];

export const educationCards: Record<string, ExperienceCardProps[]> = {
  university: [
    {
      title: '부산가톨릭대학교',
      subTitle: '원자력안전관리 융합전공 졸업',
      date: '2017.09 ~ 2020.02',
      edu: true,
    },
    {
      title: '부산가톨릭대학교',
      subTitle: '환경공학과 졸업',
      date: '2016.03 ~ 2020.02',
      edu: true,
    },
  ],
  highSchool: [
    {
      title: '학산여자고등학교',
      subTitle: '이과계열 졸업',
      date: '2013.03 ~ 2016.02',
      edu: true,
    },
  ],
};
