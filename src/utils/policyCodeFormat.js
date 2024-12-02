export const prdRpttSecdMap = {
  '002001': '상시',
  '002002': '연간반복',
  '002004': '월간반복',
  '002005': '미정',
};

export const policyFieldCodes = {
  '023010': '일자리',
  '023020': '주거',
  '023030': '교육',
  '023040': '복지 / 문화',
  '023050': '참여 / 권리',
};

export const policyFieldCodesLetter = {
  일자리: '023010',
  주거: '023020',
  교육: '023030',
  '복지 / 문화': '023040',
  '참여 / 권리': '023050',
};

export function getRpttDescription(prdRpttSecd) {
  return prdRpttSecdMap[prdRpttSecd] || '-';
}

export function getpolyRlmCd(polyRlmCd) {
  return policyFieldCodes[polyRlmCd];
}
