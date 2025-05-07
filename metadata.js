export default function metadata(lang) {
  // 언어별 메타데이터 설정
  const metadata = {
    en: {
      title: 'sicilian',
      description: 'Form management library',
      openGraph: {
        title: 'sicilian - Form Management Library',
        description: 'Form management library',
        locale: 'en',
      }
    },
    ko: {
      title: 'sicilian',
      description: 'form 관리 라이브러리',
      openGraph: {
        title: 'sicilian - form 관리 라이브러리',
        description: 'form 관리 라이브러리',
        locale: 'ko',
      }
    }
  };

  // 공통 설정
  const commonMetadata = {
    images: [
      {
        url: '/images/sicilian.webp',
        width: 1200,
        height: 630,
        alt: 'sicilian 라이브러리',
      }
    ],
    openGraph: {
      type: 'website',
      images: [
        {
          url: '/images/sicilian.webp',
          width: 1200,
          height: 630,
          alt: 'sicilian Library',
        }
      ],
    }
  };

  // 언어별 메타데이터와 공통 메타데이터 병합
  return {
    ...commonMetadata,
    ...metadata[lang] || metadata.en, // 지원하지 않는 언어는 영어로 대체
    openGraph: {
      ...commonMetadata.openGraph,
      ...metadata[lang]?.openGraph || metadata.en.openGraph,
    }
  };
}