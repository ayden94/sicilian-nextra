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
        url: 'https://private-user-images.githubusercontent.com/144667387/438031871-8b31fafe-108f-4d2e-a1f4-0b1b53fc049a.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDU4MTI0NDAsIm5iZiI6MTc0NTgxMjE0MCwicGF0aCI6Ii8xNDQ2NjczODcvNDM4MDMxODcxLThiMzFmYWZlLTEwOGYtNGQyZS1hMWY0LTBiMWI1M2ZjMDQ5YS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQyOFQwMzQ5MDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04OTgwNjA5MzI5NmYxZDNjNzJjOTEyNjg5ZmI0NTU1ZWMwOGE3YzBkMjUxNjdlNzFkMmIwNGM3NjdlY2E3NDgxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.pMlp_3aq-t-AIZS22t0DEsCPX-4SJt9W5-Ofsmz6ynE',
        width: 1200,
        height: 630,
        alt: 'sicilian 라이브러리',
      }
    ],
    openGraph: {
      type: 'website',
      images: [
        {
          url: 'https://private-user-images.githubusercontent.com/144667387/438031871-8b31fafe-108f-4d2e-a1f4-0b1b53fc049a.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDU4MTI0NDAsIm5iZiI6MTc0NTgxMjE0MCwicGF0aCI6Ii8xNDQ2NjczODcvNDM4MDMxODcxLThiMzFmYWZlLTEwOGYtNGQyZS1hMWY0LTBiMWI1M2ZjMDQ5YS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQyOFQwMzQ5MDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04OTgwNjA5MzI5NmYxZDNjNzJjOTEyNjg5ZmI0NTU1ZWMwOGE3YzBkMjUxNjdlNzFkMmIwNGM3NjdlY2E3NDgxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.pMlp_3aq-t-AIZS22t0DEsCPX-4SJt9W5-Ofsmz6ynE',
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