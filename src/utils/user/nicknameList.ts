const nicknameList = [
  '콩돌이',
  '밤돌이',
  '고옥이',
  '오루묵씨',
  '모리',
  '로드리',
  '몽셰르',
  '마스터',
  '갑돌',
  'K.K.',
  '죠니',
  '깨빈',
  '부옥이',
  '케이트',
  '저스틴',
  '레온',
  '낯선고양이',
  '펌킨',
  '프랭클린',
  '루돌',
  '베르리나',
  '토빗',
  '파니엘',
  '카트리나',
  '여욱',
  '사하라',
  '패트릭',
  '늘봉',
  '리사',
  '리포',
  '고북',
  '마추릴라',
  '솜이',
  '방글',
  '너티',
  '무파라',
  '멜레옹',
]

export const getRandomNickname = () => {
  const index = Math.floor(Math.random() * nicknameList.length)
  return nicknameList[index]
}
