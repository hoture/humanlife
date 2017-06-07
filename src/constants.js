export const mapCategoryToTwitterImgUrl = {
  '0'        : 'pic.twitter.com/3xmtTvnhDy',
  '10-L'     : 'pic.twitter.com/cJcE2XLlmf',
  '10-M'     : 'pic.twitter.com/j5ExEilCJp',
  '10-H'     : 'pic.twitter.com/V2eBAZI2ot',
  '20-L'     : 'pic.twitter.com/bUhXf8nGSq',
  '20-M'     : 'pic.twitter.com/ecuvuZQsM4',
  '20-H'     : 'pic.twitter.com/yt9q3DDwft',
  '3040-L'   : 'pic.twitter.com/xW5TUOlYyN',
  '3040-M'   : 'pic.twitter.com/BD2gkW7FmG',
  '3040-H'   : 'pic.twitter.com/ZP93879bpZ',
  '5060-L'   : 'pic.twitter.com/VJFniUtnrp',
  '5060-M'   : 'pic.twitter.com/CA9yV06483',
  '5060-H'   : 'pic.twitter.com/x8XCpjM8w2',
  'over70-L' : 'pic.twitter.com/GFlmMz32nw',
  'over70-M' : 'pic.twitter.com/t02mS77HbQ',
  'over70-H' : 'pic.twitter.com/x8XCpjM8w2',
  'usagi'    : 'pic.twitter.com/b9rkRqUoz7',
}
export const tweetConstants = {
  tweetBaseUrl : 'https://twitter.com/intent/tweet',
  hashTag : '人はなぜ生きるのか',
  tweetUrl : 'https://humanlife.herokuapp.com/',
  myTwitterId : 'hoture6',
}

export const gameConstants = {
  yearsUnit   : 10,
  usagiProb   : 1,
  lotteryProb : 1,
  workGainMin : 1,
  workGainMax : 10,
  playLoseMin : -1,
  playLoseMax : -10,
  lotteryGain : 1000,
  timeout     : 1000,
  workMessage : (years, gain) =>
    `あなたはこの${years}年間労働し、${gain}億円を得ました`,
  playMessage : (years, lose) =>
    `あなたはこの${years}年間豪遊し、${-lose}億円を失いました`,
  lotteryMessage : (gain) =>
    `あなたは宝くじに当選し、${gain}億円を得ました`,
  usagiMessage: () =>
    'あなたは突然うさぎになり、悩みから開放されました',
  carrotMessage: () =>
    'あなたはうさぎとして楽しく暮らしています',
}

export const getRand = (min, max) => {
  return Math.floor( Math.random() * (max+1-min) ) + min
}

export const getCategory = status => {
  const { age, money, isUsagi }   = status

  if (isUsagi) return 'usagi'

  const L_lim_young  = -5
  const L_lim_middle = -15
  const L_lim_old    = -25
  const H_lim_young  = 5
  const H_lim_middle = 15
  const H_lim_old    = 25

  if (age <= 0) {
    return '0'
  }
  else if (age <= 10) {
    if (money <= L_lim_young) return '10-L'
    else if (money >= H_lim_young) return '10-H'
    else return '10-M'
  }
  else if (age <= 20) {
    if (money <= L_lim_young) return '20-L'
    else if (money >= H_lim_young) return '20-H'
    else return '20-M'
  }
  else if (age <= 40) {
    if (money <= L_lim_middle) return '3040-L'
    else if (money >= H_lim_middle) return '3040-H'
    else return '3040-M'
  }
  else if (age <= 60) {
    if (money <= L_lim_middle) return '5060-L'
    else if (money >= H_lim_middle) return '5060-H'
    else return '5060-M'
  }
  else {
    if (money <= L_lim_old) return 'over70-L'
    else if (money >= H_lim_old) return 'over70-H'
    else return 'over70-M'
  }
}
