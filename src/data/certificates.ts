import { Certificate } from '../types';

import codingSchool from '../assets/images/CodingSchoolCertificate.png';
import sourceryAcademy from '../assets/images/SourceryAcademyCertif.png';

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Coding School Certificate',
    issuer: 'Coding School',
    image: codingSchool,
  },
  {
    id: 2,
    title: 'Sourcery Academy Certificate',
    issuer: 'Sourcery Academy',
    image: sourceryAcademy,
  },
];
